---
part_of:
  - "[[Django]]"
tags:
  - tool/django
---
`note:AI`

In Django, forms are a way to validate and process user input. They are a crucial part of any web application, as they allow users to interact with your site.

### **Why use Django Forms?**

2. **Validation**: Django forms provide an easy way to validate user input, ensuring that the data is correct and consistent.
3. **Security**: Forms help prevent common web vulnerabilities like SQL injection and cross-site scripting (XSS).
4. **Code Reusability**: Forms can be reused throughout your application, reducing code duplication.
5. **Easy Rendering**: Django provides a built-in way to render forms as HTML, making it easy to display them in your templates.
### **Types of Forms in Django**

1. **Form**: A basic form that can be used to validate and process user input.
2. **ModelForm**: A form that is tied to a specific Django model, making it easy to create and update model instances.

### **Key Concepts**

* **Fields**: Individual elements within a form, such as text inputs, checkboxes, and dropdowns.
* **Widgets**: The HTML representation of a field, such as a text input or textarea.
* **Validators**: Functions that check the input data to ensure it meets certain criteria.

```python
from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)

    def clean_message(self):
        message = self.cleaned_data['message']
        if len(message) < 10:
            raise forms.ValidationError("Message must be at least 10 characters")
        return message
```

This example shows a basic form with three fields: `name`, `email`, and `message`. 

- ! The `clean_message` method is a validator that checks the length of the `message` field