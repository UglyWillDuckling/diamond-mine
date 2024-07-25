


# systemctl enable sddm
# systemctl reboot


Installation
Install the sddm package. Optionally install sddm-kcm for the KConfig Module.

Follow Display manager#Loading the display manager to start SDDM at boot.


### Loading the display manager

To enable graphical login, enable the appropriate systemd service. For example, for SDDM, enable sddm.service.

This should work out of the box. If not, you might have to reset a custom default.target symlink to point to the default graphical.target. See systemd#Change default target to boot into.

After enabling SDDM a symlink display-manager.service should be set in /etc/systemd/system/. You may need to use --force to override old symlinks.

$ file /etc/systemd/system/display-manager.service
/etc/systemd/system/display-manager.service: symbolic link to /usr/lib/systemd/system/sddm.service
