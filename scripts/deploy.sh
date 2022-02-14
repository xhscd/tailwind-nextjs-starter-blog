#!/bin/bash
cd /data/www
# 删除原静态资源目录
rm -rf ./admin/*
rm -rf ./deploy/blog-admin
# 解压新的包
cd ./deploy
unzip blog-admin.zip
# 将解压出的public目录移动到服务端程序目录BBB中
mv /data/www/deploy/blog-admin/* /data/www/admin
