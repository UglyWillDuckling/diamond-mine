---
source: "https://www.youtube.com/watch?v=S2hOar34miI"
published: 2026-07-05
created: 2026-07-08
tags:
---
![](https://www.youtube.com/watch?v=S2hOar34miI)

This video is an update on what's been added to 240-MP since my last video here: https://youtu.be/r-gylGDoELY  
  
240-MP is a lightweight, open-source media player built for the Raspberry Pi and optimized for CRT TVs. It features a nostalgic, distraction-free VCR-style interface with support for local files, Plex, Jellyfin and Youtube playback.  
  
On a CRT the output resolution is 480i/576i depending on the config you use.  
  
I was looking for a really simple, distraction-free way to watch movies and TV shows on a CRT TV, so I made 240-MP to do just that. It's open-source, completely free, and over the last few weeks a community of awesome people have also started contributing ideas and building features.  
  
So in this video I walk through the additional things we've made together...  
  
Chapters:  
00:00 Intro  
00:21 Jellyfin Module  
02:51 YouTube Module  
06:48 Plex Module  
08:21 Local Files Module  
10:33 Ambient Mode Module  
11:50 Color Schemes  
12:29 Start On Module Setting  
12:59 Auto Crop Setting  
13:33 Media Key Support  
14:10 Gamepad Support  
14:45 Outro  
  
References:  
Install on a Raspberry Pi: https://github.com/anthonycaccese/240-MP/blob/main/INSTALL.md#on-a-raspberry-pi  
240-MP Wiki: https://github.com/anthonycaccese/240-MP/wiki  
How to Contribute: https://github.com/anthonycaccese/240-MP/blob/main/CONTRIBUTING.md  
  
Credits:  
Music by Karl Casey @ White Bat Audio  
\- Arcadia: https://www.youtube.com/watch?v=jJAEy-fvVIs  
\- Atlantis: https://www.youtube.com/watch?v=4TQz4apX7dk  
\- Sunshine: https://www.youtube.com/watch?v=Ye7921KfiEU  
\- Impala: https://www.youtube.com/watch?v=f\_F\_67DRrhE  
  
#RaspberryPi #CRT #jellyfin #RetroTech #OpenSource #VCR #CRTTV #VintageTech

## Transcript

### Intro

**0:02** · So I recently made an app called 240MP that I could run on a Raspberry Pi to playback video content on a CRT.

**0:12** · And I made a video going over the details of how all that works that I'll link in the description below.

**0:16** · In this video we're simply going to walk through the updates that have been made since then.

### Jellyfin Module

**0:22** · So 240MP now has a Jellyfin module.

**0:25** · And this is huge credit to a user named RP2 who did the initial work to build this module.

**0:29** · out. It was really awesome to collaborate with them. Ultimately we have now a Jellyfin module that works like a pretty full-featured jellyfin client. So if I go into Jellyfin here you're going to see it's displays continue watching which is going to show the things that I have to continue watching on my server. Next up and collection support as well. What's cool about collections is it supports multi-layers as well. So if I go into the alien collection here you're going to movies and series. If I go to movies it's going to show each movie and if I go to series it's going to show these series.

**1:05** · And you could also add things like episodes or even other collections and they'll always nest down and show the full list. Then you could also just browse your library here so if I were to click on movies it's going to show me my full library and allow it to browse by letter. And then TV shows essentially is TV show libraries so for as many as you have it's going to display them here in this list. So in addition to that, it supports selecting a preferred subtitle and audio track before playing starting a movie.

**1:33** · It also references your server's subtitle mode to pull in your correct subtitle preferences and uses that by default. And it allows you to do video quality selection as well. So if I go back into settings here, I could choose the libraries that I want to return just like Plex. I could set my video quality.

**1:55** · Direct play is going to pull directly from the server.

**1:58** · Unlike Raspberry Pi 3, you might want to put transcoding on here.

**2:03** · Resume playback, you have the option to set that to ask you to resume or always resume.

**2:09** · And then autoplay next episode works very similar to Plex, in that if you have this turned on, at the end of a given episode, it's going to autoplay into the next episode if this is turned on.

**2:20** · And then yes, signing out will essentially delete your credentials, which I'll do to show you how that works.

**2:25** · Now if I go back into the Jellyfin module, you could see here, it basically asked me to quick connect.

**2:31** · Now out of the gate, the Jellyfin module only supports a single server and a single user.

**2:37** · If you have a use case where you need to support multi-user or multi-server, just let us know, and then we'll look to add that in the future as well.

**2:44** · So yeah, Jellyfin modules in place.

**2:46** · Again, huge thanks to RP2 for this work.

**2:48** · Really happy to get this up into 240MP.

### YouTube Module

**2:51** · So I just added a simple YouTube module to 240MP, and it basically allows you to browse and watch the latest videos from a curated list of YouTube channels that you supply.

**3:01** · So it doesn't require any authentication.

**3:03** · All you have to do is get a list of channel IDs that we want to view in the module, put them into a text file, and then it'll create this interface for you.

**3:12** · So I have a link in the description below with the wiki that points to all the details to how to do that.

**3:17** · Once you have it set up, ultimately your subscriptions view here is going to show a list of your latest videos from all the channels you're following.

**3:25** · The channels list is going to show a list of all your channels so you can browse them by letter and then go into a specific channel to see its latest videos.

**3:35** · And then watch later is something where you can on device here choose to save a video for later.

**3:41** · So for example, if I wanted to watch the Spyro Dragon Recon from video game as a Tarek later, I can simply press right on the controller here, save to watch later, and then it's gonna be in my watch later list here.

**3:55** · So yeah, it works pretty simply at the end of the day.

**3:57** · It's a nice simple way to browse YouTube on a CRT.

**4:01** · So let's start watching a video from Techweeb, who's an awesome YouTube creator here.

**4:05** · And this is a really cool video.

**4:06** · So I'm gonna start this up, get a nice little loading screen.

**4:09** · At this point, it's basically hitting YouTube to bring the stream in.

**4:14** · And once the stream is ready, then basically you're watching a YouTube video on your CRT.

**4:20** · All right, so yeah, and you can fast forward, you can crop it, all the same things you could do in the other modules for playback.

**4:28** · And what's cool is when you press stop here, it'll also save your place.

**4:32** · So if I click to play this again, it's gonna give me the option to resume.

**4:37** · And then obviously gonna load here and then give it a second.

**4:40** · This takes a little bit of time because it's like streaming the video from YouTube itself.

**4:45** · But once it's up and running, you'll basically be exactly at where you were when you left off.

**4:51** · So yeah, that's the YouTube module.

**4:53** · Pretty straightforward at the end of the day.

**4:55** · In addition to saving things to watch later, it also keeps a history of the things you watched as well.

**5:00** · So in this case, I just watched that video.

**5:02** · So it knows that I, you know, watched that video.

**5:07** · What's cool about both watch later and history is that they're local to the device only.

**5:11** · So basically it's a file on your 240MP device.

**5:16** · So it's not shared with any external services.

**5:18** · It's only local to the device and they're very easily removed as well.

**5:22** · So if you go into the YouTube module here, settings, you have the option to delete your watch later history as well as your history.

**5:29** · And let's talk about some of the other settings.

**5:32** · First is playback resolution.

**5:34** · My recommendation is to try to keep this on 4DP, especially if you're using this on a Raspberry Pi.

**5:39** · It'll take a little bit longer to stream the content in, but when it does, it's going to stream a content that's like more easily played back on a Raspberry Pi.

**5:48** · But if you wanted to, you could bump it up to 720 or even 1080p, depending on the device you're running this on.

**5:55** · But by default, it's set to 4DP.

**5:58** · Then Resume Playback works just like in the other modules.

**6:01** · It gives you the option to ask or always.

**6:04** · If it's set to ask, then when you start to play back a video, it's going to ask you if you want to resume from the place where you left off or start from the beginning.

**6:12** · If you have a set to always, it's always going to resume from the place you left last left off.

**6:16** · And then the last setting here is an option to display shorts or not.

**6:20** · By default, this is turned on, but if you didn't want to display shorts in your lists at all, you could turn it off and then it'll only display videos that are not shorts.

**6:29** · So yeah, it's a pretty simple module at the end of the day.

**6:32** · It's super nice.

**6:33** · basically pull up a you know a list of my favorite channels on YouTube and basically play back YouTube content directly on my CRT now. Rock and roll. If you have any ideas or things you'd like to add to this module let us know and yeah looking forward to you trying out. Alright let's talk about some of the updates to the Plex module. First is a cool setting from Team McElroy to allow you to switch servers directly from the main screen here. So if you just press right. You'll basically get to a list of servers that you have and you can then select the new one and then get right back to where you were to start browsing your library.

### Plex Module

**7:09** · Next let's go back to settings and there's going to be a new setting here called "Auto Play Next Episode." Now this feature was built by Biddleman, so huge thanks to them. And essentially what this allows you to do is when you're watching a given episode with this turned on, it'll try to auto play the next episode from that season.

**7:29** · Next there's another really cool quality of life feature that was added by T.Backelroy.

**7:33** · If you go into the Plex module now and then click on anything to start playback, you'll see now there's like a new loading screen here.

**7:43** · So basically if your server is starting up it gives you some space to essentially see that the video is loading and not being paused, which just makes it nice and smooth at the end of the day.

**7:56** · Team McElroy and SN Canard also added an option to playback live TV if you have a TV tuner set up on your Plex library.

**8:06** · I don't have one of those so I can't show it here but it is awesome.

**8:09** · I'll add a link to the PR in the description below that shows how it works along with some testing from both of them as well.

**8:16** · So huge thanks to Team McElroy and SN Canard for that work.

### Local Files Module

**8:21** · The local files module has had a bunch of great updates as well.

**8:25** · First is an option called shuffle playback.

**8:28** · And this works with playlist so that if you have a playlist being played, you can choose to shuffle the contents of that playlist in a random order.

**8:36** · And this can be used in combination with loop playback to create these randomly looping playlists that play forever until you stop them.

**8:43** · One cool example would be to create almost like a faux MTV music video playlist, have that on shuffle, and then just loop it.

**8:50** · and they have music videos on your TV forever.

**8:53** · Next is a contribution from a user named Dan Hunsaker.

**8:57** · They built the ability to auto show subtitles and define your subtitle language preference.

**9:03** · And these two features essentially allow local files to default to displaying your preferred subtitle when a video loads, so it's really cool.

**9:11** · I'll put all the details in the description below for how to turn this on and what it does.

**9:15** · A huge thanks to Dan Hunsaker for building this out.

**9:18** · It's an awesome addition.

**9:20** · Next, the last setting here points to a new feature of local files, which is the ability to play back image files.

**9:27** · Now this was inspired by a user asking for a feature to display almost like a kiosk mode at their local movie theater.

**9:34** · And that kiosk would display both videos and photos mixed together in a playlist.

**9:40** · And this image duration essentially allows you to set how long images can be displayed when you're doing that type of use case.

**9:47** · So if I go back into local files here and then click on Photos, I have an example.

**9:52** · I basically built a playlist here that includes all of these files.

**9:56** · And if I click Play All here, it's gonna start from the beginning.

**10:01** · The first video, or the first item in this playlist is Ever Long by Foo Fighters.

**10:06** · But if I go Next here, you can see it picks up an image.

**10:11** · And then it's gonna basically move to the next image automatically, and kinda do this on a loop.

**10:17** · And you'll see the next thing here I think a video, so yeah, there you go.

**10:21** · So essentially this is a really easy way to create almost like a kiosk of images and videos together.

**10:27** · And I'm really hoping to see that movie theater use case.

**10:30** · Cool, thanks for bringing that up.

**10:32** · So let's take a look at the ambient mode module.

### Ambient Mode Module

**10:36** · This module allows you to choose a video and audio track to loop forever.

**10:40** · It's essentially a CRT version of Samsung's art mode or a screen saver from any smart TV or a set-top box.

**10:48** · The main difference is being you could choose the media you want to play.

**10:51** · It's free and it works on a CRT TV.

**10:55** · So for video tracks here, it's going to list all the video tracks you've added in the ambient mode media directory.

**11:02** · And then for audio, you can choose to play back the audio from the video you've selected, or you can choose a custom audio track.

**11:11** · And that's going to be a single file or a playlist you've added in the same media directory.

**11:17** · So in this case, I'm going to choose to watch the Studio Ghibli Nature Loop with the audio track of the best album ever made from Hum, called "You'd Prefer an Astronaut."

**11:27** · And if I click Start here, it basically started right up.

**11:36** · And I'll turn the audio down so I don't get a copyright strike.

**11:40** · But the idea basically is just this becomes a piece out of wallpaper that could run on this TV until you choose to stop it.

**11:46** · So yeah, that's ambient mode.

### Color Schemes

**11:50** · Dan Hunsaker also created a really cool option to define multiple custom color schemes.

**11:55** · So now instead of just defining one called custom, you could also define multiple and give them names.

**12:01** · So here's a few that they created.

**12:04** · And yeah, this details about this and how to set it up are included on the Wiki that I'll link in the description below.

**12:11** · But yeah, now there's basically a multitude of color schemes you could add and you could also name them.

**12:16** · If you create any cool color schemes though, please let me know.

**12:18** · I'd love to add them directly to the app as well.

**12:21** · And cool, looking forward to what you make.

**12:25** · There's two additional quality of life settings here in the app now.

**12:28** · One called Start on Module.

### Start On Module Setting

**12:31** · And this is cool because you had a use case to only use one of these modules on your CRT.

**12:36** · You could set that module to be the one that it starts on through the setting here.

**12:40** · So for example, if I only ever wanted to use YouTube, I could set that.

**12:44** · And the next time I boot up the app, it's going to go directly into this module.

**12:49** · This will still allow you to get back to the module list as well as settings, but it essentially allows you to start on a given module directly, which is super nice.

### Auto Crop Setting

**12:59** · Next is the option for auto crop.

**13:01** · The idea basically was if you're on a CRT, you might want to have crop just turned on by default instead of having to turn it on yourself each time a video starts.

**13:10** · So that's what this setting does.

**13:11** · If it's set to on, then anytime a video starts, it's going to auto crop the video to fit the TV, the screen that it's on at this time, in this case, the CRT.

**13:20** · And if it's off, then you'll be able to turn it on directly if you want as well.

**13:26** · Even when it's on though, you could still toggle it off.

**13:28** · So this, all this does is set the initial state for the crop when the video begins.

### Media Key Support

**13:33** · A user named Bittleman also added media key support.

**13:36** · So let me show you this.

**13:37** · If I go into this movie here and resume, And this remote has volume keys on it, right?

**13:42** · So if I press volume up, now you get this really cool volume bar here.

**13:48** · So this is gonna depend on the controller you're using.

**13:51** · If the control supports standard media keys, then it should work here.

**13:55** · So things like volume up and down, play/pause, chapters, things like that.

**14:00** · A huge thanks to Biddleman for doing this and it looks awesome, thank you.

**14:05** · So in addition to using a keyboard or a remote to navigate, you can now also use a gamepad.

### Gamepad Support

**14:12** · And this gamepad's plugged in over USB, so it makes it pretty easy.

**14:14** · But you'll notice as I press a button on the gamepad here, that it's going to update the help system to show the new hints based off the buttons on the gamepad itself.

**14:23** · And you could modify this if you have like a custom gamepad as well.

**14:27** · There's instructions in the wiki, so I'll just point that in the description below.

**14:31** · But yeah, now you can navigate with a gamepad as well.

**14:34** · Makes it pretty easy.

**14:36** · And obviously this is a, probably a preview of the exploration I'll do on like a retro arc module in the future as well.

**14:43** · So yeah, there you go.

### Outro

**14:46** · All right, so that's all the major updates for 240MP over the last few weeks.

**14:51** · Huge love to open source.

**14:52** · Thank you so much for your contributions, your ideas.

**14:55** · It's been a ton of fun to build with you all.

**14:58** · And yeah, looking forward to the new stuff we create as well.

**15:01** · If you have any ideas or want to contribute, check out the link in the description below to the GitHub and thank you so much for checking us out. Take care.