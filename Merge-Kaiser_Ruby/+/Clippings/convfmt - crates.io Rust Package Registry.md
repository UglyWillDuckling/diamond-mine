---
source: https://crates.io/crates/convfmt
author: 
published: 
created: 2025-02-09
tags:
  - tool/cli/rust
  - tool/yaml
  - tool/toml
  - tool/converter
---
[convfmt](https://github.com/oriontvv/convfmt) is a command line tool which can convert between formats:

- [json](https://en.wikipedia.org/wiki/JSON)
- [yaml](https://en.wikipedia.org/wiki/YAML)
- [toml](https://en.wikipedia.org/wiki/TOML)
- [ron](https://github.com/ron-rs/ron)
- [json5](https://en.wikipedia.org/wiki/JSON5)
- [bson](https://en.wikipedia.org/wiki/BSON)

## Usage:
```bash
cat cfg.toml | convfmt -f toml -t yaml > cfg.yml
convfmt -f json -t json < compact.json > pretty.json
curl https://api.github.com/users/oriontvv | convfmt -f json -t json5 > api.json5
```

By default `convfmt` uses `pretty` format(can be disabled with `--compact` option). Beware of `null`s, some formats don't support them (e.g. toml).

## Installation:

- binary

```bash
cargo install cargo-binstall && cargo binstall ryaspeller
```

- from sources

```bash
cargo install ryaspeller
```
## Many thanks to:

This tool stands on the shoulders of such giants:

- [serde](https://crates.io/crates/serde)
- [serde\_json](https://crates.io/crates/serde_json)
- [serde\_yaml](https://crates.io/crates/serde_yaml)
- [toml-rs](https://crates.io/crates/toml)
- [ron](https://crates.io/crates/ron)
- [json5](https://crates.io/crates/json5)
- [bson](https://crates.io/crates/bson)

### Stats Overview

4,874 Downloads all time

6 Versions published

#### Downloads over the last 90 days