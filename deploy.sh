#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build
yarn build

# # 进入生成的文件夹
# cd blog/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME


# 提交到历史区，$1 为运行 sh 时的第一个参数
git add -A
# if [!$1]
if [ x$1 != x ]
then
    #...有参数
    git commit -m $1
else
then
    #...没有参数
    git commit -m "quick deploy"
fi

# 提交到 master 分支
git push origin master


# 发布到 https://<USERNAME>.github.io/<REPO> 
# 需要先cd 到dist文件夹. 然后push.
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 或者不换目录,直接用subtree push 将 dist 文件夹提交到 gh-pages 分支
git subtree push --prefix blog/.vuepress/dist origin gh-pages

cd -

# 退出命令
exit 0