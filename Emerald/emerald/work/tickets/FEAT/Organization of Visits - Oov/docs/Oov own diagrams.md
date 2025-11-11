#artifact

[mermaid](https://www.mermaidchart.com/play?utm_source=mermaid_js&utm_medium=editor_selection&utm _campaign=playground#pako:eNqVVEtu2zAQvcpA2SRAjEb-R0iNKrGzKpoAbhdF1QUjjSzWNKmQlD8IcoPeoLfrSTrUx1KDFGi0EofvzZt5Q_LJi1WCXuD1er1IxkqmfBVEEsBmuMEANCbF3q0FO6jCBpDyPSaRLOGpULs4Y9rC57nDAEj_9FvkLS3FIu_7GfR6M5D9D09Ef0ARQORdmZxJMPYg8H0URSQvlA7c3yxMEmBbxgnLBbcHMHFG8gIhVRrUTqK-eufos8iD51pw9IrghELXX6n2xwKNNSC4XEOq1Qbu1BbCnBO0pk8qxrRiJNzk1Khx3ZesFjitgJcEdBsEUYAJt22ROVshKAnLjy3rsmL5Fy4_i9dwl6Y8RmBJYlqm5Rs0ZZNON9fqB8a2TdKvk_QpSV0hLGtui_IvatiAYHNu2IMzrtCUUpeVcrnqoJukQ0KHhc2U5gZhsWWiYJYraU479Z51iMOaOHa-o0wqd3fcZrDlpmsIORSuUMYcTYc_rvluSM02GBTUcp3gLzs2oPTVg55pdKZUkVhtcoEWxaGTt56k7yb0RVpuBSbwiQ73EXP9RMZgTBpKRl5zgFwf_3HyOkp-ZZnakFHxa5MYEeD3z1-dCdINMBnLywsV26N0G7a4P4Z9_x_x0atxyhMEwT2X2F0v14dm6fu0Dh8LVgViwYyZYwqOQjdRqzX2djyxWeDn-_MmkjCS0podAqkkNuHgpD8aDgbjc3oIhKDVZDwahudQXeOT2_J7oUOlvF1mMBnOJzeNzKK_uL69PcpUmy9kXIdv1xmOF_ObaaMzX1D5047OdDEJK53yySJvm72L8ouk9_wHF-ewPg) flowchart 

```mermaid
---
config:
  theme: redux
  layout: fixed
---
flowchart TB
    n1(["Start"]) --> n2@{ label: "<span style=\"color:\">Add availability schedule for owner<br>(by Back Office)\\</span>" }
    n7["BY requests link from Oov Api using<br>schedule-visit-owner"] --> n8["BY displays the link"]
    n8 --> n9["links to edit schedule page on SL"]
    n9 --> n10["Back Office adds schedule times for the project"]
    n2 --> n12["display the Schedule on BY"]
    n12 -- <br> --> n14["Authorise Evaluations on BY (Back Office)"]
    n14 --> n16["Send link with visit schedule to Agencies"]
    n16 --> n17["Agency select visit times for them or<br>reject completely"]
    n17 --> n19["Notify BY of the accepted visit"]
    n19 --> n23["BY makes the evaluation visit <b>accepted</b> or <b>rejected</b>"]
    n23 -- "<span style=background-color:>Back Office confirms the evaluations</span>" --> n26["Send the new confirmation to agencies"]
    n30["Back Office creates the (manual)evaluation visit on BY"] --> n31["BY calls lambda on Oov to set MANUAL status"]
    n37["BY notifies Oov of the change"] --> n38["Oov sends the confirmation to agencies"]
    n34["BY notifies Oov of the change made by Back Office<br><b>when and how?</b>"]
    n24["what is a visit on BY?"]
    n6["Add availability schedule for owner"]
    n28["new column Automated Schedule<br>on BY evaluations table"]
    n29["manual evaluation"]
    n33@{ label: "<span style=\"color:\">Authorise Evaluations on BY</span>" }
    n39@{ label: "<b>whats not done</b><br><br>1. notify by of accepted visit<br>2. manual eval<br>3. confirmation send<br>4.<span style=\"background-color:\">Authorise Evaluations on BY</span>" }
    n40@{ label: "<span style=\"color:\">Display automated visit info on BY</span>" }
    n2@{ shape: rect}
    n30@{ shape: rect}
    n37@{ shape: rect}
    n34@{ shape: rect}
    n24@{ shape: text}
    n6@{ shape: text}
    n28@{ shape: rect}
    n29@{ shape: text}
    n33@{ shape: rect}
    n39@{ shape: text}
    n40@{ shape: rect}
     n2:::Rose
     n12:::Ash
     n14:::Ash
     n16:::Rose
     n17:::Rose
     n19:::Rose
     n23:::Ash
     n26:::Rose
     n34:::Pine
     n24:::Pine
     n6:::Pine
     n6:::Sky
     n29:::Pine
     n29:::Sky
     n33:::Sky
     n40:::Sky
    classDef Pine stroke-width:1px, stroke-dasharray:none, stroke:#254336, fill:#27654A, color:#FFFFFF
    classDef Ash stroke-width:1px, stroke-dasharray:none, stroke:#999999, fill:#EEEEEE, color:#000000
    classDef Sky stroke-width:1px, stroke-dasharray:none, stroke:#374D7C, fill:#E2EBFF, color:#374D7C
    classDef Rose stroke-width:1px, stroke-dasharray:none, stroke:#FF5978, fill:#FFDFE5, color:#8E2236
    style n6 color:#000000
    style n29 color:#000000
    style n39 stroke:#00C853,stroke-width:4px,stroke-dasharray: 0

```
