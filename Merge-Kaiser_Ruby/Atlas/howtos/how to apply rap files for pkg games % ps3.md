#howto/ps3

it will move them to the HDD after you've launched the title it's for once. alternatively (assuming you're on a recent CFW), there's an option in "Custom Firmware Tools" to activate everything in your exdata folder at once.

**you can also FTP the rap files directly into the "/home/[user id]/exdata" folder on your HDD, and it works the same way (without needing the usb drive connected at all)**

1. get the rap file
2. place it into `/home/user_id/exdata` on hdd
3. install the `pkg` game


### correction.

rap files go to "/<root>/dev_hdd0/exdata" (the folder needs to be created if it doesn't exist) and not to "/home/[user id]/exdata".