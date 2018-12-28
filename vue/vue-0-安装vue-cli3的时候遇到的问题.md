# 在安装vue cli3 (cli 脚手架) 必看官方看文档 
安装需要`两个要求`  

#### 1 卸载之前旧的vue-cli 1x,2x
>npm uninstall vue-cli -g  

#### 2 Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+) 
官方给予我解释 `使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本` (当时我忽略这条老是强行安装vue-cil3 失败后再次阅读才明白)

##### 2.5 在安装的时候 nvm时候发现不知道这么安装，折腾了才发现 （原来直接安装node会）

下载
nvm-windows 最新下载地址:[传送门](https://github.com/coreybutler/nvm-windows/releases "官方地址")


~ 选择第二个 简单版本

>nvm-noinstall.zip： 这个是绿色免安装版本，但是使用之前需要配置

>nvm-setup.zip：这是一个安装包，下载之后点击安装，无需配置就可以使用，方便。

>Source code(zip)：zip压缩的源码

>Sourc code(tar.gz)：tar.gz的源码，一般用于*nix系统 

#### 基本使用规则
```cmd
nvm -v
nvm ls   // 查看目前已经安装的版本
nvm install 6.10.0  // 安装指定的版本的nodejs
nvm use 6.10.0  // 使用指定版本的nodejs
```

注意点
nvm安装目录，最好不要存在空格。否则，nvm可以安装成功，但使用nvm use x.y.z（nodejs的切换）会有问题。
有些全局的npm模块，可能在各版本的node.js之间不共享。
你正在使用的node.js版本中可能不支持某些npm模块。因此在工作的时候请注意工作环境。 


### 准备就绪正式安装
安装
> npm install -g @vue/cli

* 安装可能出现的问题
```cmd
npm WARN deprecated hoek@5.0.4: This version is no longer maintained. Please upgrade to the latest version.
npm ERR! cb() never called!

npm ERR! This is an error with npm itself. Please report this error at:
npm ERR!     <https://github.com/npm/npm/issues>
```
分析关键字结果为：cb() 
从stackoverflow [传送门](https://stackoverflow.com/questions/51525210/angular-6-npm-err-cb-never-called-when-installing-angular-cdk '解决方案')中我找到了解决方案，最终为：
 
>npm cache clean --force //npm install -g npm

** 安装过程有点小久** 功夫不负有心人还是被我安装上了

* 查看版本
> vue --version





