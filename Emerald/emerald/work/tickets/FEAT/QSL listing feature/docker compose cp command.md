---
related:
  - "[[docker]]"
  - "[[docker compose]]"
tags:
  - command
---
  The  docker-compose cp  command is used to copy files/directories between a
  running container and the local machine or between containers.

  The basic syntax for this command is as follows:

    docker-compose cp [OPTIONS] SERVICE:SRC_PATH DEST_PATH

  Where:

  •  OPTIONS : Optional flags to modify the behavior of the command.
  •  SERVICE : The name of the service in the  docker-compose.yml  file.
  •  SRC_PATH : The path to the file or directory in the container that you
  want to copy.
  •  DEST_PATH : The path on the local machine or in another container where
  you want to copy the file or directory to.

  For example, to copy a file called  app.config  from a running container
  with the service name  web  to the local machine, you would use the
  following command:

    docker-compose cp web:/app/app.config .

  This would copy the  app.config  file from the  /app  directory in the  web
  container to the current directory on the local machine.

  Similarly, to copy a directory called  logs  from a running container with
  the service name  db  to another container with the service name  logstash ,
  you would use the following command:

    docker-compose cp db:/var/log/ postgres:/var/log/

  This would copy the  logs  directory from the  db  container to the
  /var/log/  directory in the  logstash  container.
