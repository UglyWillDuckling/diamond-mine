
## examples

### book finder 📚

https://quickadd.obsidian.guide/docs/Examples/Macro_BookFinder#usage

We'll need to install a QuickAdd BookFinder script for this to work. You will need to put the user script into a new macro and then create a Macro choice in the main menu to activate it. You can find the script [here](https://quickadd.obsidian.guide/assets/files/BookFinder-f390080e94ba4a7df746b067ec1add78.js).

Save the script (BookFinder.js) to your vault somewhere. Make sure it is saved as a JavaScript file, meaning that it has the .js at the end.
Create a new template in your designated templates folder. Example template is provided below.
Open the Macro Manager by opening the QuickAdd plugin settings and clicking Manage Macros.
Create a new Macro - you decide what to name it. I named mine BookFinder.
Add the user script to the command list.
Add a new Template step to the macro. This will be what creates the note in your vault. Settings are as follows:
	Set the template path to the template you created.
	Enable File Name Format and use {{VALUE:fileName}} as the file name format. You can specify this however you like. The fileName value is the name of the Book without illegal file name characters.
	The remaining settings are for you to specify depending on your needs.
Go back out to your QuickAdd main menu and add a new Macro choice. Again, you decide the name. I named mine Book. This is what activates the macro.
Attach the Macro to the Macro Choice you just created. Do so by clicking the cog ⚙ icon and selecting it.

You can now use the macro to create notes with book information in your vault.

## movies 🎥

### installation

We'll need to install a QuickAdd user script for this to work. I have made a video which shows you how to do so - click here. You will need to put the user script into a new macro and then create a Macro choice in the main menu to activate it. You can find the script here.

    Save the script (movies.js) to your vault somewhere. Make sure it is saved as a JavaScript file, meaning that it has the .js at the end.
    Create a new template in your designated templates folder. Example template is provided below.
    Open the Macro Manager by opening the QuickAdd plugin settings and clicking Manage Macros.
    Create a new Macro - you decide what to name it. I named mine Movie.
    Add the user script to the command list.
    Add a new Template step to the macro. This will be what creates the note in your vault. Settings are as follows:
        Set the template path to the template you created.
        Enable File Name Format and use {{VALUE:fileName}} as the file name format. You can specify this however you like. The fileName value is the name of the Movie or TV show without illegal file name characters.
        The remaining settings are for you to specify depending on your needs.
    Click on the cog icon to the right of the script step to configure the script settings. This should allow you to enter the API key you got from OMDb. Image demonstration.
    Go back out to your QuickAdd main menu and add a new Macro choice. Again, you decide the name. I named mine 🎬 Movie. This is what activates the macro.
    Attach the Macro to the Macro Choice you just created. Do so by clicking the cog ⚙ icon and selecting it.

You can now use the macro to create notes with movie or TV show information in your vault.

## tasks
[[Tasks Api - QuickAdd plugin]]
