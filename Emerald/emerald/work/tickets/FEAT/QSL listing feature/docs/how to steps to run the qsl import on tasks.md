about:: [[AWS import]], [[QSL listing feature]]

### **Steps** to run the qsl import manually on [[backyard-tasks]] [^1]

 1. `ssh`
	 1. **login** as meilleursagents: `sudo su - meilleursagents`
		 1. **source** the env vars: `set -a; source ~/env.sh; set +a`
		 2. **go** to `/srv/malegacy/current`
		 3. **run** the script: `./backyard/listing/qsl_import.sh | tee result`

[^1]: [[QSL Import]]