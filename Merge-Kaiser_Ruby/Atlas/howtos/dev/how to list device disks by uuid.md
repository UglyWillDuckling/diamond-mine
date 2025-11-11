 
 - [x] remind me [[how to list device disks by uuid]] (@2025-08-28)
 ___
 
 1. Using  blkid  command:

    [[blkid]]

  This will display a list of all disk devices, including their UUIDs, device
  names, and other information.

  2. Using  [[lsblk]]  command:

    lsblk -d -o NAME,FSTYPE,SIZE,MOUNTPOINT,UUID

  This will display a list of disk devices, including their names, file
  systems, sizes, mount points, and UUIDs.

  3. Using  [[udisks]]  command:

    udisks --show-info

  This will display a list of disk devices, including their UUIDs, device
  names, and other information.

  4. Using  find  command:

    find /dev/disk/by-uuid -exec ls -l {} \;

  This will display a list of disk devices, including their UUIDs and device
  names.

  5. Using  blkid  command with  -t  option:

    blkid -t UUID=<uuid>

  Replace  <uuid>  with the UUID you want to search for. This will display the
  device name and other information for the disk device with the specified
  UUID.
