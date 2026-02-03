---
category:
  - "[[Cli Command]]"
  - "[[Printing]]"
related:
  - "[[lpadmin]]"
aliases:
  - lp
---
#command/cli 

The "lp" command on Linux is used to manage print jobs. It allows you to submit, cancel, and check the status of print jobs. Here are some common uses of the "lp" command:

- lp: This command is used to submit a print job. It takes the name of a file as an argument, which is then sent to the printer.
- lp -d <printer_name>: This command is used to submit a print job to a specific printer.
- lp -l: This command is used to list the current print jobs.
- lp -c <job_id>: This command is used to cancel a print job.
- lp -s <job_id>: This command is used to check the status of a print job.

For example, to print a file named "document.txt" to the default printer, you would use the command:

```bash
lp document.txt
```

To print the same file to a specific printer named "HP LaserJet", you would use the command:

```sh
lp -d HP\ LaserJet document.txt
```

___
similiar: [[lpq]]