#!/bin/bash

set -o pipefail

(date && git pull) | tee -a log/update.log 2>&1
