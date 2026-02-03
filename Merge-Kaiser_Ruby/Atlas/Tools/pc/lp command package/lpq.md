---
category:
  - "[[Cli Command]]"
  - "[[Printing]]"
part of:
  - "[[lp command package]]"
tags:
  - command/cli
---

**The "lpq" command** is used to list the current print jobs. It displays information about the print jobs that are currently being processed by the printer.

Here are some common uses of the "lpq" command:

lpq: This command is used to list the current print jobs. It displays information such as the job ID, the user who submitted the job, the title of the job, and the current status of the job.
lpq -l: This command is used to list the current print jobs in a detailed format. It displays additional information such as the printer name, the job size, and the time the job was submitted.
For example, to list the current print jobs, you would use the command:

`lpq`
To list the current print jobs in a detailed format, you would use the command:

`lpq -l`

**You can also use the "lpq" command to check the status of a specific print job. To do this, you would use the command:**

`lpq -s <job_id>`

___
Related command: [[lp command|lp]]