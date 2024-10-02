#!/bin/bash

set -o pipefail

(date && git pull) >>log/update.log 2>&1
