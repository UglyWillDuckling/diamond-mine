---
source: "https://askubuntu.com/questions/1511608/pdf-printing-processing-cffilterchain-ghostscript-pid-xxxx-exited-with-no"
author:
  - "[[joseph_morris                    23311 gold badge22 silver badges1111 bronze badges]]"
  - "[[Zach Bloomquist                    29422 silver badges1414 bronze badges]]"
  - "[[David Campbell                    111 bronze badge]]"
  - "[[zx485–                         zx485]]"
published: 2024-04-25
created: 2025-11-16
tags:
---
I just to put out this question to see if anybody else is having this problem, and if anyone has tips or pointers on how to debug; I've found one other [Manjaro Linux forum post about it](https://forum.manjaro.org/t/cannot-print-cffilterchain-ghostscript-exited-with-no-errors/153119), but no solution.

I have Ubuntu 23.10; Thinkpad X1 Carbon 3rd; Canon Pixma870; CUPS+Gutenprint v5.3.4.

This system was printing just fine last week, but this week any attempt to print a pdf from the default document viewer ends with (in the printer status) the error message in the title. I have rebooted computer and printer multiple times. Printing text from LibreOffice writer works fine.

Not sure what exactly causes this, but a reboot of the printer + PC seems to fix it for me.

Side note - I don't have the same quality option OP seems to have access to, or at least I don't know where to find that.

Issue emerged on update, a reboot of printer and system did not help.

I removed the printer from connected printers, and reinstalled which resolved the issue. Presumably as there was an error in the settings.

So removing the printer and reinstalling with the wizard is a potential solution, to reset the drivers and settings etc, overwriting what caused the failure.

1

This seems to have been caused by setting the "resolution" to "300X300 DRAFT" instead of "300x300", under the "image quality" tab in the print preview (i.e., the window that opens when you hit Ctrl-P in pdf viewer).

Not the best error handling, not sure what's wrong with "300x300 DRAFT", but at least I can print now.