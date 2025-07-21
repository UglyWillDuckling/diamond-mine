#tool/python

The entries are merged from left to right. **When both dictionaries have the same key, the right dictionary "wins".**

```python
user_data = {
  "name": "Betty",
  "mailing_list": True
}
updates = {
  "mailing_list": False
}
user_data = user_data | updates
user_data["mailing_list"]
False
```
