#!/bin/bash
set -euo pipefail
IFS=$' \n\t'
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

echo "cloning reveal.js..."
git clone https://github.com/hakimel/reveal.js reveal || true
pushd reveal
git stash
git checkout 4.2.1

echo "installing dependencies..."
rm -v package-lock.json
yarn install

echo "building reveal.js..."
yarn run gulp default
popd

echo "creating public dir..."
rm -rv public || true
mkdir -v public

echo "moving files..."
mv -v reveal/{dist,plugin} public
# missing, to be created by other script: index.html, lib, images, *.md

echo "creating symlinks..."
ln -sv public/dist dist
ln -sv public/plugin plugin

