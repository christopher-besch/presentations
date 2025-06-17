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

cd $DIR

echo "cloning reveal.js..."
git clone https://github.com/hakimel/reveal.js reveal || true
# change directory
pushd reveal
git stash
git fetch
# in case the reveal directory already existed
git checkout 5.2.1

echo "installing custom themes..."
cp -v ../theme/source/* ./css/theme/source
cp -v ../theme/template/* ./css/theme/template

echo "installing yarn dependencies..."
rm -v package-lock.json || true
yarn install

echo "building reveal.js..."
yarn run build
popd

echo "creating public dir..."
rm -rv public || true
mkdir -v public

echo "copying reveal output files..."
cp -rv reveal/{dist,plugin} public

echo "copying static files"
cp -vr static public/static

echo "copying vendor dependencies (reveal.js plugins)..."
cp -rv vendor public/vendor

echo "downloading precompiled dependencies..."
rm -rfv public/dwn_vendor
mkdir public/dwn_vendor
wget https://github.com/KaTeX/KaTeX/releases/download/v0.16.22/katex.tar.gz -O public/dwn_vendor/katex.tar.gz

echo "extracting precompiled dependencies..."
pushd public/dwn_vendor
tar xfv katex.tar.gz
rm -v katex.tar.gz
# katex needs weird dist directory
mv katex temp
mkdir katex
mv temp katex/dist
popd

echo "copying presentations..."
find . \
    -regex './[0-9][0-9][0-9][0-9]_[0-9][0-9]_[0-9][0-9]_[^/]+' \
    -exec cp -rv {} public \;

echo "creating table of contents page..."
find . \
    -regex './[0-9][0-9][0-9][0-9]_[0-9][0-9]_[0-9][0-9]_[^/]+' \
    -exec echo "<a href='{}'>{}</a><br />" \; | sort > public/index.html

echo "creating symlinks for development..."
ln -svf public/dist dist
ln -svf public/plugin plugin
ln -svf public/dwn_vendor dwn_vendor
ln -svf public/index.html index.html

