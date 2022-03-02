#!/bin/bash
# MIT License

# Copyright (c) 2022 Christopher Besch

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

set -euo pipefail
IFS=$' \n\t'
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

echo "cloning reveal.js..."
git clone https://github.com/hakimel/reveal.js reveal || true
pushd reveal
git stash
git checkout 4.2.1

echo "installing custom themes..."
cp ../theme/* ./css/theme/source

echo "installing dependencies..."
rm -v package-lock.json
yarn install

echo "building reveal.js..."
yarn run build
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

