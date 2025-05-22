---
source: https://linuxgenie.net/install-postgresql-psql-arch-linux/
author:
  - "[[Kashif Javed]]"
published: 2024-01-31
created: 2025-04-09
tags:
  - howto/postgres/arch
---
PostgreSQL (Postgres) is an open-source and community-driven object-relational database system. PostgreSQL lets you enter queries and see the results right away. It lets you store and manage data for free. It is made by a group of developers based on C language. You can use Postgres to query data in different ways, such as SQL or JSON.

To use PostgreSQL (psql) on Arch Linux, you need to install PostgreSQL from the default Arch repository, which is Pacman. Then you can connect to a PostgreSQL server using the ***psql*** command. Using this command you have to specify the name of the host, port, and database you are going to connect.

This article will show you the installation of PostgreSQL (psql) on the Arch system.

## Installation of PostgreSQL

First, make sure your system is up-to-date by running this command:

```
sudo pacman -Syu
```

![[~/×/12ae6fa9e10f90f7056de0ad018ee553_MD5.png]]

The above command will update the system packages and synchronize the package database with the server. It also upgrades all the packages that are out of date.

Next, install PostgreSQL from the official repository by running this command:

```
sudo pacman -S postgresql
```

![[~/×/a7055c64b9232390eb436105b9f8f98a_MD5.png]]

To check if the installation was successful, run this command:

```
postgres --version
```

![[~/×/bb988fa4a0a096e1c6ee6bbe02d4a740_MD5.png]]

## Configure PostgreSQL Server

To configure the PostgreSQL server on Arch Linux, you need to install the Postgresql package. After that, you can start the service by initializing the database cluster. You can define a password for the super-user, and create databases and tables.

Now follow these steps to configure the PostgreSQL on the Arch Linux system:

As we have already installed PostgreSQL, now we have to configure PostgreSQL. For that first, switch to the Postgres user with this command:

```
sudo -iu postgres
```

![[~/×/b67929ea4e489d5cc7e00e81c8ca34cd_MD5.png]]

You will be prompted to enter the password and give your Arch system password.

Now, you need to initialize the directory for data. The PostgreSQL will store its data inside this directory. You can use the default location */var/lib/postgres/data* or choose a different one. To initialize the data directory, run this command:

```sh
initdb --locale $LANG -E UTF8 -D '/var/lib/postgres/data/'
```

![[~/×/ff3407d3d9e99647d7f0cc26ed585756_MD5.png]]

You can also enable data checksums for extra data integrity by adding the *–data-checksums* argument to the previous command. To see if data checksums are enabled, run this command:

```sh
psql --tuples-only -c "SHOW data_checksums"
```

![[~/×/7f2f4a29d1a9f171952a52f2d57274b1_MD5.png]]

To initialize the data directory with data checksums enabled, you can run this command:

```
initdb --locale $LANG -E UTF8 -D '/var/lib/postgres/data/' --data-checksums
```

![[~/×/3eb5b990c285e46f2c07a25fbc4250da_MD5.png]]

This will create a new data directory at */var/lib/postgres/data/* with the specified locale and encoding. In addition, it also performs data checksum verification for each page written to disk. This can help detect data corruption caused by faulty hardware.

You can also change the authentication methods for local and remote connections by adding the below-given argument to the previous command:

```sh
--auth-local=peer --auth-host=scram-sha-256
```

The default method is trust, which means anyone on the host can connect as any database user. This is not very secure, so you may use a different method.

## Enable the PostgreSQL Server

After initializing the data directory, you need to start the PostgreSQL server. For that, you can run this command:

```sh
systemctl start postgresql
```

You will be required to enter your Arch system password. Enter the password for authentication.

Now check the status of the PostgreSQL server by running this command:

```
systemctl status postgresql
```

Finally, now enable the PostgreSQL server. By doing this, the PostgreSQL server will auto-start at boot:

```
systemctl enable postgresql
```

You may be prompted to enter the system password.

Next, create a user for the PostgreSQL server and give it access to the PostgreSQL server. Exit the current session by pressing the ***Ctrl + D*** or typing ***\\q*** to log out of the session.

## **Creating** a New User in PostgreSQL Server on Arch Linux

To create a new user in PostgreSQL on Arch Linux, you can use the *createuser* utility or the *CREATE USER* SQL command. Both methods require you to connect with the server as a Postgres user.

First switch to the Postgres default user using this command:

```
sudo -u postgres psql
```

Now run the CREATE USER command to create a new user. Different options can be used with this command like setting passwords, defining roles, and giving privileges.

```sql
CREATE USER username WITH ENCRYPTED PASSWORD 'password';
```
> Replace your credentials in the above command.

Similarly, you can also pass the DATABASE argument to the CREATE command:

```sql
CREATE DATABASE dbname;
```

This command creates a new database with the name dbname. Unless specified otherwise with the OWNER clause, the database will be owned by the user who executes the command.

Now to grant all the permission to your desired user on the database, run this command:

```sql
GRANT ALL PRIVILEGES ON DATABASE dbname TO username;
```
> This command will give database privileges to the defined user. 

**Now this user can connect to the database, and create schemas, tables, functions, and other objects.**

## Conclusion

PostgreSQL (Postgres) is an open-source database system. Using it, you can enter queries and see the results right away. To get PostgreSQL on the Arch system, you can use the default Pacman package manager tool. Once installed, you can define the hostname along with the port and database you want to connect. While setting the PostgreSQL server, make sure to enable data checksums for extra data integrity and change the authentication methods for local and remote connections. For any further query related to the PostgreSQL installation, check the article.