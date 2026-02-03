---
source: https://thegimptutorials.com/how-to-crop-image/
author:
  - "[[Thomas Boldt]]"
  - "[[About Thomas Boldt]]"
  - "[[<img alt='' src='https://secure.gravatar.com/avatar/784d45e5f819c18c9a9971ca9f30d04c16cdc162f056619deab87ee226a45d7e?s=100&#038;r=g' srcset='https://secure.gravatar.com/avatar/784d45e5f819c18c9a9971ca9f30d04c16cdc162f056619deab87ee226a45d7e?s=200&#038;r=g 2x' class='avatar avatar-100 photo' height='100' width='100' decoding='async'/>]]"
published: 2023-02-22
created: 2026-01-30
tags:
  - howto/gimp
---
![](https://thegimptutorials.com/wp-content/uploads/gimp-crop-image.png)

Cropping an image is one of the most common image editing tasks, and it’s extremely simple once you know how the process works. Let’s dive right in!

There are two main options for cropping images in GIMP: you can use the Crop tool or one of the many Selection tools. The Crop tool makes it easy to do simple straight-line crops for recomposing and resizing, while the Selection tools are better used for close cropping.

For most cropping tasks, the **Crop** tool is your best option. It can be found in the Tools palette or by pressing the keyboard shortcut **Shift** + **C** (or **Option** + **C** on macOS).

Open your image, choose the Crop tool, then click and drag over the section of your image that you want to keep. The Crop overlay will appear, darkening the areas of your image that will be cropped out and adding handles to adjust the location of your cropping boundaries.

![](https://thegimptutorials.com/wp-content/uploads/2021/04/image2-8.png)

As you move your mouse over the crop area, you’ll see different handles appear and disappear, allowing you to adjust your boundaries from the corners or lock the movement to a single side.

Once you’ve got everything the way you want, simply click your mouse in the center of the crop area or press **Enter** to finalize your crop. That’s all there is to it!

That was the extremely short version of how to crop an image in GIMP, but there are other things you may need to know about like aspect ratios and cropping guides. Read on to learn more about cropping your images with GIMP!

*Note: If you want to learn how to remove the background from an image in GIMP and surround it with a white backdrop or transparency, a process that is sometimes known as ‘close cropping’, I’ve written up a separate guide that you can find here.*

## Advanced Cropping Techniques in GIMP

If the quick guide didn’t give you the answer you’re looking for, maybe some of these more advanced techniques will help you get the perfect crop in GIMP.

![](https://thegimptutorials.com/wp-content/uploads/2021/04/image4-6.png)

The Crop tool is easy to learn, but it takes a few uses to really master it. This might seem silly at first, but the more familiar you get with these tools, the faster you’ll be able to work!

### What’s an Aspect Ratio?

Probably the most useful part of the Crop tool is the ability to lock the aspect ratio of your crop area. It sounds technical, but it’s actually pretty simple, so bear with me for a minute.

Aspect ratio is the relationship between the height of your image and the width. Standard landscape-oriented photos have a 3:2 aspect ratio in the camera, so if the image is 3000 pixels wide, it will be 2000 pixels high. For portrait orientation, the ratio is naturally reversed to 2:3.

*(Yes, I know that can be reduced to 1.5:1, but generally, the photography community uses 3:2 when referring to the ratio. I assume they just prefer to use whole numbers, but I don’t know if there’s a more complex mathematical explanation.)*

Locking the aspect ratio allows you to maintain specific image proportions exactly even while experimenting with different cropping options. This really helps for fitting your images into an existing layout, whether that layout is a sheet of photo paper or an online image gallery.

Don’t let that limit your creative vision, of course – like most “rules” in the creative world, it’s really more of a guideline.

If you’re going to crop an image to a specific size, it’s often a good idea to use those dimensions as a guide for your aspect ratio lock setting, complete your crop on the unscaled version of your image, and then resize your cropped image down to match the final requirements.

For example, to crop a high-resolution picture to 1920×1080, locking your aspect ratio to 1.92:1.08 (or 19.2:10.8, let’s not be picky, it’s all the same!) will let you compose the cropped version freely without worrying about what’s going to fit into the final frame size dimensions.

### Cropping Guides

A lot of cropping is done in order to recompose a photograph that (for whatever reason, no judgment here!) didn’t turn out right when you clicked the shutter. Maybe something feels off in the composition, or there was an unwanted object at the frame edge (like a fingertip \*cough\*).

GIMP’s Crop tool comes with a few helpful on-screen guides that can help you recompose your shot in a way that puts a different emphasis on the subject. There are guides for Rule of Thirds, Rule of Fifths, and even the Golden Ratio, if that’s the kind of thing you’re into.

![](https://thegimptutorials.com/wp-content/uploads/2021/04/image3-8.png)

Using the Rule of Thirds cropping guides

These guides can be extremely helpful, but just like with the rules about “standard” aspect ratios, it’s important not to let them make all your choices for you. They are tools you can use when you need them, not restrictions that must be followed!

### The Auto Shrink Tool

Despite the name, it’s not an AI therapist for your image – the Auto Shrink tool tries to automatically match your crop edges to the exact size of the subject in your image. Trying to align the crop borders to pixel-point accuracy can be tedious, but sometimes it’s necessary.

This tool works best with a high-contrast image, such as a product image set on a solid white or black background with no shadows. If your image has multiple layers, you can check the **Shrink merged** box to use pixel data from all your layers when automatically shrinking the crop area.

If you want to use the tool very quickly without bothering with the Crop or selection tools, you can open the **Image** menu and choose **Crop to Content** to get the same results, but you don’t get the option to choose which layers it will use as a reference.

### Cropping with Selection Tools

If the Crop tool isn’t doing the job for you, there’s another quick method of cropping your image using GIMP’s selection tools.

![](https://thegimptutorials.com/wp-content/uploads/2021/04/image1-8.png)

It doesn’t offer exactly the same options as the Crop tool, but there’s so much overlap that they’re almost the same thing.

1. [Make a selection](https://thegimptutorials.com/how-to-use-free-select-tool/) using one of the selection tools. **Rectangular Select Tool** is probably your best option, but you can use any of the selection tools. If you choose **Ellipse Select**, you’ll get a rectangular image matched to the outer edges of your selection.
2. Open the **Image** menu and choose **Crop to Selection**.
3. You’re done!

Be careful using the **Antialiasing**, **Feathered edges**, and **Rounded corners** options, as they can create unwanted edge softness. That’s part of why they’re not options in the Crop tool, even though everything else is exactly the same.

With these tools and tricks under your belt, you’ll be cropping your images in GIMP like a pro in no time at all!