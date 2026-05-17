---
source: https://linux.die.net/man/8/useradd
published:
created: 2026-04-06
tags:
  - tool/dev
  - tool/linux
  - tool/cli
---
## Name

useradd - create a new user or update default new user information

## Synopsis

**useradd** \[*options*\] *LOGIN*

**useradd** -D

**useradd** -D \[*options*\]

## Description

When invoked without the **\-D** option, the **useradd** command creates a new user account using the values specified on the command line plus the default values from the system. Depending on command line options, the **useradd** command will update system files and may also create the new user's home directory and copy initial files.

By default, a group will also be created for the new user (see **\-g**, **\-N**, **\-U**, and **USERGROUPS\_ENAB**).

## Options

The options which apply to the **useradd** command are:

**\-b**, **\--base-dir** *BASE\_DIR*

The default base directory for the system if **\-d** *HOME\_DIR* is not specified. *BASE\_DIR* is concatenated with the account name to define the home directory. If the **\-m** option is not used, *BASE\_DIR* must exist.

If this option is not specified, **useradd** will use the base directory specified by the **HOME** variable in /etc/default/useradd, or /home by default.

**\-c**, **\--comment** *COMMENT*

Any text string. It is generally a short description of the login, and is currently used as the field for the user's full name.

**\-d**, **\--home** *HOME\_DIR*

The new user will be created using *HOME\_DIR* as the value for the user's login directory. The default is to append the *LOGIN* name to *BASE\_DIR* and use that as the login directory name. The directory *HOME\_DIR* does not have to exist but will not be created if it is missing.

**\-D**, **\--defaults**

See below, the subsection "Changing the default values".

**\-e**, **\--expiredate** *EXPIRE\_DATE*

The date on which the user account will be disabled. The date is specified in the format *YYYY-MM-DD*.

If not specified, **useradd** will use the default expiry date specified by the **EXPIRE** variable in /etc/default/useradd, or an empty string (no expiry) by default.

**\-f**, **\--inactive** *INACTIVE*

The number of days after a password expires until the account is permanently disabled. A value of 0 disables the account as soon as the password has expired, and a value of -1 disables the feature.

If not specified, **useradd** will use the default inactivity period specified by the **INACTIVE** variable in /etc/default/useradd, or -1 by default.

**\-g**, **\--gid** *GROUP*

The group name or number of the user's initial login group. The group name must exist. A group number must refer to an already existing group.

If not specified, the bahavior of **useradd** will depend on the **USERGROUPS\_ENAB** variable in /etc/login.defs. If this variable is set to *yes* (or **\-U/--user-group** is specified on the command line), a group will be created for the user, with the same name as her loginname. If the variable is set to *no* (or **\-N/--no-user-group** is specified on the command line), useradd will set the primary group of the new user to the value specified by the **GROUP** variable in /etc/default/useradd, or 100 by default.

**\-G**, **\--groups** *GROUP1* \[*,GROUP2,...*\[*,GROUPN*\]\]\]

A list of supplementary groups which the user is also a member of. Each group is separated from the next by a comma, with no intervening whitespace. The groups are subject to the same restrictions as the group given with the **\-g** option. The default is for the user to belong only to the initial group.

**\-h**, **\--help**

Display help message and exit.

**\-k**, **\--skel** *SKEL\_DIR*

The skeleton directory, which contains files and directories to be copied in the user's home directory, when the home directory is created by **useradd**.

This option is only valid if the **\-m** (or **\--create-home**) option is specified.

If this option is not set, the skeleton directory is defined by the **SKEL** variable in /etc/default/useradd or, by default, /etc/skel.

**\-K**, **\--key** *KEY* = *VALUE*

Overrides /etc/login.defs defaults (**UID\_MIN**, **UID\_MAX**, **UMASK**, **PASS\_MAX\_DAYS** and others).

Example: **\-K** *PASS\_MAX\_DAYS* = *\-1* can be used when creating system account to turn off password ageing, even though system account has no password at all. Multiple **\-K** options can be specified, e.g.: **\-K** *UID\_MIN* = *100* **\-K** *UID\_MAX* = *499*

Note: **\-K** *UID\_MIN* = *10*,*UID\_MAX* = *499* doesn't work yet.

**\-l**, **\--no-log-init**

Do not add the user to the lastlog and faillog databases.

By default, the user's entries in the lastlog and faillog databases are resetted to avoid reusing the entry from a previously deleted user.

**\-m**, **\--create-home**

Create the user's home directory if it does not exist. The files and directories contained in the skeleton directory (which can be defined with the **\-k** option) will be copied to the home directory.

useradd will create the home directory unless **CREATE\_HOME** in /etc/login.defs is set to no.

**\-M**

Do not create the user's home directory, even if the system wide setting from /etc/login.defs (**CREATE\_HOME**) is set to *yes*.

**\-N**, **\--no-user-group**

Do not create a group with the same name as the user, but add the user to the group specified by the **\-g** option or by the **GROUP** variable in /etc/default/useradd.

The default behavior (if the **\-g**, **\-N**, and **\-U** options are not specified) is defined by the **USERGROUPS\_ENAB** variable in /etc/login.defs.

**\-o**, **\--non-unique**

Allow the creation of a user account with a duplicate (non-unique) UID.

This option is only valid in combination with the **\-o** option.

**\-p**, **\--password** *PASSWORD*

The encrypted password, as returned by **[crypt](https://linux.die.net/man/3/crypt)** (3). The default is to disable the password.

**Note:** This option is not recommended because the password (or encrypted password) will be visible by users listing the processes.

You should make sure the password respects the system's password policy.

**\-r**, **\--system**

Create a system account.

System users will be created with no aging information in /etc/shadow, and their numeric identifiers are choosen in the **SYS\_UID\_MIN** - **SYS\_UID\_MAX** range, defined in /etc/login.defs, instead of **UID\_MIN** - **UID\_MAX** (and their **GID** counterparts for the creation of groups).

Note that **useradd** will not create a home directory for such an user, regardless of the default setting in /etc/login.defs (**CREATE\_HOME**). You have to specify the **\-m** options if you want a home directory for a system account to be created.

**\-s**, **\--shell** *SHELL*

The name of the user's login shell. The default is to leave this field blank, which causes the system to select the default login shell specified by the **SHELL** variable in /etc/default/useradd, or an empty string by default.

**\-u**, **\--uid** *UID*

The numerical value of the user's ID. This value must be unique, unless the **\-o** option is used. The value must be non-negative. The default is to use the smallest ID value greater than 999 and greater than every other user. Values between 0 and 999 are typically reserved for system accounts.

**\-U**, **\--user-group**

Create a group with the same name as the user, and add the user to this group.

The default behavior (if the **\-g**, **\-N**, and **\-U** options are not specified) is defined by the **USERGROUPS\_ENAB** variable in /etc/login.defs.

**\-Z**, **\--selinux-user** *SEUSER*

The SELinux user for the user's login. The default is to leave this field blank, which causes the system to select the default SELinux user.

**Changing the default values**

When invoked with only the **\-D** option, **useradd** will display the current default values. When invoked with **\-D** plus other options, **useradd** will update the default values for the specified options. Valid default-changing options are:

**\-b**, **\--base-dir** *BASE\_DIR*

The path prefix for a new user's home directory. The user's name will be affixed to the end of *BASE\_DIR* to form the new user's home directory name, if the **\-d** option is not used when creating a new account.

This option sets the **HOME** variable in /etc/default/useradd.

**\-e**, **\--expiredate** *EXPIRE\_DATE*

The date on which the user account is disabled.

This option sets the **EXPIRE** variable in /etc/default/useradd.

**\-f**, **\--inactive** *INACTIVE*

The number of days after a password has expired before the account will be disabled.

This option sets the **INACTIVE** variable in /etc/default/useradd.

**\-g**, **\--gid** *GROUP*

The group name or ID for a new user's initial group (when the **\-N/--no-user-group** is used or when the **USERGROUPS\_ENAB** variable is set to *no* in /etc/login.defs. The named group must exist, and a numerical group ID must have an existing entry.

This option sets the **GROUP** variable in /etc/default/useradd.

**\-s**, **\--shell** *SHELL*

The name of a new user's login shell.

This option sets the **SHELL** variable in /etc/default/useradd.

## Notes

The system administrator is responsible for placing the default user files in the /etc/skel/ directory (or any other skeleton directory specified in /etc/default/useradd or on the command line).

## Caveats

You may not add a user to a NIS or LDAP group. This must be performed on the corresponding server.

Similarly, if the username already exists in an external user database such as NIS or LDAP, **useradd** will deny the user account creation request.

Usernames may only be up to 32 characters long.

## Configuration

The following configuration variables in /etc/login.defs change the behavior of this tool:

**CREATE\_HOME** (boolean)

Indicate if a home directory should be created by default for new users.

This setting does not apply to system users, and can be overriden on the command line.

**GID\_MAX** (number), **GID\_MIN** (number)

Range of group IDs used for the creation of regular groups by **useradd**, **groupadd**, or **newusers**.

**MAIL\_DIR** (string)

The mail spool directory. This is needed to manipulate the mailbox when its corresponding user account is modified or deleted. If not specified, a compile-time default is used.

**MAIL\_FILE** (string)

Defines the location of the users mail spool files relatively to their home directory.

The **MAIL\_DIR** and **MAIL\_FILE** variables are used by **useradd**, **usermod**, and **userdel** to create, move, or delete the user's mail spool.

If **MAIL\_CHECK\_ENAB** is set to *yes*, they are also used to define the **MAIL** environment variable.

**MAX\_MEMBERS\_PER\_GROUP** (number)

Maximum members per group entry. When the maximum is reached, a new group entry (line) is started in /etc/group (with the same name, same password, and same GID).

The default value is 0, meaning that there are no limits in the number of members in a group.

This feature (split group) permits to limit the length of lines in the group file. This is useful to make sure that lines for NIS groups are not larger than 1024 characters.

If you need to enforce such limit, you can use 25.

Note: split groups may not be supported by all tools (even in the Shadow toolsuite). You should not use this variable unless you really need it.

**PASS\_MAX\_DAYS** (number)

The maximum number of days a password may be used. If the password is older than this, a password change will be forced. If not specified, -1 will be assumed (which disables the restriction).

**PASS\_MIN\_DAYS** (number)

The minimum number of days allowed between password changes. Any password changes attempted sooner than this will be rejected. If not specified, -1 will be assumed (which disables the restriction).

**PASS\_WARN\_AGE** (number)

The number of days warning given before a password expires. A zero means warning is given only upon the day of expiration, a negative value means no warning is given. If not specified, no warning will be provided.

**SYS\_GID\_MAX** (number), **SYS\_GID\_MIN** (number)

Range of group IDs used for the creation of system groups by **useradd**, **groupadd**, or **newusers**.

**SYS\_UID\_MAX** (number), **SYS\_UID\_MIN** (number)

Range of user IDs used for the creation of system users by **useradd** or **newusers**.

**UID\_MAX** (number), **UID\_MIN** (number)

Range of user IDs used for the creation of regular users by **useradd** or **newusers**.

**UMASK** (number)

The file mode creation mask is initialized to this value. If not specified, the mask will be initialized to 022.

**useradd** and **newusers** use this mask to set the mode of the home directory they create

It is also used by **login** to define users' initial umask. Note that this mask can be overriden by the user's GECOS line (if **QUOTAS\_ENAB** is set) or by the specification of a limit with the *K* identifier in **limits** (5).

**USERGROUPS\_ENAB** (boolean)

Enable setting of the umask group bits to be the same as owner bits (examples: 022 -> 002, 077 -> 007) for non-root users, if the uid is the same as gid, and username is the same as the primary group name.

If set to *yes*, **userdel** will remove the user's group if it contains no more members, and **useradd** will create by default a group with the name of the user.

## Files

/etc/passwd

User account information.

/etc/shadow

Secure user account information.

/etc/group

Group account information.

/etc/gshadow

Secure group account information.

/etc/default/useradd

Default values for account creation.

/etc/skel/

Directory containing default files.

/etc/login.defs

Shadow password suite configuration.

## Exit Values

The **useradd** command exits with the following values:

*0*

success

*1*

can't update password file

*2*

invalid command syntax

*3*

invalid argument to option

*4*

UID already in use (and no **\-o**)

*6*

specified group doesn't exist

*9*

username already in use

*10*

can't update group file

*12*

can't create home directory

*13*

can't create mail spool

*14*

can't update SELinux user mapping

(8), (8), (8), (8)