
As recently [discussed on the Arch Mailing list](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/FGXPCB3ZVCJIV7FX323SBAX2JHYB7ZS4/) there appears to have been a large coordinated attack on the AUR some time within the last 24 hours that seems to have resulted in a rather sizable amount of packages being contaminated with malware.

This is a good reminder that the AUR is open, unofficial, user-produced, content.

The only secure way to use the Arch User Repository is by reviewing every PKGBUILD.

While efforts are now underway to clean out any problem packages there still exists the possibility that some users may have inadvertently downloaded some of these malicious sources.

#### Clarify

In case it needs to be stated plainly: **the CachyOS repos are unaffected**.  
Using pacman or upgrading with it such as `pacman -Syu` would be safe.  
This can only possibly apply to users who installed or upgraded any of the compromised packages *from the AUR* during the time of exploitation.

If unsure the following command will print any installed foreign packages:

```plaintext
pacman -Qm
```

If you do use foreign packages and want to check if any of them match the list of compromised packages then there are some various approaches, some of which are detailed below.

  

#### Scripted check

Out of an abundance of caution I have duplicated efforts elsewhere to have [a checkup script](https://cscs.pastes.sh/aurvulntest20260611.sh) and will update it if and as more packages are found to be affected.

You can run it remotely using the following commands.

BASH, others:

```plaintext
bash <(curl -s https://cscs.pastes.sh/raw/aurvulntest20260611.sh)
```

FISH:

```plaintext
bash <(curl -s https://cscs.pastes.sh/raw/aurvulntest20260611.sh | psub)
```

>  ![:information_source:](https://discuss.cachyos.org/images/emoji/twitter/information_source.png?v=15 ":information_source:") Note ![:information_source:](https://discuss.cachyos.org/images/emoji/twitter/information_source.png?v=15 ":information_source:")   
> Be aware that this is only a cursory effort to check for the package names.  
> It applies no remedy and does not verify system integrity.  
> It checks the packages were installed recently but could still produce false-positives.  
> A return should be understood as a suggestion to investigate further.

  

#### Unscripted check

If avoiding any kind of execution during this time is preferable then a companion [simple text list](https://cscs.pastes.sh/raw/aurvulnlist20260611.txt) is available.  
It can be used manually or with the following one-liners to perform a simpler comparison.

BASH, others:

```bash
echo "Affected Packages Found:"; comm -12 <(pacman -Qq | sort) <(curl -s https://cscs.pastes.sh/raw/aurvulnlist20260611.txt | sort) | { read -r l && printf '%s\n' "$l" || echo "None. No known compromised packages are installed."; }
```

FISH:

```perl
echo "Affected Packages Found:"; comm -12 (pacman -Qq | sort | psub) (curl -s https://cscs.pastes.sh/raw/aurvulnlist20260611.txt | sort | psub) | { read -r l && printf '%s\n' "$l" || echo "None. No known compromised packages are installed."; }
```

>  ![:information_source:](https://discuss.cachyos.org/images/emoji/twitter/information_source.png?v=15 ":information_source:") Note ![:information_source:](https://discuss.cachyos.org/images/emoji/twitter/information_source.png?v=15 ":information_source:")   
> Be aware that this is only a cursory effort to check for the package names.  
> It applies no remedy and does not verify system integrity.  
> This variant does not check versions or similar and may produce more false-positives.  
> A return should be understood as a suggestion to investigate further.

  

#### What to do if believed to be affected?

( as adapted from the [original](https://github.com/lenucksi/aur-malware-check) )

1. **To inspect**: Do not power off - Do disconnect - Use forensic acquisition with trusted media
2. **Rotate ALL credentials**: Discord, GitHub, npm, Slack, Teams, SSH keys, Vault tokens, cloud provider keys
3. **Check for persistence**: `systemctl list-units --type=service --state=running` (check for unknown services)
4. **Check for eBPF rootkit**: `ls -la /sys/fs/bpf/hidden_*`
5. **Clean with trusted media**: Boot from Cachy or other Arch ISO, mount filesystem, remove malicious systemd units
6. **Consider wipe and reinstall**: Any rootkit makes the system untrustworthy
7. **Report novel findings**: [Aur-general - lists.archlinux.org](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/)