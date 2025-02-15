---
title: Rockbox Utility won't detect my iPod in the right mount point
source: https://forums.rockbox.org/index.php?topic=54368.0
created: 2025-01-13
description: Rockbox Utility won't detect my iPod in the right mount point
tags:
  - iPod
  - rockbox
related:
  - "[[rockbox]]"
---
![icon](https://forums.rockbox.org/favicon.ico)
### ![](https://forums.rockbox.org/Themes/Classic/images/topic/normal_post.gif) Topic: Rockbox Utility won't detect my iPod in the right mount point  (Read 1596 times)

I just plugged in my iPod and executed the utility app on Windows 10 but, for some reason, it  
keeps telling me it can't detect it on mount point G:/, even though its actually on F:/ and I can't  
change the mount point in the configuration to the actual one. I'm stuck on G:/ in the dropdown menu  
so I'm unable to do anything with my iPod.

![](https://forums.rockbox.org/Themes/Classic/images/ip.gif) Logged

---

Actually, I just unplugged the iPod and, for some reason,  
the Utility app is still detecting an iPod device that doesn't even exist.

![](https://forums.rockbox.org/Themes/Classic/images/ip.gif) Logged

---

> Actually, I just unplugged the iPod and, for some reason,  
> the Utility app is still detecting an iPod device that doesn't even exist.  

That's not "detecting". It loads and shows the previously used configuration values, but at the same time realizes those are incorrect. I suspect you used it before at some point when the player was assigned G:.

Additionally, it filters out all devices that have an incompatible filesystem. I suspect this to be the case here. Please go to Help / System Trace, save the trace file and post it so we can understand what happened. These screenshots aren't helpful for that.

![](https://forums.rockbox.org/Themes/Classic/images/ip.gif) Logged

---

Here you go.

\[main.cpp:59 Info\] Starting trace at "2022-11-12T10:54:13"  
\[rbutilqt.cpp:67 Info\] ======================================  
\[rbutilqt.cpp:68 Info\] Rockbox Utility 1.5.1  
\[rbutilqt.cpp:69 Info\] Qt version: 5.15.2  
\[rbutilqt.cpp:74 Info\] compiled using gcc 11.2.0  
\[rbutilqt.cpp:79 Info\] ======================================  
\[rbsettings.cpp:107 Info\] configuration: system  
\[rbsettings.cpp:163 Info\] GET U: "cachepath" "R:\\\\Temp"  
\[httpget.h:53 Info\] Global cache set to "R:/Temp"  
\[rbsettings.cpp:163 Info\] GET U: "proxytype" "none"  
\[rbutilqt.cpp:609 Info\] Proxy is QUrl("")  
\[httpget.h:59 Info\] setting global proxy QUrl("")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/bootloadermethod" QVariant(QString, "s5l")  
\[httpget.cpp:84 Info\] setting cache folder to "R:/Temp/rbutil-cache"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/brand" QVariant(QString, "Apple")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipod6g" QVariant(int, -1)  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/name" QVariant(QString, "Ipod Classic (6th gen)")  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[utils.cpp:243 Info\] Volume name of "G:/" is ""  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/playerpic" QVariant(QString, "ipod6g")  
\[httpget.cpp:84 Info\] setting cache folder to "R:/Temp/rbutil-cache"  
\[httpget.cpp:77 Info\] disabling download cache  
\[rbutilqt.cpp:212 Info\] downloading build info  
\[playerbuildinfo.cpp:326 Info\] U: build\_info\_url QVariant(QString, "[https://download.rockbox.org/build-info](https://download.rockbox.org/build-info)")  
\[httpget.cpp:257 Info\] Get URI "[https://download.rockbox.org/build-info](https://download.rockbox.org/build-info)"  
\[httpget.cpp:202 Info\] Request started  
\[:0 Warning\] QLayout: Attempting to add QLayout "" to RbUtilQt "RbUtilQtFrm", which already has a layout  
\[rbsettings.cpp:163 Info\] GET U: "install\_rockbox" "true"  
\[rbsettings.cpp:163 Info\] GET U: "install\_fonts" "true"  
\[rbsettings.cpp:163 Info\] GET U: "install\_plugin\_data" "true"  
\[rbsettings.cpp:163 Info\] GET U: "install\_voice" "false"  
\[rbsettings.cpp:163 Info\] GET U: "install\_manual" "true"  
\[rockboxinfo.cpp:31 Info\] Getting version info from rockbox-info.txt  
\[httpget.cpp:84 Info\] setting cache folder to "R:/Temp/rbutil-cache"  
\[rbsettings.cpp:163 Info\] GET U: "cachedisable" "false"  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/bootloadermethod" QVariant(QString, "s5l")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipod6g" QVariant(int, -1)  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[rbsettings.cpp:163 Info\] GET U: "build" ""  
\[rockboxinfo.cpp:31 Info\] Getting version info from rockbox-info.txt  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "\_languages/list" QVariant(QVariantMap, QMap(("afrikaans", QVariant(QString, "Afrikaans"))("arabic", QVariant(QString, "Arabic"))("basque", QVariant(QString, "Basque"))("bulgarian", QVariant(QString, "Bulgarian"))("catala", QVariant(QString, "Catala"))("chinese-simp", QVariant(QString, "Chinese (simplified)"))("chinese-trad", QVariant(QString, "Chinese (traditional)"))("czech", QVariant(QString, "Czech"))("dansk", QVariant(QString, "Dansk"))("deutsch", QVariant(QString, "Deutsch"))("eesti", QVariant(QString, "Eesti"))("english", QVariant(QString, "English (UK)"))("english-us", QVariant(QString, "English (US)"))("espanol", QVariant(QString, "Espanol"))("esperanto", QVariant(QString, "Esperanto"))("finnish", QVariant(QString, "Finnish"))("francais", QVariant(QString, "Francais"))("galego", QVariant(QString, "Galego"))("greek", QVariant(QString, "Greek"))("hebrew", QVariant(QString, "Hebrew"))("hindi", QVariant(QString, "Hindi"))("hrvatski", QVariant(QString, "Hrvatski"))("islenska", QVariant(QString, "Islenska"))("italiano", QVariant(QString, "Italiano"))("japanese", QVariant(QString, "Japanese"))("korean", QVariant(QString, "Korean"))("latviesu", QVariant(QString, "Latviesu"))("lietuviu", QVariant(QString, "Lietuviu"))("magyar", QVariant(QString, "Magyar"))("nederlands", QVariant(QString, "Netherlands"))("norsk", QVariant(QString, "Norsk"))("norsk-nynorsk", QVariant(QString, "Norsk (Nyorsk)"))("polski", QVariant(QString, "Polski"))("portugues", QVariant(QString, "Portugues"))("portugues-brasileiro", QVariant(QString, "Portugues (Brasileiro)"))("romaneste", QVariant(QString, "Romaneste"))("russian", QVariant(QString, "Russian"))("slovak", QVariant(QString, "Slovakscina"))("srpski", QVariant(QString, "Srpski"))("svenska", QVariant(QString, "Svenska"))("tagalog", QVariant(QString, "Tagalog"))("thai", QVariant(QString, "Thai"))("turkce", QVariant(QString, "Turkce"))("ukranian", QVariant(QString, "Ukgranian"))("vlaams", QVariant(QString, "Vlaams"))("wallisertitsch", QVariant(QString, "Wallisertitsch"))("walon", QVariant(QString, "Wallon"))))  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[:0 Warning\] QLayout: Attempting to add QLayout "" to RbUtilQt "RbUtilQtFrm", which already has a layout  
\[utils.cpp:818 Info\] Looking for processes ("iTunes") found QMap()  
\[httpget.cpp:150 Info\] Request finished, status code: 200 QNetworkReply::NoError  
\[httpget.cpp:153 Info\] Data from cache: false  
\[rbutilqt.cpp:268 Info\] network status: ""  
\[playerbuildinfo.cpp:100 Info\] updated: "R:/Temp/RockboxUtility.YyFZgF"  
\[rbsettings.cpp:163 Info\] GET U: "rbutil\_version" "f8d54d0d1e"  
\[rbsettings.cpp:163 Info\] GET U: "show\_changelog" "false"  
\[rbutilqt.cpp:375 Info\] updating current settings  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/bootloadermethod" QVariant(QString, "s5l")  
\[httpget.cpp:84 Info\] setting cache folder to "R:/Temp/rbutil-cache"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/brand" QVariant(QString, "Apple")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipod6g" QVariant(int, 3)  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/name" QVariant(QString, "Ipod Classic (6th gen)")  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[utils.cpp:243 Info\] Volume name of "G:/" is ""  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/playerpic" QVariant(QString, "ipod6g")  
\[rbsettings.cpp:163 Info\] GET U: "cachepath" "R:\\\\Temp"  
\[httpget.h:53 Info\] Global cache set to "R:/Temp"  
\[rbsettings.cpp:163 Info\] GET U: "proxytype" "none"  
\[rbutilqt.cpp:609 Info\] Proxy is QUrl("")  
\[httpget.h:59 Info\] setting global proxy QUrl("")  
\[rbsettings.cpp:163 Info\] GET U: "rbutil\_version" "f8d54d0d1e"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[configure.cpp:567 Info\] available lang files: ("cs", "de", "fi", "fr", "gr", "he", "it", "ja", "nl", "pl", "pt", "pt\_BR", "ru", "zh\_CN", "zh\_TW")  
\[rbsettings.cpp:163 Info\] GET U: "proxy" "[http://:@10.64.0.1:1080](http://10.64.0.1:1080/)"  
\[rbsettings.cpp:163 Info\] GET U: "proxytype" "none"  
\[rbsettings.cpp:163 Info\] GET U: "lang" ""  
\[utils.cpp:678 Info\] Ignored: "C:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "D:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "E:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "F:/" type "exFAT"  
\[utils.cpp:678 Info\] Ignored: "H:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "R:/" type "NTFS"  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[configure.cpp:690 Info\] Mountpoint set to "G:/"  
\[configure.cpp:710 Info\] Mountpoint set to "G:/"  
\[rbsettings.cpp:163 Info\] GET U: "cachepath" "R:\\\\Temp"  
\[rbsettings.cpp:163 Info\] GET U: "cachepath" "R:\\\\Temp"  
\[rbsettings.cpp:163 Info\] GET U: "cachedisable" "false"  
\[rbsettings.cpp:163 Info\] GET U: "cachepath" "R:\\\\Temp"  
\[rbsettings.cpp:163 Info\] GET U: "use\_tts\_corrections" "true"  
\[configure.cpp:341 Info\] setting up devices list  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "\_targets/enabled" QVariant(QStringList, ("archosplayer", "archosrecorder", "archosrecorderv2", "archosfmrecorder", "archosondiosp", "archosondiofm", "iriverh100", "gogearhdd1630", "gogearhdd6330", "iriverh120", "creativezenxfi3", "iriverh300", "xduoox3", "iriverh10\_5gb", "xduoox3ii", "xduoox20", "agptekrocker", "aigoerosq", "aigoerosq.k", "aigoerosq.agptekh3", "aigoerosq.hifiwalkerh2", "aigoerosq.hifiwalkerh2.v13", "aigoerosq.surfansf20", "iriverh10\_5gb.mtp", "iriverh10", "ipod1g2g", "ipod3g", "ipod4g", "ipodcolor", "ipodvideo", "ipod6g", "ipodmini1g", "ipodmini2g", "ipodnano1g", "ipodnano2g", "iaudiox5", "iaudiom5", "iaudiox5.v", "iaudiom3", "gigabeatfx", "sansae200", "sansae200v2", "sansac200", "sansac200v2", "sansafuze", "sansafuzev2", "sansafuzeplus", "sansaclip", "sansaclipv2", "sansaclipplus", "sansaclipzip", "mrobe100", "samsungyh820", "samsungyh920", "samsungyh925", "vibe500", "mpiohd200"))  
\[playerbuildinfo.cpp:268 Info\] T: "archosplayer/brand" QVariant(QString, "Archos")  
\[playerbuildinfo.cpp:268 Info\] T: "archosrecorder/brand" QVariant(QString, "Archos")  
\[playerbuildinfo.cpp:268 Info\] T: "archosrecorderv2/brand" QVariant(QString, "Archos")  
\[playerbuildinfo.cpp:268 Info\] T: "archosfmrecorder/brand" QVariant(QString, "Archos")  
\[playerbuildinfo.cpp:268 Info\] T: "archosondiosp/brand" QVariant(QString, "Archos")  
\[playerbuildinfo.cpp:268 Info\] T: "archosondiofm/brand" QVariant(QString, "Archos")  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh100/brand" QVariant(QString, "Iriver")  
\[playerbuildinfo.cpp:268 Info\] T: "gogearhdd1630/brand" QVariant(QString, "Philips")  
\[playerbuildinfo.cpp:268 Info\] T: "gogearhdd6330/brand" QVariant(QString, "Philips")  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh120/brand" QVariant(QString, "Iriver")  
\[playerbuildinfo.cpp:268 Info\] T: "creativezenxfi3/brand" QVariant(QString, "Creative")  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh300/brand" QVariant(QString, "Iriver")  
\[playerbuildinfo.cpp:268 Info\] T: "xduoox3/brand" QVariant(QString, "xDuoo")  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh10\_5gb/brand" QVariant(QString, "Iriver")  
\[playerbuildinfo.cpp:268 Info\] T: "xduoox3ii/brand" QVariant(QString, "xDuoo")  
\[playerbuildinfo.cpp:268 Info\] T: "xduoox20/brand" QVariant(QString, "xDuoo")  
\[playerbuildinfo.cpp:268 Info\] T: "agptekrocker/brand" QVariant(QString, "AGPTek")  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq/brand" QVariant(QString, "AIGO/EROS")  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.k/brand" QVariant(QString, "AIGO/EROS")  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.agptekh3/brand" QVariant(QString, "AGPTek")  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.hifiwalkerh2/brand" QVariant(QString, "HIFI WALKER")  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.hifiwalkerh2.v13/brand" QVariant(QString, "HIFI WALKER")  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.surfansf20/brand" QVariant(QString, "Surfans")  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh10\_5gb.mtp/brand" QVariant(QString, "Iriver")  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh10/brand" QVariant(QString, "Iriver")  
\[playerbuildinfo.cpp:268 Info\] T: "ipod1g2g/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "ipod3g/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "ipod4g/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "ipodcolor/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "ipodvideo/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "ipodmini1g/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "ipodmini2g/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "ipodnano1g/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "ipodnano2g/brand" QVariant(QString, "Apple")  
\[playerbuildinfo.cpp:268 Info\] T: "iaudiox5/brand" QVariant(QString, "Cowon")  
\[playerbuildinfo.cpp:268 Info\] T: "iaudiom5/brand" QVariant(QString, "Cowon")  
\[playerbuildinfo.cpp:268 Info\] T: "iaudiox5.v/brand" QVariant(QString, "Cowon")  
\[playerbuildinfo.cpp:268 Info\] T: "iaudiom3/brand" QVariant(QString, "Cowon")  
\[playerbuildinfo.cpp:268 Info\] T: "gigabeatfx/brand" QVariant(QString, "Toshiba")  
\[playerbuildinfo.cpp:268 Info\] T: "sansae200/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansae200v2/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansac200/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansac200v2/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansafuze/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansafuzev2/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansafuzeplus/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansaclip/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansaclipv2/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansaclipplus/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "sansaclipzip/brand" QVariant(QString, "Sandisk")  
\[playerbuildinfo.cpp:268 Info\] T: "mrobe100/brand" QVariant(QString, "Olympus")  
\[playerbuildinfo.cpp:268 Info\] T: "samsungyh820/brand" QVariant(QString, "Samsung")  
\[playerbuildinfo.cpp:268 Info\] T: "samsungyh920/brand" QVariant(QString, "Samsung")  
\[playerbuildinfo.cpp:268 Info\] T: "samsungyh925/brand" QVariant(QString, "Samsung")  
\[playerbuildinfo.cpp:268 Info\] T: "vibe500/brand" QVariant(QString, "Packard Bell")  
\[playerbuildinfo.cpp:268 Info\] T: "mpiohd200/brand" QVariant(QString, "MPIO")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "status/agptekrocker" QVariant(int, 2)  
\[playerbuildinfo.cpp:268 Info\] T: "agptekrocker/name" QVariant(QString, "AGPTek Rocker")  
\[configure.cpp:387 Info\] add supported device: "AGPTek" "AGPTek Rocker (Unstable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/aigoerosq.agptekh3" QVariant(int, -1)  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.agptekh3/name" QVariant(QString, "AGPTek H3")  
\[configure.cpp:387 Info\] add supported device: "AGPTek" "AGPTek H3 (Unknown)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/aigoerosq" QVariant(int, 2)  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq/name" QVariant(QString, "AIGO Eros Q")  
\[configure.cpp:387 Info\] add supported device: "AIGO/EROS" "AIGO Eros Q (Unstable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/aigoerosq.k" QVariant(int, -1)  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.k/name" QVariant(QString, "AIGO Eros K")  
\[configure.cpp:387 Info\] add supported device: "AIGO/EROS" "AIGO Eros K (Unknown)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipod1g2g" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipod1g2g/name" QVariant(QString, "Ipod (1st / 2nd gen)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod (1st / 2nd gen) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipod3g" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipod3g/name" QVariant(QString, "Ipod (3rd gen)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod (3rd gen) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipod4g" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipod4g/name" QVariant(QString, "Ipod (4th gen, greyscale)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod (4th gen, greyscale) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipodcolor" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipodcolor/name" QVariant(QString, "Ipod Color / Photo / U2 (4th gen)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod Color / Photo / U2 (4th gen) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipodvideo" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipodvideo/name" QVariant(QString, "Ipod Video (5th gen)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod Video (5th gen) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipod6g" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/name" QVariant(QString, "Ipod Classic (6th gen)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod Classic (6th gen) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipodmini1g" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipodmini1g/name" QVariant(QString, "Ipod Mini (1st gen)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod Mini (1st gen) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipodmini2g" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipodmini2g/name" QVariant(QString, "Ipod Mini (2nd gen)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod Mini (2nd gen) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipodnano1g" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipodnano1g/name" QVariant(QString, "Ipod Nano (1st gen)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod Nano (1st gen) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipodnano2g" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "ipodnano2g/name" QVariant(QString, "Ipod Nano (2nd gen)")  
\[configure.cpp:387 Info\] add supported device: "Apple" "Ipod Nano (2nd gen) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/archosplayer" QVariant(int, 0)  
\[playerbuildinfo.cpp:268 Info\] T: "archosplayer/name" QVariant(QString, "Jukebox Player 6000 / Jukebox Studio 5 / 10 / 20")  
\[configure.cpp:387 Info\] add supported device: "Archos" "Jukebox Player 6000 / Jukebox Studio 5 / 10 / 20 (Stable (Retired))"  
\[playerbuildinfo.cpp:268 Info\] T: "status/archosrecorder" QVariant(int, 0)  
\[playerbuildinfo.cpp:268 Info\] T: "archosrecorder/name" QVariant(QString, "Jukebox Recorder 6 / 10 / 15 / 20")  
\[configure.cpp:387 Info\] add supported device: "Archos" "Jukebox Recorder 6 / 10 / 15 / 20 (Stable (Retired))"  
\[playerbuildinfo.cpp:268 Info\] T: "status/archosrecorderv2" QVariant(int, 0)  
\[playerbuildinfo.cpp:268 Info\] T: "archosrecorderv2/name" QVariant(QString, "Jukebox Recorder v2 (20GB)")  
\[configure.cpp:387 Info\] add supported device: "Archos" "Jukebox Recorder v2 (20GB) (Stable (Retired))"  
\[playerbuildinfo.cpp:268 Info\] T: "status/archosfmrecorder" QVariant(int, 0)  
\[playerbuildinfo.cpp:268 Info\] T: "archosfmrecorder/name" QVariant(QString, "Jukebox Recorder FM")  
\[configure.cpp:387 Info\] add supported device: "Archos" "Jukebox Recorder FM (Stable (Retired))"  
\[playerbuildinfo.cpp:268 Info\] T: "status/archosondiosp" QVariant(int, 0)  
\[playerbuildinfo.cpp:268 Info\] T: "archosondiosp/name" QVariant(QString, "Ondio SP")  
\[configure.cpp:387 Info\] add supported device: "Archos" "Ondio SP (Stable (Retired))"  
\[playerbuildinfo.cpp:268 Info\] T: "status/archosondiofm" QVariant(int, 0)  
\[playerbuildinfo.cpp:268 Info\] T: "archosondiofm/name" QVariant(QString, "Ondio FM")  
\[configure.cpp:387 Info\] add supported device: "Archos" "Ondio FM (Stable (Retired))"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iaudiox5" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "iaudiox5/name" QVariant(QString, "iAudio X5 / X5L")  
\[configure.cpp:387 Info\] add supported device: "Cowon" "iAudio X5 / X5L (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iaudiom5" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "iaudiom5/name" QVariant(QString, "iAudio M5 / M5L")  
\[configure.cpp:387 Info\] add supported device: "Cowon" "iAudio M5 / M5L (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iaudiox5.v" QVariant(int, -1)  
\[playerbuildinfo.cpp:268 Info\] T: "iaudiox5.v/name" QVariant(QString, "iAudio X5V")  
\[configure.cpp:387 Info\] add supported device: "Cowon" "iAudio X5V (Unknown)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iaudiom3" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "iaudiom3/name" QVariant(QString, "iAudio M3 / M3L")  
\[configure.cpp:387 Info\] add supported device: "Cowon" "iAudio M3 / M3L (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/creativezenxfi3" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "creativezenxfi3/name" QVariant(QString, "Creative Zen X-Fi3")  
\[configure.cpp:387 Info\] add supported device: "Creative" "Creative Zen X-Fi3 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/aigoerosq.hifiwalkerh2" QVariant(int, -1)  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.hifiwalkerh2/name" QVariant(QString, "HIFI WALKER H2")  
\[configure.cpp:387 Info\] add supported device: "HIFI WALKER" "HIFI WALKER H2 (Unknown)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/aigoerosq.hifiwalkerh2.v13" QVariant(int, -1)  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.hifiwalkerh2.v13/name" QVariant(QString, "HIFI WALKER H2 (v1.3+)")  
\[configure.cpp:387 Info\] add supported device: "HIFI WALKER" "HIFI WALKER H2 (v1.3+) (Unknown)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iriverh100" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh100/name" QVariant(QString, "iHP100 / iHP110")  
\[configure.cpp:387 Info\] add supported device: "Iriver" "iHP100 / iHP110 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iriverh120" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh120/name" QVariant(QString, "iHP120 / iHP140 / H120 / H140")  
\[configure.cpp:387 Info\] add supported device: "Iriver" "iHP120 / iHP140 / H120 / H140 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iriverh300" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh300/name" QVariant(QString, "H320 / H340")  
\[configure.cpp:387 Info\] add supported device: "Iriver" "H320 / H340 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iriverh10\_5gb" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh10\_5gb/name" QVariant(QString, "H10 (5 / 6GB) UMS")  
\[configure.cpp:387 Info\] add supported device: "Iriver" "H10 (5 / 6GB) UMS (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iriverh10\_5gb.mtp" QVariant(int, -1)  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh10\_5gb.mtp/name" QVariant(QString, "H10 (5 / 6GB) MTP")  
\[configure.cpp:387 Info\] add supported device: "Iriver" "H10 (5 / 6GB) MTP (Unknown)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/iriverh10" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "iriverh10/name" QVariant(QString, "H10 (20GB)")  
\[configure.cpp:387 Info\] add supported device: "Iriver" "H10 (20GB) (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/mpiohd200" QVariant(int, 2)  
\[playerbuildinfo.cpp:268 Info\] T: "mpiohd200/name" QVariant(QString, "MPIO HD200")  
\[configure.cpp:387 Info\] add supported device: "MPIO" "MPIO HD200 (Unstable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/mrobe100" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "mrobe100/name" QVariant(QString, "m:robe100")  
\[configure.cpp:387 Info\] add supported device: "Olympus" "m:robe100 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/vibe500" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "vibe500/name" QVariant(QString, "Vibe 500")  
\[configure.cpp:387 Info\] add supported device: "Packard Bell" "Vibe 500 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/gogearhdd1630" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "gogearhdd1630/name" QVariant(QString, "Philips GoGear HDD16x0 & HDD18x0 Series")  
\[configure.cpp:387 Info\] add supported device: "Philips" "Philips GoGear HDD16x0 & HDD18x0 Series (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/gogearhdd6330" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "gogearhdd6330/name" QVariant(QString, "Philips GoGear HDD63x0 Series")  
\[configure.cpp:387 Info\] add supported device: "Philips" "Philips GoGear HDD63x0 Series (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/samsungyh820" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "samsungyh820/name" QVariant(QString, "YH-820")  
\[configure.cpp:387 Info\] add supported device: "Samsung" "YH-820 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/samsungyh920" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "samsungyh920/name" QVariant(QString, "YH-920")  
\[configure.cpp:387 Info\] add supported device: "Samsung" "YH-920 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/samsungyh925" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "samsungyh925/name" QVariant(QString, "YH-925")  
\[configure.cpp:387 Info\] add supported device: "Samsung" "YH-925 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansae200" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansae200/name" QVariant(QString, "Sansa e200v1 series")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa e200v1 series (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansae200v2" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansae200v2/name" QVariant(QString, "Sansa e200v2 series")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa e200v2 series (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansac200" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansac200/name" QVariant(QString, "Sansa c200v1 series")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa c200v1 series (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansac200v2" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansac200v2/name" QVariant(QString, "Sansa c200v2 series")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa c200v2 series (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansafuze" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansafuze/name" QVariant(QString, "Sansa Fuze")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa Fuze (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansafuzev2" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansafuzev2/name" QVariant(QString, "Sansa Fuze V2")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa Fuze V2 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansafuzeplus" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansafuzeplus/name" QVariant(QString, "Sansa Fuze+")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa Fuze+ (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansaclip" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansaclip/name" QVariant(QString, "Sansa Clip")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa Clip (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansaclipv2" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansaclipv2/name" QVariant(QString, "Sansa Clip V2")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa Clip V2 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansaclipplus" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansaclipplus/name" QVariant(QString, "Sansa Clip+")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa Clip+ (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/sansaclipzip" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "sansaclipzip/name" QVariant(QString, "Sansa Clip Zip")  
\[configure.cpp:387 Info\] add supported device: "Sandisk" "Sansa Clip Zip (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/aigoerosq.surfansf20" QVariant(int, -1)  
\[playerbuildinfo.cpp:268 Info\] T: "aigoerosq.surfansf20/name" QVariant(QString, "Surfans F20")  
\[configure.cpp:387 Info\] add supported device: "Surfans" "Surfans F20 (Unknown)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/gigabeatfx" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "gigabeatfx/name" QVariant(QString, "Gigabeat F / X")  
\[configure.cpp:387 Info\] add supported device: "Toshiba" "Gigabeat F / X (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/xduoox3" QVariant(int, 3)  
\[playerbuildinfo.cpp:268 Info\] T: "xduoox3/name" QVariant(QString, "xDuoo X3")  
\[configure.cpp:387 Info\] add supported device: "xDuoo" "xDuoo X3 (Stable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/xduoox3ii" QVariant(int, 2)  
\[playerbuildinfo.cpp:268 Info\] T: "xduoox3ii/name" QVariant(QString, "xDuoo X3 II")  
\[configure.cpp:387 Info\] add supported device: "xDuoo" "xDuoo X3 II (Unstable)"  
\[playerbuildinfo.cpp:268 Info\] T: "status/xduoox20" QVariant(int, 2)  
\[playerbuildinfo.cpp:268 Info\] T: "xduoox20/name" QVariant(QString, "xDuoo X20")  
\[configure.cpp:387 Info\] add supported device: "xDuoo" "xDuoo X20 (Unstable)"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/encoder" QVariant(QString, "rbspeex")  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/encoder" QVariant(QString, "rbspeex")  
\[rbsettings.cpp:163 Info\] GET U: "rbspeex/quality" ""  
\[rbsettings.cpp:163 Info\] GET U: "rbspeex/complexity" ""  
\[rbsettings.cpp:163 Info\] GET U: "rbspeex/volume" ""  
\[rbsettings.cpp:163 Info\] GET U: "rbspeex/narrowband" ""  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/encoder" QVariant(QString, "rbspeex")  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/encoder" QVariant(QString, "rbspeex")  
\[rbsettings.cpp:163 Info\] GET U: "rbspeex/quality" ""  
\[rbsettings.cpp:163 Info\] GET U: "rbspeex/complexity" ""  
\[rbsettings.cpp:163 Info\] GET U: "rbspeex/volume" ""  
\[rbsettings.cpp:163 Info\] GET U: "rbspeex/narrowband" ""  
\[rbsettings.cpp:163 Info\] GET U: "flite/path" ""  
\[utils.cpp:336 Info\] system path: ("C:\\\\Program Files (x86)\\\\Common Files\\\\Intel\\\\Shared Libraries\\\\redist\\\\intel64\\\\compiler", "C:\\\\Python310\\\\Scripts\\\\", "C:\\\\Python310\\\\", "C:\\\\Python39\\\\Scripts\\\\", "C:\\\\Python39\\\\", "C:\\\\Windows\\\\system32", "C:\\\\Windows", "C:\\\\Windows\\\\System32\\\\Wbem", "C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\", "C:\\\\Windows\\\\System32\\\\OpenSSH\\\\", "C:\\\\ProgramData\\\\chocolatey\\\\bin", "C:\\\\Program Files (x86)\\\\gnupg\\\\bin", "C:\\\\ProgramData\\\\chocolatey\\\\lib\\\\mpv.install\\\\tools", "C:\\\\Program Files (x86)\\\\QuickTime\\\\QTSystem\\\\", "C:\\\\Program Files\\\\gs\\\\gs9.56.1\\\\bin", "C:\\\\Program Files\\\\nodejs\\\\", "C:\\\\Program Files\\\\Mullvad VPN\\\\resources", "C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Microsoft\\\\WindowsApps", "C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\atom\\\\bin", "C:\\\\Users\\\\Administrator\\\\AppData\\\\Roaming\\\\npm")  
\[utils.cpp:355 Info\] findExecutable: could not find "flite"  
\[rbsettings.cpp:163 Info\] GET U: "flite/options" ""  
\[rbsettings.cpp:163 Info\] GET U: "tts" "sapi"  
\[rbsettings.cpp:163 Info\] GET U: "sapi/voice" ""  
\[rbsettings.cpp:163 Info\] GET U: "sapi/voice" ""  
\[rbsettings.cpp:163 Info\] GET U: "mountpoint" "G:/"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "ipod6g/bootloadermethod" QVariant(QString, "s5l")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "status/ipod6g" QVariant(int, 3)  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:201 Info\] B: "release/ipod6g" QVariant(QString, "3.15")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:201 Info\] B: "release/font\_url" QVariant(QString, "[https://download.rockbox.org/release/3.15/rockbox-fonts-3.15.zip](https://download.rockbox.org/release/3.15/rockbox-fonts-3.15.zip)")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:201 Info\] B: "release/manual\_url" QVariant(QString, "[https://download.rockbox.org/release/3.15/rockbox-ipod6g-3.15%FORMAT%](https://download.rockbox.org/release/3.15/rockbox-ipod6g-3.15%FORMAT%)")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "\_languages/list" QVariant(QVariantMap, QMap(("afrikaans", QVariant(QString, "Afrikaans"))("arabic", QVariant(QString, "Arabic"))("basque", QVariant(QString, "Basque"))("bulgarian", QVariant(QString, "Bulgarian"))("catala", QVariant(QString, "Catala"))("chinese-simp", QVariant(QString, "Chinese (simplified)"))("chinese-trad", QVariant(QString, "Chinese (traditional)"))("czech", QVariant(QString, "Czech"))("dansk", QVariant(QString, "Dansk"))("deutsch", QVariant(QString, "Deutsch"))("eesti", QVariant(QString, "Eesti"))("english", QVariant(QString, "English (UK)"))("english-us", QVariant(QString, "English (US)"))("espanol", QVariant(QString, "Espanol"))("esperanto", QVariant(QString, "Esperanto"))("finnish", QVariant(QString, "Finnish"))("francais", QVariant(QString, "Francais"))("galego", QVariant(QString, "Galego"))("greek", QVariant(QString, "Greek"))("hebrew", QVariant(QString, "Hebrew"))("hindi", QVariant(QString, "Hindi"))("hrvatski", QVariant(QString, "Hrvatski"))("islenska", QVariant(QString, "Islenska"))("italiano", QVariant(QString, "Italiano"))("japanese", QVariant(QString, "Japanese"))("korean", QVariant(QString, "Korean"))("latviesu", QVariant(QString, "Latviesu"))("lietuviu", QVariant(QString, "Lietuviu"))("magyar", QVariant(QString, "Magyar"))("nederlands", QVariant(QString, "Netherlands"))("norsk", QVariant(QString, "Norsk"))("norsk-nynorsk", QVariant(QString, "Norsk (Nyorsk)"))("polski", QVariant(QString, "Polski"))("portugues", QVariant(QString, "Portugues"))("portugues-brasileiro", QVariant(QString, "Portugues (Brasileiro)"))("romaneste", QVariant(QString, "Romaneste"))("russian", QVariant(QString, "Russian"))("slovak", QVariant(QString, "Slovakscina"))("srpski", QVariant(QString, "Srpski"))("svenska", QVariant(QString, "Svenska"))("tagalog", QVariant(QString, "Tagalog"))("thai", QVariant(QString, "Thai"))("turkce", QVariant(QString, "Turkce"))("ukranian", QVariant(QString, "Ukgranian"))("vlaams", QVariant(QString, "Vlaams"))("wallisertitsch", QVariant(QString, "Wallisertitsch"))("walon", QVariant(QString, "Wallon"))))  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:201 Info\] B: "voices/3.15" QVariant(QString, "english")  
\[selectiveinstallwidget.cpp:187 Info\] available voices: adding "english"  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:151 Info\] "release-candidate/ipod6g" (version invalid)  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:201 Info\] B: "daily/ipod6g" QVariant(QString, "20221112")  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:201 Info\] B: "development/ipod6g" QVariant(QString, "dd1fbd51fc")  
\[rbsettings.cpp:163 Info\] GET U: "build" ""  
\[rockboxinfo.cpp:31 Info\] Getting version info from rockbox-info.txt  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:268 Info\] T: "\_languages/list" QVariant(QVariantMap, QMap(("afrikaans", QVariant(QString, "Afrikaans"))("arabic", QVariant(QString, "Arabic"))("basque", QVariant(QString, "Basque"))("bulgarian", QVariant(QString, "Bulgarian"))("catala", QVariant(QString, "Catala"))("chinese-simp", QVariant(QString, "Chinese (simplified)"))("chinese-trad", QVariant(QString, "Chinese (traditional)"))("czech", QVariant(QString, "Czech"))("dansk", QVariant(QString, "Dansk"))("deutsch", QVariant(QString, "Deutsch"))("eesti", QVariant(QString, "Eesti"))("english", QVariant(QString, "English (UK)"))("english-us", QVariant(QString, "English (US)"))("espanol", QVariant(QString, "Espanol"))("esperanto", QVariant(QString, "Esperanto"))("finnish", QVariant(QString, "Finnish"))("francais", QVariant(QString, "Francais"))("galego", QVariant(QString, "Galego"))("greek", QVariant(QString, "Greek"))("hebrew", QVariant(QString, "Hebrew"))("hindi", QVariant(QString, "Hindi"))("hrvatski", QVariant(QString, "Hrvatski"))("islenska", QVariant(QString, "Islenska"))("italiano", QVariant(QString, "Italiano"))("japanese", QVariant(QString, "Japanese"))("korean", QVariant(QString, "Korean"))("latviesu", QVariant(QString, "Latviesu"))("lietuviu", QVariant(QString, "Lietuviu"))("magyar", QVariant(QString, "Magyar"))("nederlands", QVariant(QString, "Netherlands"))("norsk", QVariant(QString, "Norsk"))("norsk-nynorsk", QVariant(QString, "Norsk (Nyorsk)"))("polski", QVariant(QString, "Polski"))("portugues", QVariant(QString, "Portugues"))("portugues-brasileiro", QVariant(QString, "Portugues (Brasileiro)"))("romaneste", QVariant(QString, "Romaneste"))("russian", QVariant(QString, "Russian"))("slovak", QVariant(QString, "Slovakscina"))("srpski", QVariant(QString, "Srpski"))("svenska", QVariant(QString, "Svenska"))("tagalog", QVariant(QString, "Tagalog"))("thai", QVariant(QString, "Thai"))("turkce", QVariant(QString, "Turkce"))("ukranian", QVariant(QString, "Ukgranian"))("vlaams", QVariant(QString, "Vlaams"))("wallisertitsch", QVariant(QString, "Wallisertitsch"))("walon", QVariant(QString, "Wallon"))))  
\[rbsettings.cpp:163 Info\] GET U: "platform" "ipod6g"  
\[playerbuildinfo.cpp:201 Info\] B: "voices/3.15" QVariant(QString, "english")  
\[selectiveinstallwidget.cpp:187 Info\] available voices: adding "english"  
\[playerbuildinfo.cpp:326 Info\] U: rbutil\_url QVariant(QString, "[https://download.rockbox.org/rbutil/](https://download.rockbox.org/rbutil/)")  
\[httpget.cpp:84 Info\] setting cache folder to "R:/Temp/rbutil-cache"  
\[httpget.cpp:257 Info\] Get URI "[https://download.rockbox.org/rbutil/win32/](https://download.rockbox.org/rbutil/win32/)"  
\[httpget.cpp:202 Info\] Request started  
\[httpget.cpp:150 Info\] Request finished, status code: 200 QNetworkReply::NoError  
\[httpget.cpp:153 Info\] Data from cache: false  
\[rbutilqt.cpp:663 Info\] Checking for update  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "Parent Directory"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.2.11.zip"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.2.12.zip"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.2.13.zip"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.2.14.zip"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.3.0.zip"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.3.1.zip"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.4.0.zip"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.4.1.zip"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.5.0.zip"  
\[utils.cpp:422 Info\] comparing version strings "1.5.1" and "RockboxUtility-v1.5.1.zip"  
\[utils.cpp:678 Info\] Ignored: "C:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "D:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "E:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "F:/" type "exFAT"  
\[utils.cpp:678 Info\] Ignored: "H:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "R:/" type "NTFS"  
\[configure.cpp:710 Info\] Mountpoint set to "G:/"  
\[utils.cpp:678 Info\] Ignored: "C:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "D:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "E:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "F:/" type "exFAT"  
\[utils.cpp:678 Info\] Ignored: "H:/" type "NTFS"  
\[utils.cpp:678 Info\] Ignored: "R:/" type "NTFS"  
\[configure.cpp:710 Info\] Mountpoint set to "G:/"  
\[configure.cpp:239 Info\] aborted.  
\[rbsettings.cpp:163 Info\] GET U: "cachepath" "R:\\\\Temp"  
\[systrace.cpp:93 Info\] saving trace at "2022-11-12T10:54:32"

![](https://forums.rockbox.org/Themes/Classic/images/ip.gif) Logged

---

As you can find close to the end of the log your player is formatted as exFAT. Rockbox does not support this, and consequently Rockbox Utility filters that drive out. You need to format your player wit FAT32 filesystem.

Relevant line in the log is this:  
\[utils.cpp:678 Info\] Ignored: "F:/" type "exFAT"

![](https://forums.rockbox.org/Themes/Classic/images/ip.gif) Logged

---

Unfortunately, I am unable to format the iPod to FAT32.  
I can only choose exFAT or NTFS for it.

![](https://forums.rockbox.org/Themes/Classic/images/ip.gif) Logged

---

You could use iTunes to restore it to FAT32.

![](https://forums.rockbox.org/Themes/Classic/images/ip.gif) Logged

---

I just installed iTunes but it isn't detecting the iPod even though I plugged it in.

---

> Unfortunately, I am unable to format the iPod to FAT32.  
> I can only choose exFAT or NTFS for it.  

Well, you can format to FAT32, just not with the tools Windows ships. Simply using something Windows offers won't do the trick, the Apple firmware also won't work if the Ipod is formatted to exFAT -- despite the name exFAT and FAT32 are completely different filesystems. The fact that your Ipod is currently exFAT might be the reason why Itunes isn't detecting the Ipod (though I never tried this so this is just a guess.)

There are a couple of tools around that allow you to do the formatting. If you have access to a Linux machine the easiest is probably using its mkfs.vfat -F32. On Windows you need a 3rd party tool. A quick Google search f.e. finds this: [https://www.howtogeek.com/316977/how-to-format-usb-drives-larger-than-32gb-with-fat32-on-windows/](https://www.howtogeek.com/316977/how-to-format-usb-drives-larger-than-32gb-with-fat32-on-windows/)

---

> I just installed iTunes but it isn't detecting the iPod even though I plugged it in.  

Is that the case even if you put it into [[DFU mode ]](hold down centre-button and menu button)?

For formatting in [[FAT32]] I tend to use AOMEII (which is free, I think).
