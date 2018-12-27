### 假设有两个分支一个是上线版本，一个是开发版本(目前是我已知的解决方案)
关键
>git merge --no-commit --no-ff dev;//核心关键

环境为Win10；
<ol>
<li>先执行在当前项目根目录初始化

>git init;
<li>创建一个文件叫index.js 内容为 master

>echo "master" > index.js;

<li>再创建一个叫gulpfile.js 内容为 当前为master配置1

>echo "当前为master配置1"  > gulpfile.js;

<li>添加到暂存区中

>git add \*.\* ;

<li>提交当前版本 初始化项目的master 主分支

>git commit -m "initialize project master";

<hr> <hr>

<li>创建开发版本分支为dev

>git checkout -b dev; 

<li>开启支持合并忽略部分文件功能

<li>创建index.js 追加dev 内容

>echo "dev" >> index.js; 

<li>重新定义gulpfile.js 文件内容,已做区分

>echo "当前为dev配置2"  > gulpfile.js;

<li>保存到当前暂存区

>git add *.*;

<li>提交dev 分支内容

>git commit -m "initialize dev";

<li>切换到master 主分支 

>git checkout master; 

<li>接下要合并分支 ,合并暂时不提交，保存到暂存区

`关键`
>git merge --no-commit --no-ff dev;//核心关键

<li>把gulpfile 拉回工作区

>git reset HEAD gulpfile.js

<li>然后再提交合并内容

>git commit -m "first merga"

<li>撤销合并时覆盖的内容，恢复原状

>git checkout -- gulpfile.js

<li>切换到dev 查看内容

>git checkout dev;

这样就合并分支，虽然两个分支文件都不同，但我只需要合并index，忽略的部分为配置项不需要合并，达到两个版本 开发互相影响，互相独立

```git
一次性执行当前代码展示效果
在powershell执行

git init; 
echo "master" > index.js; 
echo "当前为master配置1" > gulpfile.js; 
git add *.* ; 
git commit -m "initialize project master";

git checkout -b dev;  
echo "dev" >> index.js;
echo "当前为dev配置2" > gulpfile.js;
git add *.*;
git commit -m "initialize dev";

git checkout master;
git merge --no-commit --no-ff dev;
git reset HEAD gulpfile.js;
git commit -m "first merga";
git checkout -- gulpfile.js
git checkout dev;
```
