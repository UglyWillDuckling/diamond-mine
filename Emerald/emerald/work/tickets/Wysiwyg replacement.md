# Wysiwyg

[github list](https://github.com/JefMari/awesome-wysiwyg-editors)

---

## possible options found 🔍

* ~~summerNote~~
  * requires `Bootstrap` to work
* **Trumbowyg** ✅

### Trumbowyg

[github](https://alex-d.github.io/Trumbowyg)

* **simple** and *leightweight*
* fast
* **jquery** plugin
* completely **free**
* multilingual
* **support** for `textarea` input types
* in active development

#### code implementation {}

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css"
      href="file:///home/vsedlar/dev/projects/MeilleursAgents/MALegacy/experiment/ui/trumbowyg.min.css">
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <!-- Trumbowyg -->
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.27.3/trumbowyg.min.js" 
      integrity="sha512-YJgZG+6o3xSc0k5wv774GS+W1gx0vuSI/kr0E0UylL/Qg/noNspPtYwHPN9q6n59CTR/uhgXfjDXLTRI+uIryg==" 
      crossorigin="anonymous" referrerpolicy="no-referrer">
    </script>
</head>
<body>
    <textarea id="my-editor"></textarea>
    <script> $('#my-editor').trumbowyg()</script>
</body>
</html>
```

#### gathering requirements

**sql query** to get all the templates needed

```sql
SELECT *, LENGTH (body) bodysize FROM 
  config.email_template ORDER BY bodysize DESC;
```

### live testing

#### hosting the library

**files list** 🗃

* static/js/resources/backyard.js

**steps** 🦶

1. host js
2. host css
3. load both on FE

* [ ]

## End 🏁

### All done

Trumbowyg wins the race 🐎
