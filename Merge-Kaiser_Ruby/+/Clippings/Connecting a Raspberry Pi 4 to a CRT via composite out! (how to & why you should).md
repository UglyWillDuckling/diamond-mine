---
source: "https://www.youtube.com/watch?v=9m8ScViTZi0"
published: 2022-04-25
created: 2026-07-09
tags:
---
![](https://www.youtube.com/watch?v=9m8ScViTZi0)

A few troubleshooting tips:  
  
If you're getting no video through the yellow composite try plugging the red or white into the video input on your tv. Depending on the cables the signal may be sent down one of the other colors instead.  
  
You can also try enabling composite video out in raspiconfig advanced options.  
  
If you get a video signal but the picture has black borders adjust the overscan setting in retropie setup and you can also adjust the overscan values manually in your boot config file. Try adjusting the values in small increments and rebooting until you get the picture scaled the way you want it.  
  
Set a 4:3 CEA resolution in retropie, CEA is for TV modes. the video will be interlaced on a standard crt unless it supports progressive scan. You can set the resolution to 240p manually with some editing and adjusting but I leave it at 640×480 60htz.  
  
Thanks everyone for watching if I can help get you up and running I'll always try but I'm no expert and there's alot of different factors when messing with retropie. Anyway here's hoping you the best, keep it classy and game on.  
  
In this episode I'm talking Pi, enabling composite out functionality, and why a CRT might be a perfect companion for this awesome little powerhouse! 📹 👍  
  
TRRS to RCA cables  
  
https://www.amazon.com/gp/aw/d/B06W2JXLSK?psc=1&ref=ppx\_pop\_mob\_b\_asin\_title  
  
how to enable 240p  
  
https://www.reddit.com/r/RetroPie/comments/q91tlj/pi4\_35mm\_to\_rca\_composite\_on\_a\_crt\_240p\_now/  
  
#raspberrypi #retrogaming #pi4 #crt #retropie #emulation #emulationstation #howto #gameplay #eldenring

## Transcript

**0:03** · \[Music\]

**0:23** · hello and welcome this is video thumb and today we're going to be doing something a little different taking a look at how you can use your raspberry pi 4 with the crt to achieve some wonderfully authentic retro results it's modern meets retro which is exactly the kind of thing i get excited about and it's actually really easy to do

**0:42** · i wanted to make this video for anyone like me who was pretty new to the pie scene picked up the four got your retropie build up and running and loved it so much you wondered if a proper composite out signal was possible to a crt because crts are awesome and why would you not want to do that well you're here so you do so let's get into it

**1:06** · the raspberry pi itself operates in an open source environment running linux with an awesome dedicated community fueling its vast and versatile emulation capabilities what this means in short is that this little board is powerful but taking full advantage of it is going to take a little effort and while there's a great many people that understand and thrive in this operating environment it's been all new to me and a lot of fun to mess around with a lot of features and toggles can be found within retropie's menus once your image is up and running but know-how is

**1:38** · the key to unlocking its full potential and i wanted to share my findings here as the results are worth the setup upon first inspection as far as audio and video outs go you'll find two micro hdmi ports around back of the pi with a 3.5 millimeter headphone jack

**1:55** · so if you're like me your first thought upon inspection was hmm well maybe i can just get an hdmi to rca converter to get this working on a crt and as a matter of fact you can and it works all right in a quick and dirty sort of way your image is going to be fine if you're just looking to get a familiar retro image on the screen but i found text to be very hard to read and overall things looking kind of squished and just off

**2:21** · you are after all using a converter to put that hdmi digital signal into an analog box and the results aren't going to be perfect it works okay but is it the best way to pull a signal from your pi to a crt display well as it turns out no because this thing has an awesome secret and it lies right there in that inconspicuous 3.5 millimeter audio jack

**2:43** · because the pi 4 actually supports composite out functionality through this 4-pole jack using the proper cables this method of connectivity is referred to as trrs for tip ring ring sleeve and can be identified by counting the number of black rings on your connector trrs should have three instead of the usual two you'll find on most headphone plugs this connector can carry your two stereo audio channels a video signal and a

**3:08** · ground now to my understanding due to the way these signals may be carried and the way the board is wired not all cables may work as it's pretty specific as to how these signals are being output but a link to the cables i found that work great will be in the description below so once you've got your cables it's not just plug and play as you might think

**3:29** · the pi 4 has the composite out functionality built in like on older models but is disabled by default as apparently running the system this way changes your clock cycles as composite mode requires some lower frequencies and that may cause some loss of system performance as far as my play time so far i haven't

**3:45** · noticed any big hits to system performance or slow down but your experience may vary so to enable this functionality is actually pretty simple you're just going to edit your boot.config file which you can do by plugging your sd card into a computer and editing it there or i find much easier just exiting out of retropie to a command line with a keyboard plugged in and entering sudo nano forward slash boot forward slash

**4:12** · config.tx once you're inside your boot config file you're just going to go down and add the line enable underscore tv out equals one be sure to save your new file and exit the system will then need to be rebooted for the change to take effect

**4:31** · also if you find the sound to be a little quiet through the 3.5 jack you can exit back to that command line and enter the following \[Music\] also mixer press enter hit f2 then select the second option and from here using the arrow keys you can adjust your volume output however you like and exit \[Music\]

**4:59** · now you should be in business with some gloriously sharp pixels via your native composite out signal the difference between using this and a converter is honestly night and day in person it may be hard to show here but once you get the proper output this way it just feels right it should also be said if you weren't already your display should be set to a 4x3 aspect ratio resolution which you can find in retropie's menu by accessing

**5:24** · raspy config and then display options set a specific resolution i'm going with 640x480 at 60hz as this is an ntsc display and this looks and works great for me there are ways you can downscale even further if you really want to achieve the absolute most retro results possible

**5:42** · forcing the system into a 240p resolution and i'll leave a link to those instructions down below i decided 640x480 was just fine for me but very cool the people have figured this out and it's there if you want to go down that road \[Music\] so now after all is said and done you can kick back with your favorite games and all of their phenomenal phosphor flashing 4x3 scanline blow lag pixel

**6:06** · prominent intended greatness and while using the pi on an hdtv also makes for an amazing experience combing through classics and a crt just feels right a lot of that proper feel comes from the crt specific advantages over lcd

**6:21** · especially in viewing its overall clarity and motion crt phosphors can change to almost any color instantly and due to the way light modulation is handled these phosphors have a much faster and more pleasing decay than lcd which basically means much less visual frame persistence the way lcds add processing on top of their sample and hold method of visual delivery means images in motion tend to appear a lot more smeared than the incredibly crisp and smooth motion you find on crt displays

**6:50** · that lcd processing also of course means much more input lag as opposed to the smooth delivery you can only get from a crt \[Music\] in summary crts are awesome and playing this way is taking it back to the way all of the titles of pie can play were meant to be played not to mention it's just a really simple and clean way to get an awesome retro setup going in your game room it's reasonably priced and an absolute doably diy retro project you can get into