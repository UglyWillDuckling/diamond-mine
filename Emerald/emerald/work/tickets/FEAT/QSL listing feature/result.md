
Failed to import qsl listing **229708069**
Error: SQL error: "unique id constraint violation occcured
Query was: 'SELECT * FROM listing WHERE id=;'"

---
Failed to import qsl listing 229902775
Error: something went wrong for record 229902775
Failed to import qsl listing 229450253

Exception thrown with message "something went wrong for record 229465681"

Stacktrace:
#5 Exception in /home/meilleursagents/share/Backyard/DefaultQSLImport.php:36
#4 Share\Backyard\DefaultQSLImport:process in /home/meilleursagents/share/Backyard/DefaultQSLImport.php:30
#3 Share\Backyard\DefaultQSLImport:Share\Backyard\{closure} in /home/meilleursagents/framework/helpers.functions.inc:249
#2 on_each in /home/meilleursagents/share/Backyard/DefaultQSLImport.php:30
#1 Share\Backyard\DefaultQSLImport:__invoke in /home/meilleursagents/backyard/listing/qsl_listing_import.php:24
#0 require in /home/meilleursagents/backyard/app.php:260

