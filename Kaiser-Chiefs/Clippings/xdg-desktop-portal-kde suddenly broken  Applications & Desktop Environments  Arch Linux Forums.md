---
title: xdg-desktop-portal-kde suddenly broken / Applications & Desktop Environments / Arch Linux Forums
source: https://bbs.archlinux.org/viewtopic.php?id=279527
published: 
created: 2025-02-06
related:
  - "[[desktop Compositor issue on KDE 🐞]]"
---
#issue/reported 
## #1 [2022-09-07 19:58:56](https://bbs.archlinux.org/viewtopic.php?pid=2056226#p2056226)

**orlfman**

**Member**

![](https://bbs.archlinux.org/img/avatars/13473.gif?m=1572193442)

Registered: 2007-11-20

Posts: 141

### xdg-desktop-portal-kde suddenly broken

i just updated today and now all of a sudden xdg-desktop-portal-kde cannot start.  
my journalctl -b -p3

> Sep 07 12:55:10 archlinux xdg-desktop-portal-kde\[808\]: This application failed to start because no Qt platform plugin could be initialized. Reinstalling the application may fix this problem.
> 
>                                                                                                               Available platform plugins are: eglfs, linuxfb, minimal, minimalegl, offscreen, vnc, wayland-egl, wayland, wayland-xcomposite-egl, wayland-xcomposite-glx, xcb.  
> Sep 07 12:55:10 archlinux systemd-coredump\[842\]: \[?\] Process 808 (xdg-desktop-por) of user 972 dumped core.
> 
>                                                                                                   Module linux-vdso.so.1 with build-id 94e80f320f814d6d828c4119a150654d1dc7ec83  
>                                                  Module libuuid.so.1 with build-id 9057a530e6b3b0e71f24602a0039c490c9a0b5a1  
>                                                  Module libxcb-util.so.1 with build-id b1e4c01b388a3bd7a0a9ad384865b61f5f1d4a24  
> ...............................................  
> ...............................................  
> ...............................................  
> ...............................................  
> Sep 07 12:55:10 archlinux systemd\[775\]: Failed to start Xdg Desktop Portal For KDE

i've tried reinstalling xdg-desktop-portal-kde and xdg-desktop-portal but nothing. i really don't know what happened. i'm running kde on x11. i tried wayland but it gives me the same error as well.

## #2 [2022-09-07 20:28:35](https://bbs.archlinux.org/viewtopic.php?pid=2056233#p2056233)

**bitterhalt**

**Member**

Registered: 2022-06-19

Posts: 21

### Re: xdg-desktop-portal-kde suddenly broken

Yeah, same here. My both KDE installs broke after today's update. Same errors as OP on start. I am on x11 and wayland is also broken.  
This also causes that dark themes like Breeze dark do not work anymore and everything is white.

edit: tested now with fresh install and same error comes after I install xdg-desktop-portal

```
        This application failed to start because no Qt platform plugin could be initialized. Reinstalling the application may fix this problem.
                                                        
                                                        Available platform plugins are: eglfs, linuxfb, minimal, minimalegl, offscreen, vnc, wayland-egl, wayland, wayland-xcomposite-egl, wayland-xcomposite-glx, xcb.
syys 07 23:36:36 rocinante systemd-coredump[683]: [?] Process 662 (xdg-desktop-por) of user 968 dumped core.
                                                  
                                                  Module linux-vdso.so.1 with build-id 94e80f320f814d6d828c4119a150654d1dc7ec83
                                                  Module libuuid.so.1 with build-id 9057a530e6b3b0e71f24602a0039c490c9a0b5a1
                                                  Module libxcb-util.so.1 with build-id b1e4c01b388a3bd7a0a9ad384865b61f5f1d4a24
                                                  Module libxkbcommon-x11.so.0 with build-id 90654f41d9fe91c74bef6672a8b57ab34418b27a
                                                  Module libICE.so.6 with build-id a78252e65631a98d7935f1bca668c2fe1d6bbb53
                                                  Module libSM.so.6 with build-id 66cef8ae9a7848679be78dd26fd47e05110d03b5
                                                  Module libxcb-xinput.so.0 with build-id 409ee697e2b16243bf1fc6429e672f2359033388
                                                  Module libxcb-xkb.so.1 with build-id bad7e1eb65df04a6b2d676a08f68844856edaace
                                                  Module libxcb-xinerama.so.0 with build-id 5d2ab2683447d9bb7bcc49c058dfa06bcb65560d
                                                  Module libxcb-xfixes.so.0 with build-id e231a68d00ee4cfa12a2c31e755a9e2c1e7be450
                                                  Module libxcb-sync.so.1 with build-id 13025f6de23a271636ad321c77eda98801e62e8e
                                                  Module libxcb-shape.so.0 with build-id f9aab9846b5e3523bd534f8a845f36a37d42b3fa
                                                  Module libxcb-render.so.0 with build-id b1ca498d665807ab0ccdafbe8070853efd058173
                                                  Module libxcb-render-util.so.0 with build-id 32609134bf1b73183d07a66f6bd65c94b4542460
                                                  Module libxcb-randr.so.0 with build-id c914473ab7592ed5cf5c191200faaac1089c12ad
                                                  Module libxcb-shm.so.0 with build-id 828fec4d856e2710e732ea8d92c3f250c807b1c2
                                                  Module libxcb-image.so.0 with build-id 0e6feae23e34658646dbd63d11f899c92c5d3c79
                                                  Module libxcb-icccm.so.4 with build-id 5eb9288df14c7f50af1e8db26c37e19d78bf0978
                                                  Module libX11-xcb.so.1 with build-id f92352eae0a30aea89d11beb22367fa985288925
                                                  Module libQt5XcbQpa.so.5 with build-id 35d77512bf3ab542165331774a1fb12498f960bd
                                                  Module libqxcb.so with build-id 4ad781eabb1682e44ba486c23c478eedaf64e3be
                                                  Module libdl.so.2 with build-id 3b5b9c7c3efd20001319657d1972e90e853984e2
                                                  Module libbrotlicommon.so.1 with build-id acfd597a977c8087bb6184383daae2e828a9ce42
                                                  Module libexpat.so.1 with build-id 113bb5a3e9ad856801bfcfc029102c9bdc13d67e
                                                  Module libgmp.so.10 with build-id 26cec2ebe94cc5c4cb99e6988717347222b324fd
                                                  Module libhogweed.so.6 with build-id 5c4a99ad0aabe13bd9b517f92ab339436a2bc1f2
                                                  Module libnettle.so.8 with build-id 6a26cbe6819abc8c57668f80ca8c8160fd85e29e
                                                  Module libunistring.so.2 with build-id 617dbf3d3d6f85d6556a7a036e23845e95490158
                                                  Module libidn2.so.0 with build-id b16e7570b102789b13ff77289762dbfe3f8f46bc
                                                  Module libbrotlienc.so.1 with build-id 74adbc62e4fbb5da9d37b5aa458471f4130862ff
                                                  Module libp11-kit.so.0 with build-id cc372ea3c28c4d3dfc633b4d2e933c8584d2af16
                                                  Module libgpg-error.so.0 with build-id 4738b8a9478177c202cccd64e0eb65d3dea2bfae
                                                  Module libbrotlidec.so.1 with build-id 66c54e9301f7e102ecc1d88547e5f0e8a056fe22
                                                  Module libxkbcommon.so.0 with build-id 6cf66eead3fcc20fe5df10162bfbcdcdc8b2a183
                                                  Module libfontconfig.so.1 with build-id 36be6951b8c1e42a7dd05684a37400fc8ef9147c
                                                  Module libwayland-cursor.so.0 with build-id 46a637dbcbb02d6712a201f177377b66598b9121
                                                  Module libresolv.so.2 with build-id 6e92fdf0a76152939e57a562fd539c86076b5728
                                                  Module libkeyutils.so.1 with build-id ac405ddd17be10ce538da3211415ee50c8f8df79
                                                  Module libkrb5support.so.0 with build-id 15f223925ef59dee4379ebbc0fcd14eda9ba81a2
                                                  Module libcom_err.so.2 with build-id 3360a28740ffbbd5a5c0c21d09072445908707e5
                                                  Module libk5crypto.so.3 with build-id cc77a742cb62447a53d98285b41558b8acd92866
                                                  Module libkrb5.so.3 with build-id 371cc767dacb17cb42c9c44b88eebbed5ee9a756
                                                  Module libpthread.so.0 with build-id 135923f9a38592e2e90692c8191278a166f86569
                                                  Module libusbmuxd-2.0.so.6 with build-id fd9f05e7f5b0da4e15972f75b61fd9b4b9f06dbe
                                                  Module libtasn1.so.6 with build-id fa2f7a5bfbcda1481ab5875d5744730ea1be8fb1
```

*Last edited by bitterhalt (2022-09-07 21:36:58)*

## #3 [2022-09-07 21:18:24](https://bbs.archlinux.org/viewtopic.php?pid=2056238#p2056238)

**orlfman**

**Member**

![](https://bbs.archlinux.org/img/avatars/13473.gif?m=1572193442)

Registered: 2007-11-20

Posts: 141

### Re: xdg-desktop-portal-kde suddenly broken

Thanks bitterhalt. Nice to know I am not the only one. It looks like xdg-desktop-portal itself is just broken. I'm getting the white theme look too with some apps that use xdg-desktop-portal to get system theme information.

## #4 [2022-09-07 21:32:15](https://bbs.archlinux.org/viewtopic.php?pid=2056240#p2056240)

**bitterhalt**

**Member**

Registered: 2022-06-19

Posts: 21

### Re: xdg-desktop-portal-kde suddenly broken

orlfman wrote:

> Thanks bitterhalt. Nice to know I am not the only one. It looks like xdg-desktop-portal itself is just broken. I'm getting the white theme look too with some apps that use xdg-desktop-portal to get system theme information.

Righ now only way to fix this is to uninstall xdg-desktop-portal. But it is bit hard because I have installed Plasma-meta on my main system and xdg is in plasma-meta's group dependencies.  ![tongue](https://bbs.archlinux.org/img/smilies/tongue.png)

*Last edited by bitterhalt (2022-09-07 21:34:11)*

## #5 [2022-09-08 15:32:45](https://bbs.archlinux.org/viewtopic.php?pid=2056352#p2056352)

**attishno1**

**Member**

Registered: 2022-09-08

Posts: 31

### Re: xdg-desktop-portal-kde suddenly broken

For me, when I try to save anything using firefox, the dialog now appears white. It used to have the breeze dark theme before.

## #6 [2022-09-08 15:54:42](https://bbs.archlinux.org/viewtopic.php?pid=2056360#p2056360)

**nivron**

**Member**

Registered: 2019-04-17

Posts: 3

### Re: xdg-desktop-portal-kde suddenly broken

Having the same problem here (fully updated as of 1h ago).  Found a [bug report](https://bugs.archlinux.org/task/75851) about it.  The reporter seems to have at least temporarily solved the issue by running

```
systemctl --user restart plasma-xdg-desktop-portal-kde
```

  This actually fixed my problem temporarily as well.  I assume it will need to be done each login until the bug gets corrected.  I did have to restart Firefox afterwards for the theme to go back to normal though.

## #7 [2022-09-08 18:02:33](https://bbs.archlinux.org/viewtopic.php?pid=2056383#p2056383)

**attishno1**

**Member**

Registered: 2022-09-08

Posts: 31

### Re: xdg-desktop-portal-kde suddenly broken

Thank you

## #8 [2022-09-08 18:18:10](https://bbs.archlinux.org/viewtopic.php?pid=2056384#p2056384)

**orlfman**

**Member**

![](https://bbs.archlinux.org/img/avatars/13473.gif?m=1572193442)

Registered: 2007-11-20

Posts: 141

### Re: xdg-desktop-portal-kde suddenly broken

nivron wrote:

> Having the same problem here (fully updated as of 1h ago).  Found a [bug report](https://bugs.archlinux.org/task/75851) about it.  The reporter seems to have at least temporarily solved the issue by running
> 
> ```
> systemctl --user restart plasma-xdg-desktop-portal-kde
> ```
> 
>   This actually fixed my problem temporarily as well.  I assume it will need to be done each login until the bug gets corrected.  I did have to restart Firefox afterwards for the theme to go back to normal though.

thank you! this temp fix is working for me as well.

## #9 [2022-09-08 23:12:51](https://bbs.archlinux.org/viewtopic.php?pid=2056426#p2056426)

**bitterhalt**

**Member**

Registered: 2022-06-19

Posts: 21

### Re: xdg-desktop-portal-kde suddenly broken

I just noticed that uninstalling 'xdg-desktop-portal' package fixes this. So if I install only 'xdg-desktop-portal-kde' everything works.

*Last edited by bitterhalt (2022-09-08 23:16:24)*

## #10 [2022-09-08 23:46:55](https://bbs.archlinux.org/viewtopic.php?pid=2056433#p2056433)

**attishno1**

**Member**

Registered: 2022-09-08

Posts: 31

### Re: xdg-desktop-portal-kde suddenly broken

bitterhalt wrote:

> I just noticed that uninstalling 'xdg-desktop-portal' package fixes this. So if I install only 'xdg-desktop-portal-kde' everything works.

Do you believe they will actually fix the issue or let it remain?

## #11 [2022-09-09 00:04:58](https://bbs.archlinux.org/viewtopic.php?pid=2056434#p2056434)

**bitterhalt**

**Member**

Registered: 2022-06-19

Posts: 21

### Re: xdg-desktop-portal-kde suddenly broken

attishno1 wrote:

> bitterhalt wrote:
> 
> > I just noticed that uninstalling 'xdg-desktop-portal' package fixes this. So if I install only 'xdg-desktop-portal-kde' everything works.
> 
> Do you believe they will actually fix the issue or let it remain?

I hope so because some apps like flatpak needs xdg-desktop-portal.

## #12 [2022-09-09 00:18:28](https://bbs.archlinux.org/viewtopic.php?pid=2056436#p2056436)

**attishno1**

**Member**

Registered: 2022-09-08

Posts: 31

### Re: xdg-desktop-portal-kde suddenly broken

bitterhalt wrote:

> attishno1 wrote:
> 
> > bitterhalt wrote:
> > 
> > > I just noticed that uninstalling 'xdg-desktop-portal' package fixes this. So if I install only 'xdg-desktop-portal-kde' everything works.
> > 
> > Do you believe they will actually fix the issue or let it remain?
> 
> I hope so because some apps like flatpak needs xdg-desktop-portal.

Alright. Then I guess I will wait for it and continue using Firefox as it is. The white light that comes everytime when I open the portal is really irritating me though.

## #13 [2022-09-09 09:05:11](https://bbs.archlinux.org/viewtopic.php?pid=2056487#p2056487)

**bitterhalt**

**Member**

Registered: 2022-06-19

Posts: 21

### Re: xdg-desktop-portal-kde suddenly broken

attishno1 wrote:

> bitterhalt wrote:
> 
> > attishno1 wrote:
> > 
> > > Do you believe they will actually fix the issue or let it remain?
> > 
> > I hope so because some apps like flatpak needs xdg-desktop-portal.
> 
> Alright. Then I guess I will wait for it and continue using Firefox as it is. The white light that comes everytime when I open the portal is really irritating me though.

Let us now if it gets fixed at some point ![smile](https://bbs.archlinux.org/img/smilies/smile.png)

I just uninstalled it because I can't stand the white theme and I can live without flatpaks.

## #14 [2022-09-09 17:26:22](https://bbs.archlinux.org/viewtopic.php?pid=2056586#p2056586)

**orlfman**

**Member**

![](https://bbs.archlinux.org/img/avatars/13473.gif?m=1572193442)

Registered: 2007-11-20

Posts: 141

### Re: xdg-desktop-portal-kde suddenly broken

bitterhalt wrote:

> I just noticed that uninstalling 'xdg-desktop-portal' package fixes this. So if I install only 'xdg-desktop-portal-kde' everything works.

i can confirm this is working for me as well. interesting enough, when i went to remove xdg-desktop-portal, it warned about firefox needing it. but firefox is working fine with just xdg-desktop-portal-kde. no more white theme, no more errors in journalctl.

## #15 [2022-09-09 18:54:53](https://bbs.archlinux.org/viewtopic.php?pid=2056593#p2056593)

**bitterhalt**

**Member**

Registered: 2022-06-19

Posts: 21

### Re: xdg-desktop-portal-kde suddenly broken

orlfman wrote:

> bitterhalt wrote:
> 
> > I just noticed that uninstalling 'xdg-desktop-portal' package fixes this. So if I install only 'xdg-desktop-portal-kde' everything works.
> 
> i can confirm this is working for me as well. interesting enough, when i went to remove xdg-desktop-portal, it warned about firefox needing it. but firefox is working fine with just xdg-desktop-portal-kde. no more white theme, no more errors in journalctl.

In my understanding Firefox only need that if you want to use KDE file picker instead of default GTK one and it is hidden setting called "widget.use-xdg-desktop-portal.file-picker" when you open advanced settings in Firefox  by typing: about:config ![smile](https://bbs.archlinux.org/img/smilies/smile.png)

[https://wiki.archlinux.org/title/firefo … ntegration](https://wiki.archlinux.org/title/firefox#KDE_integration)

*Last edited by bitterhalt (2022-09-09 18:57:36)*

## #16 [2022-09-10 02:38:32](https://bbs.archlinux.org/viewtopic.php?pid=2056645#p2056645)

**Fijxu**

**Member**

![](https://bbs.archlinux.org/img/avatars/137918.png?m=1656821115)

Registered: 2021-08-11

Posts: 46

### Re: xdg-desktop-portal-kde suddenly broken

Same problem here, KDE File Picker doesn't have the proper QT theme, same goes for GTK programs too (Thunderbird, Firefox)

## #17 [2022-09-10 07:04:53](https://bbs.archlinux.org/viewtopic.php?pid=2056660#p2056660)

**orlfman**

**Member**

![](https://bbs.archlinux.org/img/avatars/13473.gif?m=1572193442)

Registered: 2007-11-20

Posts: 141

### Re: xdg-desktop-portal-kde suddenly broken

bitterhalt wrote:

> orlfman wrote:
> 
> > bitterhalt wrote:
> > 
> > > I just noticed that uninstalling 'xdg-desktop-portal' package fixes this. So if I install only 'xdg-desktop-portal-kde' everything works.
> > 
> > i can confirm this is working for me as well. interesting enough, when i went to remove xdg-desktop-portal, it warned about firefox needing it. but firefox is working fine with just xdg-desktop-portal-kde. no more white theme, no more errors in journalctl.
> 
> In my understanding Firefox only need that if you want to use KDE file picker instead of default GTK one and it is hidden setting called "widget.use-xdg-desktop-portal.file-picker" when you open advanced settings in Firefox  by typing: about:config ![smile](https://bbs.archlinux.org/img/smilies/smile.png)
> 
> [https://wiki.archlinux.org/title/firefo … ntegration](https://wiki.archlinux.org/title/firefox#KDE_integration)

i just tried that settting in firefox and you are right, setting it to 1 doesn't work. output in the terminal complains of missing xdg-desktop-portal. luckily my main browser is firedragon, a fork of firefox with opensuse kde patches and some privacy stuff by default. so the qt file picker is built in and just works regardless.

## #18 [2022-09-10 11:29:47](https://bbs.archlinux.org/viewtopic.php?pid=2056689#p2056689)

**attishno1**

**Member**

Registered: 2022-09-08

Posts: 31

### Re: xdg-desktop-portal-kde suddenly broken

Yes. Even Thunderbird was appearing white all of a sudden. Had to switch to its dark theme.

## #19 [2022-09-10 20:04:31](https://bbs.archlinux.org/viewtopic.php?pid=2056784#p2056784)

**Ilanox**

**Member**

Registered: 2022-09-10

Posts: 2

### Re: xdg-desktop-portal-kde suddenly broken

Hello, My plasma x11 just freeze after the latest update when I login into my user.

Does anyone got the same issue?  
If yes, do you got a solution?

## #20 [2022-09-10 21:49:36](https://bbs.archlinux.org/viewtopic.php?pid=2056809#p2056809)

**bitterhalt**

**Member**

Registered: 2022-06-19

Posts: 21

### Re: xdg-desktop-portal-kde suddenly broken

Ilanox wrote:

> Hello, My plasma x11 just freeze after the latest update when I login into my user.
> 
> Does anyone got the same issue?  
> If yes, do you got a solution?

Can you see same errors on your system log? For me this only breaks xdg-desktop-portal without any system freezes.

*Last edited by bitterhalt (2022-09-10 21:50:35)*

## #21 [2022-09-11 03:48:23](https://bbs.archlinux.org/viewtopic.php?pid=2056834#p2056834)

**attishno1**

**Member**

Registered: 2022-09-08

Posts: 31

### Re: xdg-desktop-portal-kde suddenly broken

Ilanox wrote:

> Hello, My plasma x11 just freeze after the latest update when I login into my user.
> 
> Does anyone got the same issue?  
> If yes, do you got a solution?

I think this is somekind of a separate issue. That will make your system unusable. Are you sure that nothing else updated that caused the system to break? Maybe use Timeshift to roll back and then do an update from TTY?

## #22 [2022-09-11 06:32:09](https://bbs.archlinux.org/viewtopic.php?pid=2056847#p2056847)

**Ilanox**

**Member**

Registered: 2022-09-10

Posts: 2

### Re: xdg-desktop-portal-kde suddenly broken

attishno1 wrote:

> Ilanox wrote:
> 
> > Hello, My plasma x11 just freeze after the latest update when I login into my user.
> > 
> > Does anyone got the same issue?  
> > If yes, do you got a solution?
> 
> I think this is somekind of a separate issue. That will make your system unusable. Are you sure that nothing else updated that caused the system to break? Maybe use Timeshift to roll back and then do an update from TTY?

I Checked, and the only error I get is about xdg-desktop-portal, I don't really know and see another error

## #23 [2022-09-14 13:35:32](https://bbs.archlinux.org/viewtopic.php?pid=2057293#p2057293)

**V1del**

**Forum Moderator**

![](https://bbs.archlinux.org/img/avatars/64676.png?m=1572193435)

Registered: 2012-10-16

Posts: 23,916

### Re: xdg-desktop-portal-kde suddenly broken

Do any of you have multiple xdg-desktop-portal implementations? If you want the KDE one make sure portal-gtk isn't installed as that might claim the interface too soon and grab it away from KDE's portal.

xdg-desktop-portal as the interface utility should/can remain as far as I know.

FWIW I haven't noticed any issues here, granted the above is setup.

*Last edited by V1del (2022-09-14 13:36:02)*

## #24 [2022-09-15 07:42:23](https://bbs.archlinux.org/viewtopic.php?pid=2057408#p2057408)

**pisauraxtx**

**Member**

Registered: 2021-05-15

Posts: 33

### Re: xdg-desktop-portal-kde suddenly broken

orlfman wrote:

> nivron wrote:
> 
> > Having the same problem here (fully updated as of 1h ago).  Found a [bug report](https://bugs.archlinux.org/task/75851) about it.  The reporter seems to have at least temporarily solved the issue by running
> > 
> > ```
> > systemctl --user restart plasma-xdg-desktop-portal-kde
> > ```
> > 
> >   This actually fixed my problem temporarily as well.  I assume it will need to be done each login until the bug gets corrected.  I did have to restart Firefox afterwards for the theme to go back to normal though.
> 
> thank you! this temp fix is working for me as well.

Adding to this: If you append the command to the end of the .xinitrc file in your home folder as described [here](https://bbs.archlinux.org/viewtopic.php?pid=2057407#p2057407), you don't have to manually execute it after every login.

## #25 [2022-09-15 17:08:59](https://bbs.archlinux.org/viewtopic.php?pid=2057494#p2057494)

**orlfman**

**Member**

![](https://bbs.archlinux.org/img/avatars/13473.gif?m=1572193442)

Registered: 2007-11-20

Posts: 141

### Re: xdg-desktop-portal-kde suddenly broken

V1del wrote:

> Do any of you have multiple xdg-desktop-portal implementations? If you want the KDE one make sure portal-gtk isn't installed as that might claim the interface too soon and grab it away from KDE's portal.
> 
> xdg-desktop-portal as the interface utility should/can remain as far as I know.
> 
> FWIW I haven't noticed any issues here, granted the above is setup.

i only had xdg-desktop-portal and xdg-desktop-portal-kde. now i only have xdg-desktop-portal-kde because with xdg-desktop-portal, xdg-desktop-portal-kde fails to start. but some stuff does relies on xdg-desktop-portal, likewise, some stuff relies on xdg-desktop-portal-kde.