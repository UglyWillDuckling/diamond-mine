---
source: https://hpjansson.org/chafa/
author:
published:
created: 2026-04-09
tags:
  - tool/cli
  - tool/image
---
## The future is (still) now

The premier UX of the 21st century just got a little better: With `chafa`, you can now view very, very reasonable approximations of pictures and animations in the comfort of your favorite terminal emulator. The power of ANSI X3.64 compels you!

### Example

You can get fair results by using only U+2580 (upper half block). Other terminal graphics packages do this, and so can Chafa with `chafa --symbols vhalf`. However, Chafa uses more symbols by default, greatly improving quality.

![](https://hpjansson.org/chafa/img/pat-orig-198.png)

Input

![](https://hpjansson.org/chafa/img/pat-vhalf-198.png)

U+2580 only

![](https://hpjansson.org/chafa/img/pat-chafa-198.png)

Chafa default

There are more examples in the [gallery](https://hpjansson.org/chafa/gallery/)!

### Features

- Supports most popular image formats, including animated GIFs.
- Outputs to all popular terminal graphics formats: Sixels, Kitty, iTerm2, Unicode mosaics.
- Combines Unicode symbols from multiple selectable ranges for optimal output.
- Fullwidth character support, e.g. Chinese, Japanese, Korean.
- Glyphs can be loaded from any font file supported by Freetype (TTF, OTF, PCF, etc).
- Multiple color modes, including Truecolor, 256-color, 16-color and simple FG/BG.
- RGB and DIN99d color spaces for improved color picking.
- Alpha transparency support in any color mode, including in animations.
- Works with most modern and classic terminals and terminal emulators.
- Documented, stable C API.
- Fast & lean: SIMD optimized, multithreaded.
- Suitable for terminal graphics, ANSI art composition and even black & white print.

Some of the features are discussed in a series of blog posts:

- [Introducing Chafa](https://hpjansson.org/blag/2018/04/24/introducing-chafa/)
- [The worst ANSI art renderer, except for all the others](https://hpjansson.org/blag/2019/01/07/the-worst-ansi-renderer-except-for-all-the-others/)
- [Chafa 1.2.0: Faster than ever, now with 75% more grit](https://hpjansson.org/blag/2019/08/05/chafa-1-2-0/)
- [Chafa 1.4.0: Now with sixels](https://hpjansson.org/blag/2020/04/01/chafa-1-4-0-now-with-sixels/)
- [Chafa 1.6.0: Wider](https://hpjansson.org/blag/2021/01/18/chafa-1-6-0-wider/)
- [Chafa 1.8: Terminal graphics with a side of everything](https://hpjansson.org/blag/2021/09/16/chafa-1-8-terminal-graphics-with-a-side-of-everything/)
- [Chafa 1.14: All-singing, all-dancing](https://hpjansson.org/blag/2024/01/18/chafa-1-14-all-singing-all-dancing/)

### Documentation

Chafa will print a help text if run without arguments, or with `chafa --help`. It also comes with a [man page](https://hpjansson.org/chafa/man/) displayable with `man chafa`.

The [gallery](https://hpjansson.org/chafa/gallery/) contains examples of how command-line options can be used to tweak the output.

There is [C API documentation for application developers](https://hpjansson.org/chafa/ref/).

[Erica Ferrua Edwardsdóttir](https://mage.black/) is developing [Python bindings](https://chafapy.mage.black/) that allow Chafa to be used in Python programs. These are documented on their own site.

[Héctor Molinero Fernández](https://hector.molinero.dev/) maintains [JavaScript bindings](https://github.com/hectorm/chafa-wasm) that allow Chafa to be used in Node.js, web browsers, and more. These are documented on their own site.

### Community

Please bring your questions to our ~~secret business~~ friendly Matrix chat. Stay a while and listen, or talk about terminals, software or your choice of breakfast cereal. All are welcome, but an appreciation for terminals, programming and/or computer graphics is likely to enhance your experience.

Although the chat's history is hidden from non-members, this is a public forum, so if your ambition is to overthrow the government/megacorps by way of an underground network of refurbished Minitels, you may want to keep it under your hat. Furthermore, and hopefully obviously, we treat our fellow humans with respect. Have fun!