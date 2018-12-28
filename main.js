var fs = require('fs'); 

var msg ={
    head:`# Noto
学的再多也会忘，记录自己解决的过程，善于总结。
学习遇到各种问题和学习过程中思考的记录下来 (\`main.js\` 是基于nodejs 快速生成目录的脚本)`,
    catalogue:[],//目录
    possible:[ //接下来 可能要记录的内容
    'git',"vscode",'Go',"Mysql", "python", "Javascript", 
    "Vim", "centos7", "deepin", "Markdown", "Php"] 

} ; 


var path = require("path")
 
var root = path.join(__dirname)
 
readDirSync(root,msg.catalogue)
function readDirSync(path,arr){
	var pa = fs.readdirSync(path,arr);
	pa.forEach(function(ele,index){ 
      if(ele!=".git"){ 
        var info = fs.statSync(path+"/"+ele)
		if(info.isDirectory()){
            arr.push(['dir',ele])
			readDirSync(path+"/"+ele,arr);
		}else{
            arr.push(['file',ele]) 
        }	 
      }  
	})
} 

var show=`${msg.head}`
var array=msg.catalogue;
var pathFile="";
 for(let i=0;i<array.length;i++){
     if(array[i][0]=="dir"&& i>=1){ 
        show+=`\n</ol>\n\n## ${array[i][1]}\n\n<ol>\n`
        pathFile=array[i][1]
     }
     else if(array[i][0]=="dir"){
        show+=`\n\n## ${array[i][1]}\n\n<ol>\n`
        pathFile=array[i][1]
        }
     else if(array[i][1]!="main.js"&& array[i][1]!="README.md"){ 
         let sub=array[i][1].substring(0,array[i][1].length-".md".length);
         show+=`\n<li>\n\n[${sub}](${pathFile}/${array[i][1]})\n`
     }
 } 

/** 调用fs.writeFile()进行文件写入,这是一个异步操作*/
fs.writeFile('./README.md', show, 'utf8', function (err) {
  // 在这个回调函数中只有一个参数，那就是err
  // 如果 err === null，表示文件写入成功，没有错误
  // 如果err不等于null，就表示文件写入失败了
  if (err) { console.log('文件写入错误，错误是：'+ err); }
  console.log('run ok') 
});





// /**  异步读取文件 */
// fs.readFile('./README.md',function(err,data){
//   if (err) { console.log('文件读取错误，错误是：'+ err); } 
//     console.log(data.toString('utf8'))
// // data默认是一个Buffer对象，里面保存的就是一个一个的字节，(理解为字节数组)
// //     // 把Buffer对象转换为字符串，调用toString()方法
// })
 

 
// /** 读取当前目录 */
// var filesPath=fs.statSync('./',function(err,files){
//     if (err) { console.log('错误是：'+ err); } 
//     var filesPath=[]
//     // filesPath
//     return files
//     console.log(files)

// })