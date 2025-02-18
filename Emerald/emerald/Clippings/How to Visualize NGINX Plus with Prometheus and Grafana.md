---
author:
  - "[[F5]]"
  - "[[Inc.]]"
created: 2025-02-17
published: 
source: https://www.f5.com/company/blog/nginx/how-to-visualize-nginx-plus-with-prometheus-and-grafana?utm_medium=owned-social&utm_source=youtube&utm_campaign=ww-nx_ssap_g&utm_content=bg-
tags:
  - lgtm
  - nginx
related:
  - "[[NGINX]]"
  - "[[grafana]]"
  - "[[lgtm]]"
---
As we discussed in [How to Improve Visibility in Kubernetes](https://www.f5.com/company/blog/nginx/how-to-improve-visibility-in-kubernetes), one of the top challenges for app development and delivery teams is getting insight into app performance, security, and availability. These insights help teams troubleshoot problems quickly and proactively prepare for traffic spikes.

Traffic management tools – such as load balancers, reverse proxies, API gateways, and Ingress controllers – generate a wealth of information about your app and infrastructure health. You can track these valuable metrics in real time on the [NGINX Plus dashboard](https://www.nginx.com/products/nginx/live-activity-monitoring/), and NGINX Plus can also feed metrics to third‑party monitoring tools to give you extra insight from visualizations of performance over time. Two of the most popular tools work together to give you these time‑series graphs:

- [Prometheus](https://prometheus.io/) – An open source project of the Cloud Native Computing Foundation (CNCF) for monitoring and alerting
- [Grafana](https://grafana.com/) – An open source visualization and analytics tool that generates graphs and other visualizations from time‑series databases such as Prometheus

The [Prometheus-njs](https://www.nginx.com/products/nginx/modules/prometheus-njs/) module makes it easy to feed NGINX Plus metrics to Prometheus and Grafana. It uses the [NGINX JavaScript module](https://nginx.org/en/docs/njs/) (NJS) and the [NGINX Plus API](https://nginx.org/en/docs/http/ngx_http_api_module.html) to export metrics from NGINX Plus to the Prometheus server.

In this video demo, we cover the complete steps for setting up NGINX Plus, Prometheus, and Grafana, and building Grafana graphs.

![](https://www.youtube.com/watch?v=0Qs6r8l1GAA)

To help you set up your own implementation, we summarize the steps in the following sections, mapped to timepoints in the video:

- [Prerequisites](https://www.f5.com/company/blog/nginx/?utm_medium=owned-social&utm_source=youtube&utm_campaign=ww-nx_ssap_g&utm_content=bg-#Prerequisites)
- [Set Up the NGINX Plus Server (1:20)](https://www.f5.com/company/blog/nginx/?utm_medium=owned-social&utm_source=youtube&utm_campaign=ww-nx_ssap_g&utm_content=bg-#NGINX-Plus)
- [Set Up the Prometheus Server (5:30)](https://www.f5.com/company/blog/nginx/?utm_medium=owned-social&utm_source=youtube&utm_campaign=ww-nx_ssap_g&utm_content=bg-#Prometheus)
- [Set Up the Grafana Server (9:15)](https://www.f5.com/company/blog/nginx/?utm_medium=owned-social&utm_source=youtube&utm_campaign=ww-nx_ssap_g&utm_content=bg-#Grafana)
- [Create NGINX Plus Graphs in Grafana (11:15)](https://www.f5.com/company/blog/nginx/?utm_medium=owned-social&utm_source=youtube&utm_campaign=ww-nx_ssap_g&utm_content=bg-#graphs)

**Notes:**

- These instructions rely on the NGINX Plus API, and so do not work for NGINX Open Source.
- To use Prometheus and Grafana with NGINX Ingress Controller, see our [documentation](https://docs.nginx.com/nginx-ingress-controller/logging-and-monitoring/prometheus/).

## Prerequisites

Before beginning the demo, we satisfied the following prerequisites.

1. [Install NGINX Plus](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-plus/) on the NGINX Plus server. For the purposes of the demo, we’re doing a clean initial installation. If you’re using an existing NGINX Plus server, you might need to modify the changes made to configuration files during the demo.
2. [Install the NGINX JavaScript (njs) module](https://docs.nginx.com/nginx/admin-guide/dynamic-modules/nginscript/) on the NGINX Plus server.
3. [Install the latest version of Docker](https://docs.docker.com/engine/install/) on the Prometheus server. In the demo, we follow common practice and run Prometheus on a second server, separate from NGINX Plus.
4. Install the latest version of Docker on the Grafana server (in the demo, a third server).

## Set Up the NGINX Plus Server (1:20)

1. Install the Prometheus-njs module. We’re using Ubuntu 20.04 in the demo, and this is the appropriate command. For other operating systems, see the [documentation](https://docs.nginx.com/nginx/admin-guide/dynamic-modules/prometheus-njs/).

```
$ sudo apt-get install nginx-plus-module-prometheus
```
2. Using your preferred text editor, open **/etc/nginx/nginx.conf** and add the following [`load_module`](https://nginx.org/en/docs/ngx_core_module.html#load_module) directive in the top‑level context, outside the `http` block.

```
load_module modules/ngx_http_js_module.so;
# existing top-level directives

http {
    #...
}
```
3. (Optional) Increase the size of the buffer for storing response bodies from subrequests (the default size is 4 KB or 8 KB, depending on the platform). This prevents `too` `big` `subrequest` `response` errors , which appear in the [NGINX error log](https://docs.nginx.com/nginx/admin-guide/monitoring/logging/). Add the following [`subrequest_output_buffer_size`](https://nginx.org/en/docs/http/ngx_http_core_module.html#subrequest_output_buffer_size) directive in the `http` block.

```
http {    #...
    subrequest_output_buffer_size 32k;
}
```
4. Save **nginx.conf** and run this command to verify that the NGINX configuration is syntactically correct.

```
$ sudo nginx -tnginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
5. Change directory to **conf.d** and list the files.

```
$ cd conf.d$ ls
default.conf
```
6. The **default.conf** file defines a virtual server that listens on port 80. The virtual server for Prometheus needs to listen on that port, so remove **default.conf** to free it up.

```
$ sudo rm default.conf
```
7. Using your preferred text editor, create a new file called **prometheus.conf**, with the following contents.

```
js_import /usr/share/nginx-plus-module-prometheus/prometheus.js;

server {
    location = /metrics {
        js_content prometheus.metrics;
    }
 
    location /api {
        api;
    } 
}
```

The [`js_import`](https://nginx.org/en/docs/http/ngx_http_js_module.html#js_import) directive specifies the location of the NGINX JavaScript code that converts the metrics generated by the NGINX Plus API into the format required by Prometheus. (You do not also need to add a `load_module` directive for Prometheus-njs.)

The first [`location`](https://nginx.org/en/docs/http/ngx_http_core_module.html#location) block provides access to the Prometheus-formatted metrics. The second `location` block enables the NGINX Plus API, which generates the raw metrics and exposes them to Prometheus.

**Note:** In production environments, we strongly recommend restricting access to the NGINX Plus API as described in our [documentation](https://docs.nginx.com/nginx/admin-guide/load-balancer/dynamic-configuration-api/#enabling-dynamic-configuration).

For more information about the Prometheus-njs module, see our [documentation](https://docs.nginx.com/nginx/admin-guide/dynamic-modules/prometheus-njs/).
8. Save **prometheus.conf**, check for correct syntax as in [Step 4](https://www.f5.com/company/blog/nginx/?utm_medium=owned-social&utm_source=youtube&utm_campaign=ww-nx_ssap_g&utm_content=bg-#nginx-t), and run this command to start NGINX Plus.

```
$ sudo nginx
```

## Set Up the Prometheus Server (5:30)

1. Create a new YAML‑formatted Prometheus config file called **prometheus.yml** in the **/etc/prometheus** directory, with these contents (based on a [default config file](https://prometheus.io/docs/introduction/first_steps/#configuring-prometheus) from the Prometheus website). As shown, the one change to make is to add the IP address and port of the NGINX Plus server in the targets field.

```
global:
  scrape_interval: 15s 
  
  external_labels:
    monitor: 'codelab-monitor'
 
scrape_configs:  
  - job_name: 'prometheus'
    
    scrape_interval: 5s
 
    static_configs:
      - targets: ['NGINX_Plus_IP_address:80']
```

For details about Prometheus configuration, including more options you can include in the configuration file, see the [Prometheus documentation](https://prometheus.io/docs/prometheus/latest/configuration/configuration/).
2. Save **prometheus.yml**, then run the following command. It pulls Prometheus from Docker Hub and exposes it on port 9090.

```
$ sudo docker run --network="host" -d -p 9090:9090 -v ~/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
```
3. In a browser, navigate to the IP address and port of the new Prometheus server. A page like the following confirms that the server is working.

[![](https://www.f5.com/content/dam/f5-com/nginx-china-archive/2021/Prometheus_homepage.png)](https://www.f5.com/content/dam/f5-com/nginx-china-archive/2021/Prometheus_homepage.png)
4. Verify that Prometheus is accessing the feed of NGINX Plus metrics. Click the globe icon to the left of the  **Execute**  button in the upper right corner of the window. A list of metrics like the following appears.

[![](https://www.f5.com/content/dam/f5-com/nginx-china-archive/2021/Prometheus_Metrics-Explorer.png)](https://www.f5.com/content/dam/f5-com/nginx-china-archive/2021/Prometheus_Metrics-Explorer.png)

## Set Up the Grafana Server (9:15)

1. Run this command to pull Grafana from Docker Hub and expose it on port 3000:

```
[terminal]$ sudo docker run -d -p 3000:3000 grafana/grafana
```

For other installation methods, see the [Grafana documentation](https://grafana.com/docs/grafana/latest/installation/).
2. In a browser, navigate to the IP address and port of the new Grafana server. The Grafana login page confirms that the server is working.

[![](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_login-page.png)](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_login-page.png)
3. Log in by entering **admin** in both the **Email or username** and **Password** fields. We strongly recommend that you set a new secure password as prompted, but we skip that step in the demo for the sake of time.
4. On the Grafana homepage which appears, register Prometheus as a *data source* by following the instructions in the [Grafana documentation](https://prometheus.io/docs/visualization/grafana/#creating-a-prometheus-data-source). The video shows the steps in the Grafana GUI.

**Note:** In Step 5 of the Grafana instructions, instead of the URL example shown (**http://localhost:9090**) enter the IP address of your Prometheus server (and port 9090).

[![](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_homepage.png)](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_homepage.png)

After you click the  **Save & test**  button in Step 7 of the Grafana instructions, the green box with a checkmark and the **Data source is working** message indicate that Grafana has successfully connected to the Prometheus server.

[![](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_Data-source-is-working.png)](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_Data-source-is-working.png)

## Create NGINX Plus Graphs in Grafana (11:15)

While Prometheus is useful for looking at just one metric, Grafana makes it easy to look at a collection of metrics on a single graph.

To build a Grafana graph:

1. Click the plus sign (**+**) in the navigation bar at the left side of the page (see the screenshot in [Step 4](https://www.f5.com/company/blog/nginx/?utm_medium=owned-social&utm_source=youtube&utm_campaign=ww-nx_ssap_g&utm_content=bg-#Grafana-homepage) of the previous section). Select **Dashboard** on the **Create** drop‑down menu.
2. Click the **Add an empty panel** box.
3. On the **New dashboard/Edit Panel** page that appears, verify that Prometheus appears in the **Data source** field of the **Query** tab in the bottom half of the page. If not, select **Prometheus** from the drop‑down menu.
4. Enter `nginx` in the  **Metrics browser >**  field. A list of NGINX Plus metrics appears.

[![](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_metrics-list.png)](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_metrics-list.png)

Here are brief descriptions to give you an idea of what information they provide.

- `nginxplus_connections_accepted` – Accepted client connections
- `nginxplus_connections_active` – Active client connections
- `nginxplus_connections_dropped` – Dropped client connections dropped
- `nginxplus_connections_idle` – Idle client connections
- `nginxplus_http_requests_current` – Current HTTP requests
- `nginxplus_http_requests_total` – Total HTTP requests
- `nginxplus_nginx_meta` – NGINX meta information
- `nginxplus_processes_respawned` – Total number of abnormally terminated and re‑spawned child processes
- `nginxplus_ssl_handshakes` – Successful SSL handshakes
- `nginxplus_ssl_handshakes_failed` – Failed SSL handshakes
- `nginxplus_ssl_session_reuses` – Session reuses during SSL handshake
- `nginxplus_workers_mem_private` – Private memory used by NGINX workers, does not include shared libraries
- `nginxplus_workers_mem_rss` – Memory utilized by NGINX worker processes
5. Select a metric from the list (in the demo we select `nginxplus_connections_active`). To select another metric, click the  **+ Query**  button and select another metric in the new  **Metrics browser >**  field (in the demo, we select `nginxplus_connections_idle`).
6. Click the "refresh" (two arrows forming a circle) icon above the graph in the upper half of the page, and results start to appear on the graph.

[![](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_graph-nginxplus-connections-accepted.png)](https://www.f5.com/content/dam/f5-com/nginx-import/Grafana_graph-nginxplus-connections-accepted.png)

## Bonus: Unified Insights and Analytics for All Your NGINX Plus Deployments

You may be asking “What if I’ve got a large NGINX deployment, including many NGINX Plus instances?” or “How can I update the configuration of my instances based on the insights and analytics from Prometheus and Grafana?” [NGINX Controller](https://www.nginx.com/products/nginx-controller/), our control‑ and management‑plane solution for NGINX deployments, helps you address those questions and many more.

While Prometheus and Grafana are excellent solutions for monitoring, alerting, and visualization, they do not provide a way to update configurations and policies. Taking action based on these insights still requires logging into individual NGINX Plus instances to make changes, which can be time consuming and error prone – especially for large and complex NGINX Plus deployments.

[![](https://www.f5.com/content/dam/f5-com/nginx-import/NGINX-Controller-App-Centric-UI_2021-04@2x.png)](https://www.f5.com/content/dam/f5-com/nginx-import/NGINX-Controller-App-Centric-UI_2021-04@2x.png)

NGINX Controller offers deep insight and analytics on the 200+ NGINX Plus metrics, including requests per second, CPU usage, `4*xx*` and `5*xx*` errors, health check failures, and much more – all presented in an app‑centric, intuitive, and unified platform. You can then deep dive into the data, export it in reports, and make necessary configuration and policy changes leveraging automated, role‑specific workflows that were designed by NGINX experts to abstract away complexity.

With NGINX Controller, you can keep your finger on the pulse or you app deployments and take control of NGINX Plus instances and configuration objects (for example, Environments, Gateways, and Apps) at scale. And you don’t have to sacrifice use of your favorite monitoring and alerting solutions; Controller’s API‑first design makes integrating with third‑party solutions very simple and straightforward.

![](https://www.youtube.com/watch?v=k-nsAKImnFY)

## Get Started with NGINX Plus and NGINX Controller

If you haven’t tried NGINX Plus, we encourage you to try it out – as a load balancer, reverse proxy, and API gateway, or as a fully supported web server with enhanced monitoring and management APIs. Get started today with a [free 30-day trial](https://www.nginx.com/free-trial-request) today or [contact us to discuss your use cases](https://www.nginx.com/contact-sales/).

And if you’re thinking NGINX Controller might be the way to visualize and monitor your NGINX Plus fleet, check out the [free 30-day trial](https://www.nginx.com/free-trial-request-nginx-controller) that includes both the Application Delivery and API Management modules with Controller App Security.