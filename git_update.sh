#!/bin/bash

set -o pipefail

(date && git pull) | tee log/update.log 2>&1
