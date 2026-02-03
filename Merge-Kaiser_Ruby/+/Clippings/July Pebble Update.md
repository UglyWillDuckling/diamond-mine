---
source: "https://ericmigi.com/blog/july-pebble-update"
published:
created: 2025-07-27
tags:
---
[← Back to Home](https://ericmigi.com/)

\[2025-07-25\]

***TL:DR;***

- New (old) name!
- ~~Core~~ Pebble 2 Duo update - schedule, mobile app, tariffs, BT range, order confirmation emails
- Mini ~~Core~~ Pebble Time 2 update - big one coming soon™
- Pebble SDK release
- We made some new [Meet Pebble t-shirts](https://orders.repebble.com/t-shirts)

### It's (Still) Pebble Time!

![[~/×/cd8d9ea7fe5be1c90c0981b24a62510e_MD5.png]]

Great news - we’ve been able to recover the trademark for Pebble! Honestly, I wasn’t expecting this to work out so easily.

Core 2 Duo is now Pebble 2 Duo. Core Time 2 is now Pebble Time 2 <sup>*</sup>.

People were going to call these new watches Pebbles anyways, so I am glad that it’s official. It may take me a few cycles to stop calling it Core 2 Duo or C2D, so expect some naming/language confusion everywhere for a bit. Our company is still called Core Devices, because we make the devices that are part of your core daily life.

*<sup><sup>*</sup></sup> the asterix may actually be part of the name, but I think most people will just call it Pebble Time 2. We never actually shipped that watch, and this new watch uses the exact same display. Pebble Time 2 is dead, long live Pebble Time 2.*

### Core Pebble 2 Duo Updates

![[~/×/b4ba7d5674aead6949d3e6df08ffca57_MD5.png]]

[https://x.com/jshchnz/status/1945156513535848581](https://x.com/jshchnz/status/1945156513535848581)

As usual with any hardware project, getting Pebble 2 Duo (ahhh that feels nice to type) over the finish line into mass production has been *exciting* to say the least. The last few weeks have been intense! We’ve shipped over 100 watches to ‘alpha’ testers. Thank you for your bug reports, feedback and help.

**When will I get my** ~~**Core**~~ **Pebble 2 Duo?**

We’re not in mass production yet. This means that the original estimate of shipping batch 1 in July will not happen. As it says on the [website](https://store.repebble.com/), delays may happen. Our best estimate right now is that batch 1 will start shipping in end-August, and batch 2 will ship in mid-September. We’re constantly working on this, so the date may shift earlier or later.

Why the delay? We have a chance to improve the waterproof rating so we decided to delay production and try a few tweaks to the manufacturing process. Waterproofing is a bit harder now vs 10 years ago because we added a speaker. Our original target specification was IPX8 (splash-proof, tested to 1 meter depth). We’ve hit that spec, now we are testing an improvement that could enable us to hit a higher spec. Still TBD, but we’re seeing whether we can hit 5, 10, 15 or 20 meters depth rating. Testing is iterative, with each test taking 5-7 days (due to time for glue to cure).🤞

**New Pebble mobile app**

Our tiny 3 person software team is happy, though, because the hardware delay gives us more time to finish the software!

The new mobile app has not released yet, but we’re close! It’s now listed on [Testflight](https://testflight.apple.com/join/M695eCup) (closed beta right now) and [Google Play](https://play.google.com/store/apps/details?id=coredevices.coreapp) (Android folks can register to get notified as soon as we release it). As of right now, we think we can release it to an open beta test in 2-3 weeks (subject to winds changing). Remember - this app will be fully compatible with old Pebbles (except OG Pebble/Steel, we’ll add support for those later) so even if you don’t have a new watch yet you can still bask in the glory of a new Pebble app that has fewer features than the old one (for now).

We published a new batteries-included open source library for building Pebble companion apps called libpebble3 [https://github.com/coredevices/libpebble3](https://t.co/UoBrTIpEan). This is what the new Pebble mobile app uses under the hood.

Thank you Nicholas for designing the snazzy mobile app icon!

**Speaking of the speaker**

Part of the last minute ‘fun’ was an issue that caused a [clicking sound](https://photos.app.goo.gl/kEJ5qvzTCwbZDwD16) when we played something through the speaker. We thought it might be a hardware issue (which is scary this close to mass production) but after banging our heads against the wall for a few days it turned out to be a software issue. Yay! The speaker and microphone hardware work quite well.

 <video controls=""><source src="/assets/july-pebble-update-6-qahe2dg--vwv0bby.mp4" type="video/mp4"> Your browser does not support the video tag.</video>

qAhe2DG--vwv0bBy.mp4

We even received a [PR to PebbleOS](https://github.com/coredevices/PebbleOS/pull/132) adding support for the microphone from an alpha tester (thanks JP!)

**Bluetooth Range testing**

![[~/×/c672a007b9777ee9b312dda2d9538968_MD5.png]]

I did some super unscientific open air freespace Bluetooth range testing at my local park. Test procedure: I started playing music on my phone (Pixel 9 Pro) and walked way. I periodically paused/unpaused until I couldn’t anymore, which happened around 140 feet. On my street with buildings, I got slightly longer range (due to RF reflections). In-door range is much lower, of course, and will vary dramatically depending on building construction and other RF noise.

**Tariffs**

Tariff cost for US orders is around $10 per Core 2 Duo. Non-US orders do not have any US tariffs since we ship direct from Hong Kong to all non-US addresses. We are shipping 'customs and duties prepaid' (DDP) You will be charged your country's tariffs/taxes/duties/VAT during order confirmation, then when you receive your package you will not owe any additional money.

**Order confirmation**

We haven’t sent out order confirmation emails yet, so don’t worry - you haven’t missed anything. As soon as we figure out the final few tasks before mass production, we will send out an email with a link to change/confirm your address and pay any outstanding tariffs/taxes/duties.

You’ll also be able to add add-ons to your order, like a [Firmware Development Kit](https://pebbleos-core.readthedocs.io/en/latest/boards/asterix/index.html) or an extra charge dongle.

Depending on a few variables, we *may* even have a few extra black ~~Core~~ Pebble 2 Duo’s available. We’ll give priority to those who pre-ordered a white ~~Core~~ Pebble 2 Duo - if you want to switch from white to black you’ll be given the option (subject to availability).

[![[~/×/1a9ca3bc3d9156696c9db1655df5775f_MD5.png]]](https://apps.rebble.io/en_US/application/53381b17d1719b42b800028b?native=false&query=weatherland&section=watchfaces)

One last shot of the watch running the beautiful Weather Land watchface by Reno

### Core Pebble Time 2\* updates

Good news! We’re in the engineering verification test (EVT) phase of the project. If the DHL package estimate is correct, I should receive the first fully assembled ~~Core~~ Pebble Time 2 <sup>*</sup> later today. As of a [commit to PebbleOS](https://github.com/coredevices/PebbleOS/commit/0406668c200c0137479432fb8a681425b98f3de1) yesterday, our team and friends at [SiFli](https://ericmigi.com/blog/how-to-build-a-smartwatch-picking-a-chip) got the entire BLE subsystem working, and with that…PebbleOS is booting up and running on the watch. I am *very* excited to try it out.

Also, we've made some improvements to the design - it's a bit sleeker! Expect a full ~~Core~~ Pebble Time 2 <sup>*</sup> update (with pictures!) very very soon™.

### Using the Pebble and PebbleOS trademarks

With the recovery of the Pebble trademark, that means you too can use the word Pebble for Pebble related software and hardware projects. Just like the olden days, we have [some guidelines](https://developer.repebble.com/legal/) governing how others can use the Pebble or PebbleOS trademark. Please keep them in mind as you develop new Pebble related stuff.

Please do not use the word ‘rePebble’ for anything, it’s simply our domain name (for now!). Our watches are Pebble watches and our company name is Core Devices.

### Pebble SDK

We made it's suuuuuper easy to install the [Pebble SDK](https://github.com/coredevices/pebble-tool), build a watchface/app and run it on the emulator:

On Mac/Linux/WSL: install uv ([https://docs.astral.sh/uv](https://t.co/SOfNPWPmJT)) then run the following commands:

```bash
uv tool install pebble-tool
pebble new-project my1stapp
cd my1stapp && pebble build 
pebble install --emulator aplite
```

That's it! Full guides [here](https://developer.rebble.io/developer.pebble.com/tutorials/watchface-tutorial/part1/index.html). After installing the tool, you can use our new [Pebble VS Code](https://marketplace.visualstudio.com/items?itemName=coredevices.pebble-vscode) extension too!

Thanks to our amazingly productive summer intern Griffin for upgrading the [`pebble`](https://github.com/coredevices/pebble-tool) [tool to Python3](https://github.com/coredevices/pebble-tool) and creating the open source [VS Code extension](https://github.com/coredevices/pebble-vscode). Feedback is appreciated - either through Github Issues on the respective repo or in [#sdk-dev](https://discord.com/channels/221364737269694464/1385003387296419891) on the [Rebble Discord](https://discordapp.com/invite/aRUAYFN).

### New release of the classic ‘Meet Pebble’ t-shirt

![[~/×/1c08d9220e17dda7e5e02f5f724095c8_MD5.png]]

For the first time in 13 years, we're re-releasing the original t-shirt with the back designs! For fun, I ordered 500 of the classic Meet Pebble t-shirt. Buy one [here](https://orders.repebble.com/t-shirts) for $25.

Here's the backstory behind this t-shirt. In 2011, the early Pebble team went on an off-site for a week to Portland, Oregon. While we were staying there, I had to shop at the 'Put A Bird On It' store. I bought a t-shirt that I ended up wearing in the original [Kickstarter video](https://www.kickstarter.com/projects/getpebble/pebble-e-paper-watch-for-iphone-and-android/description). After the Kickstarter went viral, the creator of the t-shirt  [Jessica Lynch](https://www.jlynchjonely.com/) reached out and offered to make us a custom t-shirt. Naturally, we said yes! She designed this beautiful 'Meet Pebble' t-shirt. Only ~50 were made with the original 3D CAD exploded view illustration on the back, as a special edition for the first Pebble employees. We made thousands in more different colors, but only with the front illustration.