#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


git add .
git commit -m 'update'
git push
# 生成静态文件
npm run build

# 进入生成的文件夹
cd _site

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/bao2333/bao2333.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:xhsdnn/vuepress-proj.git master:gh-pages

cd -