---
about:
  - "[[Atlas/Tools/pc/Jellyfin|Jellyfin]]"
source: https://www.xda-developers.com/jellyfin-plugins-better-than-plex/
published: 2025-06-11
created: 2026-02-10
tags:
  - resource-list
  - resource-list/jellyfin
---
Plex tends to be the go-to option when someone wants to host their own media server, but [Jellyfin offers an alternative](https://www.xda-developers.com/reasons-im-switching-to-jellyfin-nas-media-streaming/) that, while slightly less polished, has its own distinct advantages. For starters, Jellyfin doesn't require an account, and all its features are free. Plex Pass? I'll pass. It's also more private than Plex, with fewer ads to wade through. Perhaps most useful of all is that you can use Jellyfin entirely offline, without any form of authentication.

The downside is that Jellyfin can be a bit more difficult to set up if you aren't familiar with hosting a server, but thanks to its community support, Jellyfin can be made even better with a variety of different plugins that enhance the user experience and elevate it beyond anything Plex can offer. Whether you're just getting [started with your own media server](https://www.xda-developers.com/retain-full-control-over-your-media-files-by-building-a-jellyfin-server/) or jumping ship from Plex, you should try these plugins.

## 6 Intro Skipper

Let's face it: Netflix has spoiled us all with its "skip intro" feature. You don't have to give that up if you switch to Jellyfin, thanks to the Intro Skipper plugin. There are several versions of this plugin available, but we recommend [this one](https://github.com/intro-skipper/intro-skipper). It's a fork of the original and is among the most recently updated. It works by analyzing the audio of episodes to detect and allow you to skip over intros, but there are a few drawbacks.

The intro has to be within the first 25 percent of an episode (or first ten minutes), and must be between 15 seconds and two minutes long. Intro Skipper can also skip end credits, provided they're shorter than four minutes. Just make sure you have Jellyfin 10.8.4 or later installed.

## 5 Home Screen Sections (Modular Home)

![An example of the Home Screen Sections Jellyfin plugin. ](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/05/home-screen-sections.png?q=49&fit=crop&w=500&dpr=2)

Credit: IAmParadox27

Most streaming services suggest more content based on what you've already watched, and Jellyfin can do the same. The Home Screen Sections plugin expands Jellyfin's default sections with several others, including "Latest Movies/TV Shows," "Because You Watched," "Watch Again," and "My List." You can also use it to add your own custom sections, although that takes a bit more work to set up.

Home Screen Sections is based on Jellyfin 10.10.7 and requires two additional plugins: [File Transformation](https://github.com/IAmParadox27/jellyfin-plugin-file-transformation) and [Plugin Pages](https://github.com/IAmParadox27/jellyfin-plugin-pages).

## 4 Media Cleaner

Tidy up your library

![After finishing an episode, Media Cleaner will automatically delete the content after a set amount of time. ](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/06/screenshot-2025-06-10-at-8-57-28-am.png?q=70&fit=crop&w=825&dpr=1)

Maintaining a massive media library can be a chore, especially with how much storage 4K content requires. If you'd like to delete files after you've seen them, the [Media Cleaner](https://github.com/shemanaev/jellyfin-plugin-media-cleaner) plugin is a must-have. 
The way it works is simple: once you've fully played a file, whether it's a movie, TV show, or something else, it will be considered for deletion. You can adjust these settings to only delete content after you've finished an entire season or the entire series. Don't worry; if something is deleted, it will appear in the Alerts section of your Jellyfin dashboard.

## 3 Skin Manager

Jellyfin looks fine by default, but if you want to customize it to suit your own tastes, you'll want the [Skin Manager](https://github.com/danieladov/jellyfin-plugin-skin-manager) plugin. This plugin makes it easy to set up different themes for your Jellyfin UI, modifying it to look however you'd like it to. Dozens of skins can be downloaded from the web with a simple search, and you can swap skins on the fly. Just open the plugin, select the skin you want to use, and click Set Skin.

## 2 In Player Episode Preview

### Switch episodes on the fly

![The Jellyfin In Player Episode Preview in action. ](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/05/screenshot-2025-05-30-at-3-39-50-pm.png?q=70&fit=crop&w=797&dpr=1)

If you're trying to find a specific episode of your favorite show but can't quite remember what it's called, the [In Player Episode Preview](https://github.com/Namo2/InPlayerEpisodePreview) lets you get a glimpse of the episode before you start watching. Assuming you have the full season of whatever the show is downloaded, it will list the episode title, let you swap between seasons, show details like community rankings, and much more. You can use the plugin to mark episodes as favorites, too. Fair warning: some users have reported bugs depending on the theme used, but the plugin's creator says it should work with the majority of Jellyfin themes.

## 1 MyAnimeSync

### A must-have for anime fans

![MyAnimeList](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/05/screenshot-2025-05-30-at-3-56-46-pm.png?q=70&fit=crop&w=825&dpr=1)

If you're a self-proclaimed weeb, then you know that MyAnimeList is one of the best places to keep track of your viewing history and keep a record of your favorite anime. It's also a fantastic way to discover new shows that you might otherwise miss out on; after all, there's a lot of great under-the-radar anime out there. The MyAnimeSync plugin automatically syncs your viewing history with MyAnimeList so that you always have an up-to-date history of what you have and haven't seen, along with your rating of each show.

Of course, you'll need to connect the plugin with your MyAnimeList login and will need to use your Jellyfin server at least once per month, but that shouldn't be a problem for the average person.

It seems like another streaming service increases its price every day. Rather than draining your wallet to gain access to hundreds of shows you might never watch, create your own streaming service with Jellyfin. Between its extensive plugin library, user-friendly features, and ease of setup, you can create your own in-home streaming network that won't cost a dime (except, maybe, bandwidth fees).