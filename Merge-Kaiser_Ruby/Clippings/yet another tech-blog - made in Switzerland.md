---
source: https://www.claudiokuenzler.com/
author:
  - "[[Claudio Kuenzler]]"
published: 
created: 2025-02-26
tags:
  - resource/article
related:
  - "[[unix]]"
---
![[~/×/d5fcbf6904821837b4f49f68713f788e_MD5.png|50]]

- [ ] #task store this as a useful resource [[yet another tech-blog - made in Switzerland]] ⏳ 2025-06-15 📅 2025-07-01
___
## [check\_esxi\_hardware 20250221 released: pywbem exception improvements](https://www.claudiokuenzler.com/blog/1473/check-esxi-hardware-20250221-release-pywbem-exception-improvements)

---

A new version of [check\_esxi\_hardware](https://www.claudiokuenzler.com/monitoring-plugins/check_esxi_hardware.php), an open source monitoring plugin to monitor the hardware of [VMware ESXi](https://www.vmware.com/products/esxi-and-esx.html) servers, is available.

![[~/×/136d30869615846ff97e880b497ec945_MD5.jpg|50]]

## Improve/Fix pywbem exceptions

The latest version (20250221) of check\_esxi\_hardware improves the handling of exceptions coming from the pywbem Python module.

The pywbem internal exceptions were renamed at the release of pywbem 1.0.0. Examples:

| pywbem < 1.0.0 | pywbem >= 1.0.0 |
| --- | --- |
| pywbem.cim\_operations | pywbem.\_cim\_operations |
| pywbem.cim\_http | pywbem.\_cim\_http |
| pywbem.exceptions | pywbem.\_exceptions |

You certainly noticed the added underscore (\_) in the name.

Backward compatibility is important to me. To be able to support older (prior to 1.0.0) AND newer versions of pywbem, check\_esxi\_hardware now makes a version comparison of the installed and used pywbem version. This is done by using the Python module "packaging".

This means: **Starting with this release (20250221), the packaging Python module must be installed** to run check\_esxi\_hardware.

This can be done by using a predefined package from the OS:

$ sudo apt install python3-packaging

Or use pip system-wide:

$ sudo pip3 install packaging

Or inside your Python3 venv, use pip as well.

## Catch HTTP Exception

While working on the improved pywbem exception handling, I also came across another exception, the plugin did not cover before: The HTTP exception!

This is useful when the plugin is mistakenly pointed to a HTTP endpoint which does not serve any CIM elements (ESXi HTTPS UI for example). The plugin will then show the HTTP exception and exit as UNKNOWN:

ck@mint ~ $ /usr/lib/nagios/plugins/check\_esxi\_hardware.py -H myesxi -C 443 -U root -P secret  
**UNKNOWN: 400 (Bad Request)**

In the past this would have shown a large Python stacktrace error.  

## Thanks and kudos

As always, this is an open source monitoring plugin and this often involves multiple people to get a new release out. Special thanks for this release go to [Phil Randal](https://github.com/philrandal) and [Claire Morgenthau](https://github.com/clairem-sl) for important and much appreciated coding hints.

  

## More recent articles:

- #### [Using GiB instead of KiB in libvirt xml memory allocation of KVM/Qemu VM](https://www.claudiokuenzler.com/blog/1471/kvm-qemu-libvirt-memory-allocation-unit-gb-gib)
- #### [How to compare version numbers in a Python condition](https://www.claudiokuenzler.com/blog/1470/how-to-compare-version-numbers-python-condition)
- #### [Performance boost on my HP Microserver N40L after Debian 12 upgrade](https://www.claudiokuenzler.com/blog/1469/performance-boost-hp-microserver-n40l-debian-bookworm)
- #### [Fix CI/CD pipelines using EPEL repositories for EL7 (RHEL7, CentOS7)](https://www.claudiokuenzler.com/blog/1467/fix-ci-cd-pipeline-epel-repositories-el7-rhel7)
- #### [check\_smart 6.15.0 released: SMART Error Log check + usage override possibility](https://www.claudiokuenzler.com/blog/1466/check_smart-6.15.0-smart-error-log-usage-override)
- #### [How to convert from Unix nano timestamp format to human readable date in Linux](https://www.claudiokuenzler.com/blog/1465/how-to-convert-from-unix-nano-timestamp-to-human-readable-date)
- #### [How to change Icingaweb2 password for icingaadmin user in backend database](https://www.claudiokuenzler.com/blog/1464/how-to-change-icingaweb2-password-icingaadmin-user-database)
- #### [rsync security update introduced a regression on Debian and Ubuntu Linux (meanwhile fixed)](https://www.claudiokuenzler.com/blog/1463/rsync-security-update-introduced-regression-hashtable-error)
- #### [How to scrape local Prometheus node exporter metrics running in Grafana Alloy](https://www.claudiokuenzler.com/blog/1462/how-to-scrape-node-exporter-metrics-grafana-alloy)
- #### [Logstash http output plugin: difference between json and json\_batch format](https://www.claudiokuenzler.com/blog/1461/logstash-http-output-json-batch-format-difference)
- #### [The need for a new notebook led me to the Lenovo ThinkPad T14 Gen 5 (AMD)](https://www.claudiokuenzler.com/blog/1460/new-notebook-search-led-to-lenovo-thinkpad-t14-gen5-amd)
- #### [Log manipulation and alteration with Logstash mutate filter](https://www.claudiokuenzler.com/blog/1459/log-manipulation-alteration-with-logstash-mutate-filter)
- #### [By the way: check\_es\_system monitoring plugin also works on OpenSearch!](https://www.claudiokuenzler.com/blog/1456/opensearch-health-monitoring-use-check_es_system-plugin)
- #### [check\_esxi\_hardware 20241129 released: Python2 is no longer supported, potentially last and final release...](https://www.claudiokuenzler.com/blog/1455/check_esxi_hardware-20241129-python2-support-removed)
- #### [A (planned) power cut with annoying consequences and a dead-alike network](https://www.claudiokuenzler.com/blog/1454/power-cut-network-devices-annoying-problems-no-connectivity-issues)