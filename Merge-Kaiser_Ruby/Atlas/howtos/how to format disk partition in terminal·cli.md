#howto/cli #howto/linux 

1. unmount
2. format with [[mkfs]]

```sh
# unmount first
sudo umount /dev/sdb1

# -n is volume label (drive name)
# /dev/sdb1 is the partition
# -F is FAT32 type, -s is 64 sectors per cluster
sudo mkfs.vfat -F 32 -s 64 -n PS2USB /dev/sdb1
```

**related**: [[lsblk]], [[mount command]], [[umount command]], [[mkfs.vfat]]