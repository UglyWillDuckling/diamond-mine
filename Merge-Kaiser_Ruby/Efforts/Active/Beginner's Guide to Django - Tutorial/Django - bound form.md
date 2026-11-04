---
part_of:
  - "[[Django]]"
---
#concept/django

In Django, a bounded form is a form that is associated with a specific model
  instance. When you create a form instance and pass a model instance to it,
  Django binds the form to that instance. This allows the form to validate and
  save the data to the associated model instance.

  A bounded form is typically created by passing a model instance to the form
  constructor, like this:

```python
    from django import forms
    from .models import Book

    class BookForm(forms.ModelForm):
        class Meta:
            model = Book
            fields = ['title', 'author', 'price']

    book = Book.objects.get(id=1)
    form = BookForm(instance=book)
```

  In this example, we create a  `BookForm`  instance and pass a  `Book  model`
  instance to it using the  instance  parameter. ==This binds the form to the book  instance.==

  When you `render` the form, Django **will populate the form fields with the data**
  from the associated model instance. For example:

    <form>
        {{ form.as_p }}
    </form>
  ==This would render the form fields with the values from the  book  instance.==

  When you <mark style="background: #BBFABBA6;">submit</mark> the form, **Django will validate the data** and, if valid,
  update the associated model instance with the new data. You can access the
  updated instance using the  form.instance  attribute:

    if form.is_valid():
        form.save()
        print(form.instance.title)  # updated title

  Note that when you bind a form to a model instance, Django will
  automatically populate the form fields with the data from the instance. If
  you want to create a new instance instead of updating an existing one, you
  can pass  None  as the  instance  parameter:

    form = BookForm(instance=None)

  ==This will create a new, empty form that is not bound to any specific model instance.==

  Bounded forms are a powerful feature in Django, allowing you to easily create and update model instances using forms.