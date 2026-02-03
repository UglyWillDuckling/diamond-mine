---
source: https://joaolealdasilva.medium.com/ctop-the-docker-monitoring-tool-thatll-actually-save-your-sanity-46656c15b81a
published: 2025-12-12
created: 2025-12-13
tags:
  - article
processed: false
plan_to_read: true
---
Picture this: It’s 3 AM. Your mobile is absolutely losing its mind. And somewhere deep in your container cluster, something is demolishing your memory like it’s an all-you-can-eat buffet. You SSH in, half asleep, fumbling for your coffee (you’re definitely going to need it), and type `docker stats`.

![[~/×/5c47e47a23048db07d7085e0b56e41b7_MD5.webp]]

And here’s what you get: A wall of scrolling ASCII that looks like someone’s trying to communicate in Matrix code. You’re squinting at numbers flying past, trying to work out which container has gone rogue and decided today’s the day it eats all the RAM.

![[~/×/e943a8c43e7c64a5f19177ff2ab28a0b_MD5.webp]]

Been there? Yeah, me too. About a few times too many.

Listen, I’ve spent a few years wrangling infrastructure and the brilliant (sometimes wonderfully chaotic) people who build on it. And here’s what I’ve learnt: the right tool at the right moment is worth more than gold. More than sleep. Actually, no, let’s be honest: it’s worth its weight in uninterrupted sleep, which is basically the same as gold for us infrastructure folks.

So let me introduce you to `ctop`. Think `htop`, but for Docker containers. If you've ever looked at `docker stats` and thought, "There has to be a better way," then grab your coffee and let's go.

![[~/×/af53b1fbe5785c5022392deae75aaea0_MD5.webp]]

## What Makes ctop Different?

Here’s the thing about `docker stats`:,
it technically works. But it's about as user-friendly as a cactus wearing boxing gloves. You get this endless stream of numbers scrolling past, updating every few seconds, and if you've got more than five containers running? Good luck. You're basically playing Where's Wally with memory leaks.

But `ctop`? Oh, this is where things get good.

You get a proper, gorgeous interface. Real-time CPU metrics. Memory graphs that actually make sense. Network I/O you can read without needing a magnifying glass. Sortable columns (because obviously). And here’s the kicker: you can drill down into logs without opening another terminal window.

![[~/×/353a757eefa7cc74fe3c84969d2f9ff9_MD5.webp]]

It’s like someone finally sat down and asked, “What if monitoring tools didn’t actively hate their users?” And then they actually built it.

## Installing ctop (Docker Container Method — My Favourite)

The best way to run `ctop`? As a Docker container. I know, using Docker to monitor Docker feels a bit meta, doesn't it? But stick with me here, because this approach is brilliant: it keeps your host system pristine, dodges dependency hell entirely, and keeps you always running the latest version. Win-win-win.

Here’s the command:

```c
docker run --rm -ti \
  --name=ctop \
  --volume /var/run/docker.sock:/var/run/docker.sock:ro \
  quay.io/vektorlab/ctop:latest
```

**Quick note:** That `/var/run/docker.sock` bit? That's the Docker socket mounted read-only. `ctop` needs it to peek at your containers. Read-only means it's just looking, not touching, nice and safe.

Now, typing that massive command every single time? Yeah, no thanks. We’ll sort that out with a proper alias in a minute. Keep reading!

## Other Ways to Install (If You’re Not Feeling the Docker Vibe)

Look, the Docker container method is ace, but I get it. Sometimes you just want the binary on your system. No judgment. Here are your options:

## Debian/Ubuntu Gang:

```c
sudo apt-get install ca-certificates curl gnupg lsb-release
curl -fsSL https://azlux.fr/repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/azlux-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/azlux-archive-keyring.gpg] http://packages.azlux.fr/debian $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/azlux.list >/dev/null
sudo apt-get update
sudo apt-get install docker-ctop
```

## Other Linux Flavours:

```c
sudo wget https://github.com/bcicen/ctop/releases/download/v0.7.7/ctop-0.7.7-linux-amd64 -O /usr/local/bin/ctop
sudo chmod +x /usr/local/bin/ctop
```

## macOS (Homebrew, Obviously):

```c
brew install ctop
```

## Windows (Via Scoop):

```c
scoop install ctop
```

Dead simple. Pick your poison, run the commands, and you’re sorted.

## Actually Using This Thing (And Having Fun While You’re At It)

Fire up `ctop` and you get this gorgeous, updating interface that doesn't require a PhD in ASCII art interpretation. The keybindings? Actually sensible. Shocking, I know.

- **Arrow Keys** — Navigate around (revolutionary concept, right?)
- **Enter** — Dive deep into a container’s details
- **a** — Show all containers, including the dead ones (RIP little buddies)
- **f** — Filter by name (because we all have a container called “test123” or “temp\_final\_v2\_actually\_final” somewhere)
- **s** — Sort by CPU, memory, or whatever’s currently having a meltdown
- **l** — View logs without opening another terminal window (this is the dream)
- **e** — Exec straight into the container (no faffing about)
- **q** — Quit (but honestly, you won’t want to)

The interface updates in real-time, which means you can literally watch your containers misbehave live. It’s oddly therapeutic. Like watching a car crash, but one you can actually fix.

## Level Up: Command-Line Options That’ll Make You Look Clever

So `ctop` on its own is already fantastic. But wait, there's more! You can customise it with command-line options to make it even more useful:

- `--refresh <seconds>`: Set how fast it updates (e.g., `--refresh 5` for a 5-second refresh)
- `-s <column>`: Pick which column to sort by from the start (e.g., `-s memory`)
- `-scale-cpu`: Show CPU as a percentage of your entire system, not just the container's limit (handy for spotting greedy containers)

Let’s say you suspect your web containers are throwing a massive memory party without inviting you. Try this:

```c
ctop -f web -s memory
```

Now you’re looking at only web containers, already sorted by memory usage. You’ll spot the culprit in seconds. This is chef’s kiss territory.

## The Lazy Engineer’s Approach (Also Known As: Working Smarter)

Right, remember that massive `docker run` command from earlier? Yeah, typing that every single time is absolutely nobody's idea of a good time. So let's be smart about this and create a proper wrapper script.

Chuck this beauty into `/usr/local/bin/ctop`:

```c
#!/bin/bash
docker run --rm -ti \
  --name=ctop \
  --volume /var/run/docker.sock:/var/run/docker.sock:ro \
  quay.io/vektorlab/ctop:latest "$@"
```

See that `"$@"` at the end? That's the magic sauce. It passes along any arguments you give, so you can still use all those fancy command-line options we talked about. Without it, you'd have a pretty but completely inflexible alias. And nobody wants that.

Now make it executable:

```c
sudo chmod +x /usr/local/bin/ctop
```

And that’s it! Just type `ctop` and you're off to the races. Simple. Elegant. Lazy in the best possible way.

## When Your Containers Live Elsewhere (Plot Twist!)

Okay, this is where `ctop` goes from "pretty useful" to "absolutely brilliant." Because here's the thing: you're not stuck monitoring just localhost. Got containers running on a remote server halfway across the data centre? Or in the cloud? `ctop` can monitor those too.

There are basically two ways to do this: the convenient way and the “I’d quite like to keep my job, thanks” way. Let’s talk about both.

## Method 1: TCP Connection (The “What Could Possibly Go Wrong?” Approach)

This method gets the remote Docker daemon listening on a TCP port. Quick, easy, and about as secure as leaving your house keys under the doormat with a neon sign. But for completeness, here’s how it works.

**Step 1: Configure the Remote Docker Host**

Edit the Docker daemon config on your remote server — usually at `/etc/docker/daemon.json`. If it doesn't exist, create it:

```c
{
  "hosts": ["unix:///var/run/docker.sock", "tcp://0.0.0.0:2375"]
}
```

This keeps your Unix socket and adds a TCP listener on port 2375. Restart Docker:

```c
sudo systemctl restart docker
```

**MASSIVE SECURITY WARNING:** Right, stop and listen carefully. This is essentially hanging a sign on your server saying, “FREE ROOT ACCESS — EVERYONE WELCOME!” Anyone who can reach port 2375 basically owns your entire server. Complete control. Only use this in completely isolated, air-gapped, trusted networks where you control everything. And even then, your security team will give you That Look. Seriously, mate, you’ve been warned.

**Step 2: Configure Your Local Machine**

Set the `DOCKER_HOST` environment variable:

```c
export DOCKER_HOST=tcp://<your-remote-server-ip>:2375
```

Now when you run `ctop`, it connects to your remote server. Terrifying magic, but it works.

## Method 2: The Way That Won’t Get You Fired (SSH Tunnelling FTW)

Right, SSH tunnelling is the proper grown-up way to do this. No exposed ports, no security nightmares, no having to explain yourself in an incident review. Just pure, encrypted, beautiful SSH tunnels doing what they do best.

**Step 1: Configure Your Local Machine**

All you need to do is set the `DOCKER_HOST` environment variable to use the `ssh://` protocol:

```c
export DOCKER_HOST=ssh://<user>@<your-remote-server-ip>
```

Make sure you’ve got SSH access to the remote server, ideally with SSH keys for passwordless authentication, because typing passwords is so 2005.

**Step 2: Run ctop**

And that’s it. Just run:

```c
ctop
```

`ctop` creates an SSH tunnel automagically and shows you your remote containers. Secure, simple, elegant. You can sleep soundly knowing you haven't just handed the keys to the kingdom to everyone on the internet. This is the way. The ONLY way, really, unless you enjoy living dangerously.

## The Bottom Line (Why You Actually Need This)

Look, I’ve spent over 20 years in the infrastructure trenches, and I can count on one hand the number of tools that actually make my life easier without creating three new problems in the process. `ctop` is one of those rare gems.

Is it revolutionary? No. Will it solve world hunger? Absolutely not. Will it make your containers magically scale, or will it fix your architectural decisions? Not a chance.

But here’s what it WILL do: At 3 AM when your mobile goes off, and something’s gone sideways with your containers, it’s the difference between 5 minutes of calm, methodical diagnosis and 30 minutes of frantically juggling terminal windows whilst your blood caffeine level drops dangerously low.

It’s a simple tool that does one thing brilliantly: shows you what your containers are actually doing, right now, in a format that doesn’t require a decoder ring.

So go on. Install it. Play with it. Watch your containers in glorious, real-time detail.

And the next time something goes wrong at stupid o’clock in the morning? You’ll thank me.

Now go get some sleep before the next page. You’ve earned it!