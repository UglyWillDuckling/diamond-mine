---
tags:
  - course-lesson
part of:
  - "[[execute program - python for programmers course]]"
previous: "[[__dict__ lesson]]"
---
Let's say we're transferring funds from one bank account to another. If the account's balance is too low, we raise a **ValueError**. **ValueError** is a good match: it means that the argument had the correct data type, but the specific value is not acceptable.

```python

account_balances = {
  "Amir": 300,
  "Betty": 500,
}

def transfer_funds(amount, from_account, to_account):
  if account_balances[from_account] < amount:
    raise ValueError("insufficient funds")

  account_balances[from_account] -= amount
  account_balances[to_account] += amount
```

```python
transfer_funds(350, "Amir", "Betty")
(account_balances["Amir"], account_balances["Betty"])
Error
```

If we pass a non-existent account to transfer_funds, we get a KeyError when we look up account_balances[...]. This happens due to standard dict behavior.

This error message is less clear, but we can improve it. We'll customize the message to tell us what's really wrong: no account with that name exists. 
We'll also change the exception class to **ValueError**, s==ince we're now describing the problem in terms of the application (that account doesn't exist) rather than a Python data structure (the dict doesn't have that key).==

```python
def transfer_funds(amount, from_account, to_account):
  if from_account not in account_balances:
    raise ValueError(f"Account doesn't exist: {from_account}")
  if to_account not in account_balances:
    raise ValueError(f"Account doesn't exist: {to_account}")
  if account_balances[from_account] < amount:
    raise ValueError("insufficient funds")

  account_balances[from_account] -= amount
  account_balances[to_account] += amount

transfer_funds(100, "Amiir", "Betty")
[account_balances["Amir"], account_balances["Betty"]]
Error
```

___

**When we plan to catch an exception, it's usually a good idea to raise an instance of a custom exception class, rather than one of Python's built-in exception classes.** 

For example, if we catch a `NoAccountError` exception, we can be sure that it wasn't caused by a math operation like the ones above.

We can define a custom exception class by inheriting from any exception class. In this case, we'll inherit from Exception itself, which is a good default choice. **The next example raises a NoAccountError when an account doesn't exist. We'll catch it in a moment.**

```python
class NoAccountError(Exception):
  pass

account_balances = {
  "Amir": 300,
  "Betty": 500,
}

def transfer_funds(amount, from_account, to_account):
  if from_account not in account_balances:
    raise NoAccountError(f"Can't transfer from {from_account}")
  if to_account not in account_balances:
    raise NoAccountError(f"Can't transfer to {to_account}")
  if account_balances[from_account] < amount:
    raise ValueError("insufficient funds")

  account_balances[from_account] -= amount
  account_balances[to_account] += amount
```


```python
amount = 100
transferred_amount = None
try:
  transfer_funds(amount, "Amiir", "Betty")
  transferred_amount = amount
except NoAccountError:
  transferred_amount = 0
transferred_amount
0
```

## 
The bank limits daily account transfers to $1,000. Trying to transfer over the limit currently raises a generic ValueError. Define a new exception class, TransferLimitError. Then raise the exception in transfer_funds instead of a ValueError.

```python

account_balances = {
  "Amir": 2150,
  "Betty": 300,
  "Cindy": 4200,
}

class TransferLimitError(Exception):
  pass

def transfer_funds(amount, from_account, to_account):
  if from_account not in account_balances:
    raise KeyError(f"Can't transfer from {from_account}")
  if to_account not in account_balances:
    raise KeyError(f"Can't transfer to {to_account}")
  if account_balances[from_account] < amount:
    raise ValueError("Insufficient funds")
  if amount > 1000:
    raise TransferLimitError("Transfer limit exceeded.")

  account_balances[from_account] -= amount
  account_balances[to_account] += amount
```