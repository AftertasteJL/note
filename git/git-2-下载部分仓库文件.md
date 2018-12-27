## git 下载仓库部分文件
替换黄色位置就可以下载部分文件了
wind10下运行git 内置的cmd

>git init myda ; cd myda ;    //新建仓库并进入文件夹

> it config core.sparsecheckout true //设置允许克隆子目录

> echo `"images"` >> .git/info/sparse-checkout //设置要克隆的仓库的子目录路径  (windows系统不要带双引号)

> git remote add origin `https://github.com/AftertasteJL/MyJL.git`  //这里换成你要克隆的项目和库

> git pull origin master//下载 

 
