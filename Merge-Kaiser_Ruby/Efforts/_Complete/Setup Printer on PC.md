---
tags:
  - archived
dateModified: 2026-04-27T00:14:00.644+02:00
title: Setup Printer on PC
priority: normal
completedDate: 2026-04-27
type: task
---
#ticket/pc/printer 

> [[Local Epson Printer - L3060]]

- http://localhost:631/printers/L3060_Series

### related actions

- [[enabled cups service]]

## wip

- when using [[dnssd]] the [[Host Name]] is EPSONEC5FF8.local
- you can remove a property by going into it's details in the GUI

#### `!:` **error**

"cfFilterChain: ghostscript (PID 78524) exited with no errors."

5. Disable or update the filter: In CUPS, you can try disabling or updating
  the Ghostscript filter associated with your printer. To do this, open the
  Web-based interface of CUPS (usually  http://localhost:631  or
  http://localhost:631/admin ), navigate to the printer settings, and look for
  the "**Filter**" or "**PPD**" settings.


see [[PDF printing Processing - cfFilterChain ghostscript (PID XXXX) exited with no errors.]]
> This seems to have been caused by setting the "resolution" to "300X300 DRAFT" instead of "300x300", under the "image quality" tab in the print preview (i.e., the window that opens when you hit Ctrl-P in pdf viewer). 
> Not the best error handling, not sure what's wrong with "300x300 DRAFT", but at least I can print now.


Ghostscript command line:
```sh
gs -dQUIET -dSAFER -dNOPAUSE -dBATCH -dNOINTERPOLATE -dNOMEDIAATTRS -dUsePDFX3Profile -sstdout=%stderr -sOutputFile=%stdout -sDEVICE=cups -r360x360 -dDEVICEWIDTHPOINTS=595 -dDEVICEHEIGHTPOINTS=842 -dcupsBitsPerColor=8 -dcupsColorOrder=0 -dcupsColorSpace=0 -dcupsCompression=1 -scupsRenderingIntent=auto -scupsPageSizeName=A4 -dcupsManualCopies -I/usr/share/cups/fonts -c \'<</.HWMargins[8.390552 8.390552 8.390564 8.390564] /Margins[0 0]>>setpagedevice\' -f -_
```

`!: error `: cfFilterChain: pdftopdf (PID 97095) exited with no errors

**Filter file** found: /etc/cups/ppd/L3060_Series.ppd

**resolve address**
```
avahi-resolve-host-name epsonec5ff8.local
```



commands: [[lp command]], [[lpadmin]], [[lpq]]