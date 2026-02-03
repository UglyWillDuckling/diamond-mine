---
title: How to Generate Random Passwords in Bash using `/dev/urandom`
source: https://dev.to/karandaid/how-to-generate-random-passwords-in-bash-using-devurandom-4cp8
author:
  - "[[Karandeep Singh]]"
published: 2024-05-29
created: 2025-02-09
description: Generating random data is a common task in many applications, especially when it comes to creating... Tagged with bash, script, password, random.
tags:
  - clippings
  - cli
  - password-generator
---
Generating random data is a common task in many applications, especially when it comes to creating secure passwords. In this guide, we'll learn how to generate random passwords using Bash and the `/dev/urandom` file. This method ensures your passwords are both random and secure. We'll build the script step-by-step, explaining each part so you can easily follow along. By the end, you'll have a complete Bash script to generate random passwords.

#### Step 1: Generate Random Bytes

To start, we'll generate random bytes using the `head` command to read from `/dev/urandom`. Then, we'll use `base64` to encode these bytes into a readable format.  

```shell
head -c 16 /dev/urandom | base64
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

**Explanation:**

- `head -c 16 /dev/urandom`: This reads 16 bytes from `/dev/urandom`, a special file that provides random bytes.
- `| base64`: This encodes the bytes into a base64 string, making it easy to read.

When you run this command in your terminal, you'll see a random string output, which looks something like this: `r8BgD2h+P/QA5FyN`.

#### Step 2: Remove Unwanted Characters

Next, we'll refine the output to include only alphanumeric characters, making the password more user-friendly. We'll use the `tr` command for this.  

```shell
head -c 16 /dev/urandom | base64 | tr -dc 'a-zA-Z0-9'
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

**Explanation:**

- `tr -dc 'a-zA-Z0-9'`: This removes any characters that are not in the ranges `a-z`, `A-Z`, or `0-9`, leaving us with a clean alphanumeric string.

Run this command, and you'll get a cleaner output like `r8BgD2hPQA5FyN`.

#### Step 3: Putting It All Together

Let's combine everything into a simple script that you can run anytime you need a new random password.  

```shell
#!/bin/bash

# Generate a random password
PASSWORD=$(head -c 16 /dev/urandom | base64 | tr -dc 'a-zA-Z0-9')

# Display the password
echo "Your random password is: $PASSWORD"
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

**Explanation:**

- `#!/bin/bash`: This line specifies that the script should be run in the Bash shell.
- `PASSWORD=$(...)`: This runs our command and stores the result in the `PASSWORD` variable.
- `echo "Your random password is: $PASSWORD"`: This prints the generated password to the screen.

#### Step 4: Running the Script

To run the script, save it to a file (e.g., `generate_password.sh`), give it execute permissions, and then run it.  

```shell
chmod +x generate_password.sh
./generate_password.sh
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

**Explanation:**

- `chmod +x generate_password.sh`: This makes the script executable.
- `./generate_password.sh`: This runs the script.

When you run the script, you'll see an output like: `Your random password is: r8BgD2hPQA5FyN`.

#### Full Script

Here is the complete script for easy reference:  

```shell
#!/bin/bash

# Generate a random password
PASSWORD=$(head -c 16 /dev/urandom | base64 | tr -dc 'a-zA-Z0-9')

# Display the password
echo "Your random password is: $PASSWORD"
```

### Conclusion

Using `/dev/urandom` in Bash is a simple and effective way to generate random passwords. This method ensures your passwords are secure and random, which is essential for protecting your data. Now you have a handy script to generate strong passwords anytime you need them!