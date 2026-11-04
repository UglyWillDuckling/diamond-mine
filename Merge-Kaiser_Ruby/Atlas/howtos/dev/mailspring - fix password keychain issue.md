#howto/mailspring/fix

source:: [Password Management Error - Help - Mailspring Community](https://community.getmailspring.com/t/password-management-error/199)
___
## KDE 6

On KDE 6 you might need to force Mailspring to use the kwallet5 instead of kwallet6. Try running Mailspring from the terminal while forcing Mailspring to encrypt your passwords using the kwallet5 backend:

mailspring --password-store="kwallet5"
If Mailspring is now able to store your credentials, manually add this flag to the /usr/share/applications/Mailspring.desktop file, so that the Exec line looks as follows:

Exec=mailspring --password-store="kwallet5" %U
