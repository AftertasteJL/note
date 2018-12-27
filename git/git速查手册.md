一、 Git 常用命令速查
<ol> 

<li> 

>git branch 查看本地所有分支 
<li> 

>git status 查看当前状态 

<li> 

>git commit 提交 

<li> 

>git branch -a 查看所有的分支

 
<li> 

>git branch -r 查看远程所有分支


<li> 

>git commit -am "init" 提交并且加注释 


<li> 

>git remote add origin 
<li> 

>git@192.168.1.119:ndshow
<li

<li> 

>git push origin master 将文件给推到服务器上 


<li> 

>git remote show origin 显示远程库origin里的资源 


<li> 

>git push origin master:develop


<li> 

>git push origin master:hb-dev 将本地库与服务器上的库进行关联 
 

<li> 

>git checkout --track origin/dev 切换到远程dev分支
 

<li> 

>git branch -D master develop 删除本地库develop

<li> 

>git checkout -b dev 建立一个新的本地分支dev

<li> 

>git merge origin/dev 将分支dev与当前分支进行合并

<li> 

>git checkout dev 切换到本地dev分支

<li> 

>git remote show 查看远程库 

<li> 

>git add .


<li> 

>git rm 文件名(包括路径) 从git中删除指定文件


<li> 

>git clone 
<li> 

>git://github.com/schacon/grit.
<li> 

>git 从服务器上将代码给拉下来


<li> 

>git config --list 看所有用户


<li> 

>git ls-files 看已经被提交的


<li> 

>git rm [file name] 删除一个文件


<li> 

>git commit -a 提交当前repos的所有的改变


<li> 

>git add [file name] 添加一个文件到git index


<li> 

>git commit -v 当你用－v参数的时候可以看commit的差异


<li> 

>git commit -m "This is the message describing the commit" 添加commit信息


<li> 

>git commit -a -a是代表add，把所有的change加到git index里然后再commit


<li> 

>git commit -a -v 一般提交命令


<li> 

>git log 看你commit的日志


<li> 

>git diff 查看尚未暂存的更新


<li> 

>git rm a.a 移除文件(从暂存区和工作区中删除)


<li> 

>git rm --cached a.a 移除文件(只从暂存区中删除)


<li> 

>git commit -m "remove" 移除文件(从Git中删除)


<li> 

>git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)


<li> 

>git diff --cached 或 $ 
<li> 

>git diff --staged 查看尚未提交的更新


<li> 

>git stash push 将文件给push到一个临时空间中


<li> 

>git stash pop 将文件从临时空间pop下来

---------------------------------------------------------


<li> 

>git remote add origin 
<li> 

>git@github.com:username/Hello-World.
<li> 

>git


<li> 

>git push origin master 将本地项目给提交到服务器中

-----------------------------------------------------------


<li> 

>git pull 本地与服务器端同步

-----------------------------------------------------------------


<li> 

>git push (远程仓库名) (分支名) 将本地分支推送到服务器上去。


<li> 

>git push origin serverfix:awesomebranch

------------------------------------------------------------------


<li> 

>git fetch 相当于是从远程获取最新版本到本地，不会自动merge


<li> 

>git commit -a -m "log_message" (-a是提交所有改动，-m是加入log信息) 本地修改同步至服
务器端 ：


<li> 

>git branch branch_0.1 master 从主分支master创建branch_0.1分支


<li> 

>git branch -m branch_0.1 branch_1.0 将branch_0.1重命名为branch_1.0


<li> 

>git checkout branch_1.0/master 切换到branch_1.0/master分支

du -hs


<li> 

>git branch 删除远程branch

<li> 

>git push origin :branch_remote_name

<li> 

>git branch -r -d branch_remote_name
-----------------------------------------------------------

<li> 

>初始化版本库，并提交到远程服务器端
<li> 

>mkdir WebApp
<li> 

>cd WebApp
<li> 

>git init 本地初始化
<li> 

>touch README
<li> 

>git add README 添加文件
<li> 

>git commit -m 'first commit'
<li> 

>git remote add origin 
<li> 

>git@github.com:daixu/WebApp.
<li> 

>git
<li> 

>增加一个远程服务器端
<li> 

>上面的命令会增加URL地址为'
<li> 

>git@github.com:daixu/WebApp.
<li> 

>git'，名称为origin的远程服务器库，以后提交代码的时候只需要使用 origin别名即可
<li> 

>二、 Git 命令速查表
<li> 

>1、常用的Git命令
<li> 

>命令
<li> 

>简要说明
<li> 

>git add
<li> 

>添加至暂存区
<li> 

>git add–interactive
<li> 

>交互式添加
<li> 

>git apply
<li> 

>应用补丁
<li> 

>git am
<li> 

>应用邮件格式补丁
<li> 

>git annotate
<li> 

>同义词，等同于 
<li> 

>git blame
<li> 

>git archive
<li> 

>文件归档打包
<li> 

>git bisect
<li> 

>二分查找
<li> 

>git blame

<li> 

>文件逐行追溯
<li> 

>git branch
<li> 

>分支管理
<li> 

>git cat-file
<li> 

>版本库对象研究工具
<li> 

>git checkout
<li> 

>检出到工作区、切换或创建分支
<li> 

>git cherry-pick
<li> 

>提交拣选
<li> 

>git citool
<li> 

>图形化提交，相当于 
<li> 

>git gui 命令
<li> 

>git clean
<li> 

>清除工作区未跟踪文件
<li> 

>git clone
<li> 

>克隆版本库
<li> 

>git commit
<li> 

>提交
<li> 

>git config
<li> 

>查询和修改配置
<li> 

>git describe
<li> 

>通过里程碑直观地显示提交ID
<li> 

>git diff
<li> 

>差异比较
<li> 

>git difftool
<li> 

>调用图形化差异比较工具
<li> 

>git fetch
获取远程版本库的提交


 <li> 

>git format-patch

创建邮件格式的补丁文件。参见 
<li> 

>git am 命令


<li> 

>git grep

文件内容搜索定位工具


<li> 

>git gui

基于Tcl/Tk的图形化工具，侧重提交等操作


<li> 

>git help

帮助


<li> 

>git init

版本库初始化


<li> 

>git init-db*

同义词，等同于 
<li> 

>git init


<li> 

>git log

显示提交日志


<li> 

>git merge

分支合并


<li> 

>git mergetool

图形化冲突解决


<li> 

>git mv

重命名


<li> 

>git pull

拉回远程版本库的提交


<li> 

>git push

推送至远程版本库


<li> 

>git rebase

分支变基


<li> 

>git rebase–interactive

交互式分支变基


<li> 

>git reflog

分支等引用变更记录管理


<li> 

>git remote

远程版本库管理


<li> 

>git repo-config*

同义词，等同于 
<li> 

>git config


<li> 

>git reset

重置改变分支“游标”指向


<li> 

>git rev-parse

将各种引用表示法转换为哈希值等


<li> 

>git revert

反转提交


<li> 

>git rm

删除文件


<li> 

>git show

显示各种类型的对象


<li> 

>git stage*

同义词，等同于 
<li> 

>git add


<li> 

>git stash

保存和恢复进度


<li> 

>git status

显示工作区文件状态


<li> 

>git tag

里程碑管理


2、对象库操作相关命令

命令

简要说明


<li> 

>git commit-tree

从树对象创建提交


<li> 

>git hash-object

从标准输入或文件计算哈希值或创建对象


<li> 

>git ls-files

显示工作区和暂存区文件


<li> 

>git ls-tree

显示树对象包含的文件


<li> 

>git mktag

读取标准输入创建一个里程碑对象


<li> 

>git mktree

读取标准输入创建一个树对象


<li> 

>git read-tree

读取树对象到暂存区


<li> 

>git update-index

工作区内容注册到暂存区及暂存区管理


<li> 

>git unpack-file

创建临时文件包含指定 blob 的内容


<li> 

>git write-tree

从暂存区创建一个树对象


3、引用操作相关命令

命令

简要说明


<li> 

>git check-ref-format

检查引用名称是否符合规范


<li> 

>git for-each-ref

引用迭代器，用于shell编程


<li> 

>git ls-remote

显示远程版本库的引用


<li> 

>git name-rev

将提交ID显示为友好名称


<li> 

>git peek-remote*

过时命令，请使用 
<li> 

>git ls-remote


<li> 

>git rev-list

显示版本范围


<li> 

>git show-branch

显示分支列表及拓扑关系


<li> 

>git show-ref

显示本地引用


<li> 

>git symbolic-ref

显示或者设置符号引用


<li> 

>git update-ref

更新引用的指向


<li> 

>git verify-tag

校验 GPG 签名的Tag


4、版本库管理相关命令

命令

简要说明


<li> 

>git count-objects

显示松散对象的数量和磁盘占用


<li> 

>git filter-branch

版本库重构


<li> 

>git fsck

对象库完整性检查


<li> 

>git fsck-objects*

同义词，等同于 
<li> 

>git fsck


<li> 

>git gc

版本库存储优化


<li> 

>git index-pack

从打包文件创建对应的索引文件


<li> 

>git lost-found*

过时，请使用 
<li> 

>git fsck –lost-found 命令


<li> 

>git pack-objects

从标准输入读入对象ID，打包到文件


<li> 

>git pack-redundant

查找多余的 pack 文件


<li> 

>git pack-refs

将引用打包到 .
<li> 

>git/packed-refs 文件中


<li> 

>git prune

从对象库删除过期对象


<li> 

>git prune-packed

将已经打包的松散对象删除


<li> 

>git relink

为本地版本库中相同的对象建立硬连接


<li> 

>git repack

将版本库未打包的松散对象打包


<li> 

>git show-index

读取包的索引文件，显示打包文件中的内容


<li> 

>git unpack-objects

从打包文件释放文件


<li> 

>git verify-pack

校验对象库打包文件


5、数据传输相关命令

命令

简要说明


<li> 

>git fetch-pack

执行 
<li> 

>git fetch 或 
<li> 

>git pull 命令时在本地执行此命令，用于从其他版本库获取缺失的对象


<li> 

>git receive-pack

执行 
<li> 

>git push 命令时在远程执行的命令，用于接受推送的数据


<li> 

>git send-pack

执行 
<li> 

>git push 命令时在本地执行的命令，用于向其他版本库推送数据


<li> 

>git upload-archive

执行 
<li> 

>git archive –remote 命令基于远程版本库创建归档时，远程版本库执行此命令传送归档


<li> 

>git upload-pack

执行 
<li> 

>git fetch 或 
<li> 

>git pull 命令时在远程执行此命令，将对象打包、上传


6、邮件相关命令

命令

简要说明


<li> 

>git imap-send

将补丁通过 IMAP 发送


<li> 

>git mailinfo

从邮件导出提交说明和补丁


<li> 

>git mailsplit

将 mbox 或 Maildir 格式邮箱中邮件逐一提取为文件


<li> 

>git request-pull

创建包含提交间差异和执行PULL操作地址的信息


<li> 

>git send-email

发送邮件


7、协议相关命令

命令

简要说明


<li> 

>git daemon

实现Git协议


<li> 

>git http-backend

实现HTTP协议的CGI程序，支持智能HTTP协议


<li> 

>git instaweb

即时启动浏览器通过 gitweb 浏览当前版本库


<li> 

>git shell

受限制的shell，提供仅执行Git命令的SSH访问


<li> 

>git update-server-info

更新哑协议需要的辅助文件


<li> 

>git http-fetch

通过HTTP协议获取版本库


<li> 

>git http-push

通过HTTP/DAV协议推送


<li> 

>git remote-ext

由Git命令调用，通过外部命令提供扩展协议支持


<li> 

>git remote-fd

由Git命令调用，使用文件描述符作为协议接口


<li> 

>git remote-ftp

由Git命令调用，提供对FTP协议的支持


<li> 

>git remote-ftps

由Git命令调用，提供对FTPS协议的支持


<li> 

>git remote-http

由Git命令调用，提供对HTTP协议的支持


<li> 

>git remote-https

由Git命令调用，提供对HTTPS协议的支持


<li> 

>git remote-testgit

协议扩展示例脚本


8、版本库转换和交互相关命令

命令

简要说明


<li> 

>git archimport

导入Arch版本库到Git


<li> 

>git bundle

提交打包和解包，以便在不同版本库间传递


<li> 

>git cvsexportcommit

将Git的一个提交作为一个CVS检出


<li> 

>git cvsimport

导入CVS版本库到Git。或者使用 cvs2git


<li> 

>git cvsserver

Git的CVS协议模拟器，可供CVS命令访问Git版本库


<li> 

>git fast-export

将提交导出为 
<li> 

>git-fast-import 格式


<li> 

>git fast-import

其他版本库迁移至Git的通用工具


<li> 

>git svn

Git 作为前端操作 Subversion


9、合并相关的辅助命令

命令

简要说明


<li> 

>git merge-base

供其他脚本调用，找到两个或多个提交最近的共同祖先


<li> 

>git merge-file

针对文件的两个不同版本执行三向文件合并


<li> 

>git merge-index

对index中的冲突文件调用指定的冲突解决工具


<li> 

>git merge-octopus

合并两个以上分支。参见 
<li> 

>git merge 的octopus合并策略


<li> 

>git merge-one-file

由 
<li> 

>git merge-index 调用的标准辅助程序


<li> 

>git merge-ours

合并使用本地版本，抛弃他人版本。参见 
<li> 

>git merge 的ours合并策略


<li> 

>git merge-recursive

针对两个分支的三向合并。参见 
<li> 

>git merge 的recursive合并策略


<li> 

>git merge-resolve

针对两个分支的三向合并。参见 
<li> 

>git merge 的resolve合并策略


<li> 

>git merge-subtree

子树合并。参见 
<li> 

>git merge 的 subtree 合并策略


<li> 

>git merge-tree

显式三向合并结果，不改变暂存区


<li> 

>git fmt-merge-msg

供执行合并操作的脚本调用，用于创建一个合并提交说明


<li> 

>git rerere

重用所记录的冲突解决方案


10、 杂项

命令

简要说明


<li> 

>git bisect–helper

由 
<li> 

>git bisect 命令调用，确认二分查找进度


<li> 

>git check-attr

显示某个文件是否设置了某个属性


<li> 

>git checkout-index

从暂存区拷贝文件至工作区


<li> 

>git cherry

查找没有合并到上游的提交


<li> 

>git diff-files

比较暂存区和工作区，相当于 
<li> 

>git diff –raw


<li> 

>git diff-index

比较暂存区和版本库，相当于 
<li> 

>git diff –cached –raw


<li> 

>git diff-tree

比较两个树对象，相当于 
<li> 

>git diff –raw A B


<li> 

>git difftool–helper

由 
<li> 

>git difftool 命令调用，默认要使用的差异比较工具


<li> 

>git get-tar-commit-id

从 
<li> 

>git archive 创建的 tar 包中提取提交ID


<li> 

>git gui–askpass

命令 
<li> 

>git gui 的获取用户口令输入界面


<li> 

>git notes

提交评论管理


<li> 

>git patch-id

补丁过滤行号和空白字符后生成补丁唯一ID


<li> 

>git quiltimport

将Quilt补丁列表应用到当前分支


<li> 

>git replace

提交替换


<li> 

>git shortlog

对 
<li> 

>git log 的汇总输出，适合于产品发布说明


<li> 

>git stripspace

删除空行，供其他脚本调用


<li> 

>git submodule

子模组管理


<li> 

>git tar-tree

过时命令，请使用 
<li> 

>git archive


<li> 

>git var

显示 Git 环境变量


<li> 

>git web–browse

启动浏览器以查看目录或文件


<li> 

>git whatchanged

显示提交历史及每次提交的改动


<li> 

>git-mergetool–lib

包含于其他脚本中，提供合并/差异比较工具的选择和执行


<li> 

>git-parse-remote

包含于其他脚本中，提供操作远程版本库的函数


<li> 

>git-sh-setup

包含于其他脚本中，提供 shell 编程的函数库

下面脚本之家小编特为大家分享一个图片版的

Git 常用命令速查表。点击查看大图。



Git命令参考手册(文本版)


<li> 

>git init                                                  # 初始化本地git仓库（创建新仓库） 

<li> 

>git config --global user.name "xxx"                       # 配置用户名 

<li> 

>git config --global user.email "xxx@xxx.com"              # 配置邮件 

<li> 

>git config --global color.ui true                         # 
<li> 

>git status等命令自动着色 

<li> 

>git config --global color.status auto 

<li> 

>git config --global color.diff auto 

<li> 

>git config --global color.branch auto 

<li> 

>git config --global color.interactive auto 

<li> 

>git clone 
<li> 

>git+ssh://
<li> 

>git@192.168.53.168/VT.
<li> 

>git             # clone远程仓库 

<li> 

>git status                                                # 查看当前版本状态（是否修改） 

<li> 

>git add xyz                                               # 添加xyz文件至index 

<li> 

>git add .                                                 # 增加当前子目录下所有更改过的文件至index 

<li> 

>git commit -m 'xxx'                                       # 提交 

<li> 

>git commit --amend -m 'xxx'                               # 合并上一次提交（用于反复修改） 

<li> 

>git commit -am 'xxx'                                      # 将add和commit合为一步 

<li> 

>git rm xxx                                                # 删除index中的文件 

<li> 

>git rm -r *                                               # 递归删除 

<li> 

>git log                                                   # 显示提交日志 

<li> 

>git log -1                                                # 显示1行日志 -n为n行 

<li> 

>git log -5

<li> 

>git log --stat                                            # 显示提交日志及相关变动文件 

<li> 

>git log -p -m 

<li> 

>git show dfb02e6e4f2f7b573337763e5c0013802e392818         # 显示某个提交的详细内容 

<li> 

>git show dfb02                                            # 可只用commitid的前几位 

<li> 

>git show HEAD                                             # 显示HEAD提交日志 

<li> 

>git show HEAD^                                            # 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本 

<li> 

>git tag                                                   # 显示已存在的tag 

<li> 

>git tag -a v2.0 -m 'xxx'                                  # 增加v2.0的tag 

<li> 

>git show v2.0                                             # 显示v2.0的日志及详细内容 

<li> 

>git log v2.0                                              # 显示v2.0的日志 

<li> 

>git diff                                                  # 显示所有未添加至index的变更 

<li> 

>git diff --cached                                         # 显示所有已添加index但还未commit的变更 

<li> 

>git diff HEAD^                                            # 比较与上一个版本的差异 

<li> 

>git diff HEAD -- ./lib                                    # 比较与HEAD版本lib目录的差异 

<li> 

>git diff origin/master..master                            # 比较远程分支master上有本地分支master上没有的 

<li> 

>git diff origin/master..master --stat                     # 只显示差异的文件，不显示具体内容 

<li> 

>git remote add origin 
<li> 

>git+ssh://
<li> 

>git@192.168.53.168/VT.
<li> 

>git # 增加远程定义（用于push/pull/fetch） 

<li> 

>git branch                                                # 显示本地分支 

<li> 

>git branch --contains 50089                               # 显示包含提交50089的分支 

<li> 

>git branch -a                                             # 显示所有分支 

<li> 

>git branch -r                                             # 显示所有原创分支 

<li> 

>git branch --merged                                       # 显示所有已合并到当前分支的分支 

<li> 

>git branch --no-merged                                    # 显示所有未合并到当前分支的分支 

<li> 

>git branch -m master master_copy                          # 本地分支改名 

<li> 

>git checkout -b master_copy                               # 从当前分支创建新分支master_copy并检出 

<li> 

>git checkout -b master master_copy                        # 上面的完整版 

<li> 

>git checkout features/performance                         # 检出已存在的features/performance分支 

<li> 

>git checkout --track hotfixes/BJVEP933                    # 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支

<li> 

>git checkout v2.0                                         # 检出版本v2.0

<li> 

>git checkout -b devel origin/develop                      # 从远程分支develop创建新本地分支devel并检出 

<li> 

>git checkout -- README                                    # 检出head版本的README文件（可用于修改错误回退） 

<li> 

>git merge origin/master                                   # 合并远程master分支至当前分支 

<li> 

>git cherry-pick ff44785404a8e                             # 合并提交ff44785404a8e的修改 

<li> 

>git push origin master                                    # 将当前分支push到远程master分支 

<li> 

>git push origin :hotfixes/BJVEP933                        # 删除远程仓库的hotfixes/BJVEP933分支 

<li> 

>git push --tags                                           # 把所有tag推送到远程仓库 

<li> 

>git fetch                                                 # 获取所有远程分支（不更新本地分支，另需merge） 

<li> 

>git fetch --prune                                         # 获取所有原创分支并清除服务器上已删掉的分支 

<li> 

>git pull origin master                                    # 获取远程分支master并merge到当前分支 

<li> 

>git mv README README2                                     # 重命名文件README为README2 

<li> 

>git reset --hard HEAD                                     # 将当前版本重置为HEAD（通常用于merge失败回退） 

<li> 

>git rebase 

<li> 

>git branch -d hotfixes/BJVEP933                           # 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支） 

<li> 

>git branch -D hotfixes/BJVEP933                           # 强制删除分支hotfixes/BJVEP933 

<li> 

>git ls-files                                              # 列出git index包含的文件 

<li> 

>git show-branch                                           # 图示当前分支历史 

<li> 

>git show-branch --all                                     # 图示所有分支历史 

<li> 

>git whatchanged                                           # 显示提交历史对应的文件修改 

<li> 

>git revert dfb02e6e4f2f7b573337763e5c0013802e392818       # 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818 

<li> 

>git ls-tree HEAD                                          # 内部命令：显示某个git对象 

<li> 

>git rev-parse v2.0                                        # 内部命令：显示某个ref对于的SHA1 HASH 

<li> 

>git reflog                                                # 显示所有提交，包括孤立节点 

<li> 

>git show HEAD@{5} 

<li> 

>git show master@{yesterday}                               # 显示master分支昨天的状态 

<li> 

>git log --pretty=format:'%h %s' --graph                   # 图示提交日志 

<li> 

>git show HEAD~3

<li> 

>git show -s --pretty=raw 2be7fcb476 

<li> 

>git stash                                                 # 暂存当前修改，将所有至为HEAD状态 

<li> 

>git stash list                                            # 查看所有暂存 

<li> 

>git stash show -p stash@{0}                               # 参考第一次暂存 

<li> 

>git stash apply stash@{0}                                 # 应用第一次暂存 

<li> 

>git grep "delete from"                                    # 文件中搜索文本“delete from” 

<li> 

>git grep -e '#define' --and -e SORT_DIRENT 

<li> 

>git gc  

<li> 

>git fsck