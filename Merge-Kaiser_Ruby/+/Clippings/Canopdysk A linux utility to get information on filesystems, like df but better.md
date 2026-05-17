---
source: https://github.com/Canop/dysk
author:
  - "[[Canop]]"
published:
created: 2026-04-10
tags:
  - tool/cli/rust
  - tool/dev
---
## dysk

A Linux/Mac utility listing your filesystems.

Complete documentation lives at **[https://dystroy.org/dysk](https://dystroy.org/dysk)**

### Default table

[![screenshot](https://github.com/Canop/dysk/raw/main/website/src/img/dysk.png)](https://github.com/Canop/dysk/blob/main/website/src/img/dysk.png)

### Custom choice of column

[![screenshot](https://github.com/Canop/dysk/raw/main/website/src/img/dysk_c=label+default+dev.png)](https://github.com/Canop/dysk/blob/main/website/src/img/dysk_c=label+default+dev.png)

[![screenshot](https://github.com/Canop/dysk/raw/main/website/src/img/dysk_c=+dev+inodes.png)](https://github.com/Canop/dysk/blob/main/website/src/img/dysk_c=+dev+inodes.png)

### JSON output

[![screenshot](https://github.com/Canop/dysk/raw/main/website/src/img/dysk-json-jq.png)](https://github.com/Canop/dysk/blob/main/website/src/img/dysk-json-jq.png)

You can output the table as CSV too.

### Filters

[![screenshot](https://github.com/Canop/dysk/raw/main/website/src/img/dysk_filters.png)](https://github.com/Canop/dysk/blob/main/website/src/img/dysk_filters.png)

### Sort

[![screenshot](https://github.com/Canop/dysk/raw/main/website/src/img/dysk_s=free-d.png)](https://github.com/Canop/dysk/blob/main/website/src/img/dysk_s=free-d.png)

### Library

The data displayed by dysk is provided by the [lfs-core](https://github.com/Canop/lfs-core) crate. You may use it in your own Rust application.