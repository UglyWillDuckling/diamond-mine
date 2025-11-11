#howto/linux 

## quick check

1. run `lspci`[^1]
```sh
lspci -v
```
2. look for `VGA` in the output
3. check `driver`

## hardware check

 run `lshw`[^2]
```sh
sudo lshw -C display

  *-display
       description: VGA compatible controller
       product: GA104 [GeForce RTX 3070]
       vendor: NVIDIA Corporation
       physical id: 0
       bus info: pci@0000:08:00.0
       logical name: /dev/fb0
       version: a1
       width: 64 bits
       clock: 33MHz
       capabilities: pm msi pciexpress vga_controller bus_master cap_list rom fb
       configuration: depth=32 driver=nvidia latency=0 resolution=1920,1080
       resources: irq:113 memory:fb000000-fbffffff memory:d0000000-dfffffff memory:e0000000-e1ffffff ioport:e000(size=128) memory:c0000-dffff
```

[^1]: [[lspci]]
[^2]: [[lshw]]