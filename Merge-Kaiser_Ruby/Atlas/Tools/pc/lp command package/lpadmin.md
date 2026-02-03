---
category:
  - "[[Cli Command]]"
  - "[[Printing]]"
related:
  - "[[lp command]]"
---

The "lpadmin" command is used to manage printers and print queues on Linux systems. It allows you to add, modify, and delete printers, as well as configure their settings.

Here are some common uses of the "lpadmin" command:

- lpadmin -p <printer_name>: This command is used to add a new printer to the system.
- lpadmin -x <printer_name>: This command is used to delete a printer from the system.
- lpadmin -d <printer_name>: This command is used to set the default printer.
- lpadmin -p <printer_name> -E: This command is used to enable a printer.
- lpadmin -p <printer_name> -D: This command is used to disable a printer.
- lpadmin -p <printer_name> -o: This command is used to set a printer option.

Some common printer options that can be set using "lpadmin" include:

- -o media=<media_type>: Sets the media type (e.g. A4, letter, etc.)
- -o resolution=: Sets the resolution (e.g. 300x300, 600x600, etc.)
- -o printer-type=<printer_type>: Sets the printer type (e.g. laser, inkjet, etc.)

For example, to add a new printer named "HP LaserJet" with a resolution of 300x300, you would use the command:

```sh
lpadmin -p HP\ LaserJet -o resolution=300x300
```

To delete a printer named "HP LaserJet", you would use the command:

```sh
lpadmin -x HP\ LaserJet
```