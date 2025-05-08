about:: [[AWS import]], [[QSL listing feature]]
## **Steps** to run the qsl import manually on [[backyard-tasks]] 
[^1]

 1. `ssh`
 2. **login** as meilleursagents: `sudo su - meilleursagents`
 3. **source** the env vars: `set -a; source ~/env.sh; set +a`
 4. **go** to `/srv/malegacy/current`
 5. **run** the script: `./backyard/listing/qsl_import.sh | tee result`

[^1]: [[QSL Import]]