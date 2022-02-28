#!/bin/bash
set -euo pipefail
IFS=$' \n\t'
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

echo "building..."
./build.sh

echo "moving presentations..."
find . -maxdepth 1 -mindepth 1 -type d -not -path "./.*" -not -path "./reveal" -not -path "./public" -exec cp -rv {} public \;
