#bug #issue #production #backyard 

## description

An error is thrown on the events detail page.
```
    Call to a member function get_full_name() on null (code: 0) in /home/meilleursagents/backyard/contacts/events/event.php:71
```
reproduce:
 https://backyard-dev.meilleursagents.tech/contacts/7315103/events/339281257
 http://localhost:8001/contacts/7315103/events/339281257

## notes 📔
- The error appears on the part of the page that seems to be loading dynamically
- the parameters for the route look ok: `contact_id` `event_id`
- not sure when this started #logs
- looks to have started on January 6

## resolve 🏁

### **possibilites**
- logs  could be one way to go
- asking [[Paulo Baskovic]] what he did to find this

- [x] ask Paulo
- [x] examine the logs if needed
- [x] examine git logs
- [x] examine the code base

### **logs**
[filter by date](https://console.cloud.google.com/logs/query;query=jsonPayload.channel%3D%22malegacy%22%0Alabels.%22k8s-pod%2Fapplication%22%3D%22backyard%22%0ASEARCH%2528%22Call%20to%20a%20member%20function%20%60get_full_name%60%22%2529;cursorTimestamp=2025-01-06T11:54:00.147Z;startTime=2025-01-05T03:00:00.000Z;endTime=2025-01-06T12:44:00.000Z?project=ma-prod&inv=1&invt=Abop_w&authuser=1) query
- started on January 6
- [x] check merging or PR's in January

### **git** logs
using [[git log oneline with date and time]]
![[git log oneline with date and time#^428384]]

2024-12-05 luna-317-xss ac98b7c921
2024-12-10 luna-317-xss 35c9f20610
### **code** base
- [x] update each mention of the user on the [[backyard task|task]] entity
