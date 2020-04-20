# C端诊断工具

## 安装运行环境
```
//安装node
brew install node
//检测版本
node -v
//安装vue开发环境： 
npm install --global vue-cli
//安装cnpm:  
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
## 下载代码
```angular2
//获取项目
git clone git@github.com:erha367/ntcs_tools.git
//进入目录
cd ntcs_tools
//安装依赖
cnpm install
```
## 运行代码
```angular2
//运行代码
npm run serve
```

## 编译、替换脚本(文件路径以实际为准)
```shell script
cd /htdocs/ntcs_tools
npm run build
echo -e "build done..! \n"
cd /htdocs/ntcs/public
cp -R /htdocs/ntcs_tools/dist /htdocs/ntcs/public/dist
rm -rf ctools
mv dist ctools
echo -e "ntcs static complete..! \n"
```