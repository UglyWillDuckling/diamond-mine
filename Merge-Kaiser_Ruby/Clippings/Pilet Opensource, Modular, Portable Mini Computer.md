---
title: "Pilet: Opensource, Modular, Portable Mini Computer"
source: https://www.kickstarter.com/projects/soulscircuit/pilet-opensource-modular-portable-mini-computer
author:
  - "[[Kickstarter]]"
published: 
created: 2025-01-09
description: "soulscircuit is raising funds for Pilet: Opensource, Modular, Portable Mini Computer on Kickstarter!  Where retro meets modern, powered by Raspberry Pi 5 with 7-hour battery life, Starting at $199"
tags:
  - mini-computer
favicon: https://a.kickstarter.com/favicon.ico
---
![icon](https://a.kickstarter.com/favicon.ico]

![[~/×/5163f1aafa87a8827d491761b174e9eb_MD5.jpg]]

Pilet is a retro-futuristic, open-source mini-computer powered by the Raspberry Pi 5. With 7-hour battery life and fully modifiable hardware and software, it's built for tinkerers, creatives, learners, and coders who want total freedom. Escape the limitations of closed devices and locked-down systems and bring the fun back into computing.

UPDATE: The project got fully funded within 5 minutes! Can’t believe the support—thank you so much! Due to the huge demand, we’re extending the free NVMe gift for now.

STRETCH GOAL: Many people have asked about Pilet 7’s modular keyboard. If we hit $1M, we’ll be able to confirm it as a single keyboard/gamepad module. Let’s make it happen, everyone!

Note: Early backers will receive a free NVMe module.  Don’t miss out—secure yours now.

### Key Features

- Raspberry Pi 5: Pilet is powered by the latest Raspberry Pi 5, bringing performance boost alongside advanced features like PCIe and NVMe support.
- Long battery-life: With a seven-hour battery life, you're free to take your Raspberry Pi projects anywhere, no longer bound to the desk.
- Open Source: Unlike modern iOS/Android tablets and computers that are closed and offer no room for hardware customization, Pilet runs on open-source hardware and software, giving you full control. After launch, we’ll release full schematics, PCB files, CAD files, and source code—giving you the freedom to tweak and modify both the hardware and software.
- Simple, Practical Design: We've embraced the KISS (Keep It Simple, Stupid) principle to minimize unnecessary complexity. No extra drivers or hardware hassles—just straightforward, 3D-printable, and fully customizable components.
- Modularity: Pilet’s modular design encourages creativity. You can design and build your own modules, whether it's for cameras, sensors, or actuators. We’re also working on modules like LTE and NVMe.

![[~/×/893e68363542e53de98afb99192084d0_MD5.webp]]

### Variants 

Pilet is available in two variants: Pilet 5 and Pilet 7. Both share similar internal components, with the main differences being the screen size and overall form factor.

### Pilet 5

Pilet 5 is the compact console variant, combining retro charm with modern functionality. It features a 5-inch touchscreen, versatile input devices, and a thumb-typing-friendly keyboard (layout still in development). Powered by open-source QMK firmware, the keyboard is fully customizable, making Pilet a hackable handheld perfect for on-the-go or in-bed computing.![[~/×/cb7c68f768e61f1808663a31a7bab159_MD5.jpg]]Pilet 5 features a trackball for precise cursor control, complemented by a IPS touch screen for versatile interaction with the OS interface. Together, they create a seamless and intuitive experience, making interactions with the device more enjoyable and natural:

In addition to the trackball and keyboard, Pilet 5 includes several other input devices:

- Scroll Wheel: Effortlessly scroll through webpages, app, and games
- Navigational Switch: Functions as arrow keys and doubles as a basic joystick/D-pad for gaming.
- Game Buttons: A, B, X, Y buttons for gaming. ![[~/×/f7fffebddae65dff9546ff7b5e680811_MD5.webp]]

We already have two modules in development for Pilet 5: the NVMe module, which is nearly complete, and the LTE module, which is currently in progress.![[~/×/9ba4a664f2c6a31e9ac704cd126c68c6_MD5.jpg]]

### Pilet 7

Pilet 7 is the larger tablet variant, featuring a 7-inch touchscreen for more screen real estate while staying portable. It shares the same internals as Pilet 5 and runs KDE Plasma by default, delivering a robust touch experience on a full-fledged Linux distribution—offering true flexibility compared to the limitations of Android and iOS.![[~/×/c615e9e3b83d6f1e54aa3b727a254fb5_MD5.png]]

The base model of Pilet 7 is almost ready. We’re currently exploring the inclusion of an additional feature for Pilet 7: Detachable Modules. While it’s not finalized yet, it’s an exciting addition we’re working hard to make a reality. We’ll keep you updated as development progresses. ![[~/×/c9ed052e8b04f80ecfee9ebac243e672_MD5.png]]The modular design enables the addition of various components, such as a keyboard, gamepad, or deck. Our aim is to make the modular mechanism fully 3D printable, allowing users to create and customize their own modules to seamlessly attach to the Pilet 7.

With proper funding, we aim to finalize the modular mechanism of Pilet 7, bringing this exciting feature to life.![[~/×/eed68b4fe24bf91518b37416666cb1e9_MD5.jpg]]

### Battery Management Module

Powering the Raspberry Pi 5 with batteries isn’t always straightforward, especially with heavy workloads or when using power-hungry peripherals. After six months of careful design, we’ve developed a reliable battery module featuring Texas Instruments’ TPS61088. This module ensures stable power delivery, meeting and exceeding the Raspberry Pi’s 5A requirement to keep your setup running smoothly without any undervoltage issues, regardless of the load.

![[~/×/82c4c166a0f51d7b60e62a0464d0fa29_MD5.png]]

The battery module features efficient charging with built-in reverse polarity and overcurrent protection for enhanced reliability. We’ve finalized the schematics and PCB design for the battery module. Huge thanks to PCBWay for generously sponsoring our prototyping, allowing us to create and test the module. It has undergone extensive testing to ensure reliable performance.![[~/×/c6b2fd69e5597718df5a8d0310632076_MD5.jpg]]

Typically, the Raspberry Pi 5 requires a power supply that can reliably deliver 5V and 5A. With Pilet, however, you're not limited to using a Raspberry Pi-specific power supply. You can charge your Pilet from any standard 5V USB source—whether it's your laptop, PC, car, airplane, or power bank—even if those sources can't provide 5A. The battery module automatically boosts current for more demanding applications.

#### Battery Options

The base kit doesn’t include batteries, but you can easily add them as an add-on when backing the project. Alternatively, you’re welcome to source your own. If you choose the DIY route, we’ll provide a detailed guide to help you source and crimp the batteries step-by-step.

The batteries in our battery add-on features dual rechargable 8000mAh lithium polymer batteries that provide 7-hours on-screen battery life. With power-saver mode enabled in Pilet OS, the battery life can stretch beyond seven hours. Pilet can also be used without batteries by connecting it directly to a USB power supply.

### Open-Source Design

We’re dedicated to making all our hardware and software fully open source upon release. The hardware will be licensed under CERN-OHL-S, while the software will be released under GPL. Unlike many projects that only share simplified schematics, we’re taking it further by providing complete schematics alongside the original KiCad PCB design files. Additionally, CAD and STEP files for all components will also be made available.

#### What Will Be Open Source

The following components will be available under CERN-OHL-S license:

#### Timeline for Open Sourcing

The source code will be released when the first units of Pilet are shipped. It will initially be available to testers and then later to the general public.

Once the design and code are published on our [GitHub](https://github.com/soulscircuit/pilet), we invite the community to contribute through pull requests, issue reports, and creative ideas. We encourage you to design and share custom modules for Pilet by submitting them as pull requests.

#### DIY Kit for Makers and STEM

We get that setting up Raspberry Pi projects can be a hassle. That’s why Pilet comes as an easy-to-assemble kit with no soldering required. Just follow our step-by-step guide to put it together. It’s perfect for STEM education and a great way to explore the inner workings of your device.

### Technical Specification

- Supported SBC: Raspberry Pi 5 (all variants are supported)
- Power Source: 3.7V Lithium Polymer and Lithium-Ion Batteries, 5V USB-C
- Screen: 5-inch and 7-inch IPS, DSI interface, 1280x800, capacitive touch screen.
- I/O: MicroHDMI (2x), USB 3.0 (2x), USB 2.0 (2x), Programmable GPIO
- Network: 802.11ac Wi-Fi, LAN, Bluetooth 5.0, LTE Cellular (via module)
- Storage: SD card, NVMe SSD (via module)
- Dimensions: 175mm x 125mm x 28mm

### Operating System

Pilet is compatible with a variety of Linux distributions and works out of the box with Raspberry Pi OS, requiring just a few tweaks for the battery and display. We’ll be also rolling out Pilet OS, a custom-optimized operating system built specifically for Pilet. Plus, we’ll provide detailed documentation so you can apply these optimizations to other distributions. With better mainline kernel support for Raspberry Pi 5 on the horizon, we’re confident nearly all Linux distributions will run smoothly on Pilet.

### Shipping

We offer global shipping. Please note that he shipping fees will be charged separately after the campaign ends and when the product is ready to go. The cost will depend on your location, how many units you order, and a few other factors. Also, things like import duties, VAT, and taxes fees aren’t included in the shipping cost, so those will be up to you. It’s a good idea to check with your local customs office to see if there are any extra fees.

### Additional Notes

- The first 100 backers will receive a free NVMe module with their Pilet unit—this exclusive offer is only available to our Kickstarter supporters. Order two units, and you'll get two NVMe modules, and so on.
- The Raspberry Pi 5 board is not included in this kit. You can use the Pi 5 you already have or purchase it separately.
- The project's base currency is Canadian Dollars (CAD). The starting price of $199 USD is converted from CAD and may vary slightly due to fluctuations in the exchange rate.
- All Pilet units are sold in beige.

### Contact

If you have any question, please contact us at [team@soulscircuit.com](https://www.kickstarter.com/projects/soulscircuit/). We are also available on [instagram](http://instagram.com/soulscircuit), [X](http://x.com/soulscircuit), [mastadon](https://mastodon.social/@soulscircuit), [facebook](https://www.facebook.com/soulscircuit), [youtube](https://www.youtube.com/@soulscircuit), and [threads](https://www.threads.net/@soulscircuit).