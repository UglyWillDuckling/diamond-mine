
[github list](https://github.com/JefMari/awesome-wysiwyg-editors)

---

### possible options found 🔍

* summerNote ❓
	* `might requuire Bootstrap to work`
* **Trumbowyg** ✅

#### Trumbowyg
[github](https://alex-d.github.io/Trumbowyg)

* **simple** and *leightweight*
* fast
* **jquery** plugin
* completely **free**
* multilingual
* **support** for `textarea` input types
* still in active development

#### implementation
****
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css"  href="file:///home/vsedlar/dev/projects/MeilleursAgents/MALegacy/experiment/ui/trumbowyg.min.css">
</head>
<body>
    <div>
        <textarea id="my-editor"></textarea>
    </div>
    <!-- Import jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <!-- Import Trumbowyg -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.27.3/trumbowyg.min.js" integrity="sha512-YJgZG+6o3xSc0k5wv774GS+W1gx0vuSI/kr0E0UylL/Qg/noNspPtYwHPN9q6n59CTR/uhgXfjDXLTRI+uIryg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- Init Trumbowyg -->

    <script>
        // Doing this in a loaded JS file is better, I put this here for simplicity
        $('#my-editor').trumbowyg();
    </script>
</body>
</html>
```

#### what else
