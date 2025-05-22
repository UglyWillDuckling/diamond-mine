---
source: "https://www.technewstoday.com/gigabyte-bios-virtualization/"
author:
  - "[[Anup Thapa]]"
published: 2023-07-30
created: 2025-03-27
tags:
---
A lot of users can’t find the hardware virtualization option in the BIOS interface as its name and location differs depending on the processor type and [BIOS version](https://www.technewstoday.com/check-bios-version-gigabyte/).

In Gigabyte’s case, it’s usually called **SVM** (AMD) or **VT-x** (Intel) and can be configured from the **Chipset** or **Advanced CPU Settings** sections.

I’ll cover the steps to do this on different Gigabyte [BIOS/UEFI](https://www.technewstoday.com/bios-vs-uefi/) interfaces in this article.

## Access BIOS/UEFI Interface

To enable Virtualization, you’ll need to [access your BIOS settings](https://www.technewstoday.com/how-to-get-to-bios-windows-11/) first. Press **F2**/**Del** when booting to enter the Gigabyte BIOS Setup utility.

![[~/×/7479277a3c301d50819eed2d1b4067cc_MD5.webp]]

If you’ve [enabled Fast Boot](https://www.technewstoday.com/fast-boot-gigabyte/) and the BIOS key doesn’t work, you can use an alternate method to get to the firmware interface. 

Restart your PC 3 times in a row to boot to the recovery environment. Then, select **Troubleshoot** > **Advanced Options** > **[UEFI Firmware Settings](https://www.technewstoday.com/uefi-firmware-settings/)**.

## Locate Virtualization Option

Press **F2** (if required) to switch to *Advanced Mode*. As mentioned earlier, you’re looking for an option named **SVM** (AMD) or **VT-x** (Intel) here.

![[~/×/17dba5b10e049a08ab0766f5d1f90583_MD5.webp]]

Currently, [older Gigabyte boards](https://www.technewstoday.com/check-what-motherboard-i-have/) use the classic black-and-red UI, while the latest ones come with the revamped orange/yellow UI released in 2020.

### Old UI

On the old UI, you can manage the virtualization setting from the locations listed below:

- **Chipset** > **Intel Virtualization Technology (VT-x)**
- **M.I.T.** > **Advanced Frequency Settings** > **Advanced CPU Settings** > **SVM Mode**
- **M.I.T.** > **Advanced CPU Core Settings** > **SVM Mode**

### New UI 

With the new UI, you can find the virtualization option in the following locations:

- **Tweaker** > **Advanced CPU Settings** > **SVM Mode**
- **Tweaker** > **Advanced CPU Settings** > **Intel Virtualization Technology (VT-x)**

## Enable Virtualization on Gigabyte

Once you find the virtualization option, all you need to do is set it to **Enabled**.

![[~/×/9f06a42884fa47ac83c52129f12f6c1a_MD5.webp]]

If your CPU supports it, you can also enable the PCI passthrough feature. AMD calls it **IOMMU** while Intel calls it **VT-d**.

![[~/×/de2ae90fef4ea8df218ff18f222c517c_MD5.webp]]

This improves performance by letting the PCI devices function as if they were directly connected to the guest machine (e.g., better GPU performance in video games).

Finally, after enabling virtualization and any additional settings, press **F10** to save the changes and exit.

## Verify Virtualization Status

After you exit the BIOS, the system should reboot into Windows. You can easily check the virtualization status here from the Task Manager.

Press Ctrl + Shift + Esc to open the Task Manager. In the **Performance** tab, check the **CPU** page for the Virtualization status.

![[~/×/4cfcb4674e03d1b5acbffa0df5a339bc_MD5.webp]]

System profiling programs like CPU-Z are also popularly used for checking the Virtualization status. If it’s enabled, you should see flags like **AMD-V** or **VT-x** in the CPU Instructions section.

![[~/×/f94696d0a217ef0f8490f97d70bcfbfd_MD5.webp]]