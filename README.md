# js-mixin-utils  
常用的js方法和sass的mixin  
## 目录  
- [安装](#安装)  
- [使用](#使用)  
- [常用的sass的mixins](#常用的sass的mixins)  
  - [全局引入](#全局引入)  
  - [mixins](#mixins)  
- [方法](#方法)  
  - [数组相关方法](#数组相关方法)   
    - [sliceArrByNum分割数组](#slicearrbynumarr-num)  
    - [arrGroupBy根据指定key对数组分组](#arrgroupbyarr-key) 
    - [objArrayDuplicateByKey根据指定的key对数组去重](#objarrayduplicatebykeyarr-key)
    - [getCountOccurrences获取数组中某一项出现的次数](#getcountoccurrencesarr-item-index)
    - [arrItemUpGo将数组中指定位置元素前移一位](#arritemupgoarr-index)  
    - [arrItemDownGo将数组中指定位置元素后移一位](#arritemdowngoarr-index)
    - [arrAverageNum求给定数组的平均值](#arraveragenumarr)  
    - [getStandardDeviation求给定数组的标准差（离散程度）](#getstandarddeviationarr)   
    - [getArrDifference两个数组对比取出不同的值](#getarrdifferencearra-arrb)    
    - [getDifFromToArrByKey获取与数组1中指定key的值不一样的数组2的项目集合](#getdiffromtoarrbykeyarr1-arr2-keyname)
    - [getConcatFromTwoArrByKey根据指定的key获取两个数组的并集](#getconcatfromtwoarrbykeyarr1-arr2-keyname)
    - [objectDeepClone数组或对象的深度克隆](#objarrayduplicatebykeyarr-key)
  - [校验相关方法](#校验相关方法)        
    - [checkMobile校验手机号](#checkmobilestr-ifnotshowalert)         
    - [checkPassword校验密码](#checkpasswordstr-ifnotshowalert)    
  - [Date相关方法](#Date相关方法)               
     - [initDatePattern对Date的扩展pattern](#initdatepattern)          
     - [getPreMonth获取指定日期的前一个月的日期](#getpremonthstr)    
     - [getPastHalfYear获取指定日期的半年前的日期的时间戳](#getpasthalfyearstr)
     - [getNowTimeType判断当前时间属于哪个时间段](#getnowtimetypetime)   
     - [secondToDate秒转时分秒](#secondtodatesecond)            
  - [Number相关方法](#Number相关方法)          
     - [numToChinesNum将正整数的数字转化为中文大写](#numtochinesnumnum)    
     - [numToCharCode数字转化为大写字母](#numtocharcodenum)        
     - [addZeroByLength根据传入的长度在数字前面补0](#addzerobylengthnum-length)
  - [String相关方法](#String相关方法)             
     - [getNumberOfAppearByString判断字符在字符串中出现的次数](#getnumberofappearbystringreg-str)     
     - [getFileSuffix获取一个文件名字符串的后缀](#getfilesuffixname)
  - [Window相关方法](#Window相关方法)        
     - [getScrollTop返回页面的scrollTop](#getscrolltop)   
     - [downloadBlobObject处理BLOB对象或者url的下载](#downloadblobobjectdata-filename-onlyurl)  
     - [getBrowserName获取浏览器标识](#getbrowsername)      
     - [getUrlData获取url的指定传入参数的值](#geturldatavariable)    
  - [插件方法](#插件方法)      
     - [elementUIAlert自定义alert](#elementuialertmsg-callback-tip)    
     - [elementUIConfirm自定义confirm](#elementuiconfirmmsg-callback-cancelfn-confirmbuttontext-cancelbuttontext)
     - [elementUIPrompt自定义prompt](#elementuiprompttitle-inputvalue-callback-cancelcallback-placeholder)
     - [elementUIToast自定义系统级通知的被动提醒toast](#elementuitoastmsg)        
     - [elementUIMessage自定义主动操作后的反馈提示toast](#elementuimessagemsg-offset-type-duration)
     - [elementUIShowLoadingFn显示loading遮罩](#elementuishowloadingfn)                 
     - [initMySortable初始化拖拽插件sortablejs](#initmysortableclassname-endfn-startfn)
     - [vueRouterOpenNewWindow将vue-router中的path在新窗口打开](#vuerouteropennewwindowthat-pagepath)                                     
- [写在最后](#写在最后)  
## 安装  
```sh
$ npm install --save js-utils-common
```  
## 使用  
#### 在Vue项目中使用
```sh
import Main from 'js-utils-common';
Main.functionName();
```  
#### 以JS文件方式引用
```sh
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<script src="unpkg.com/js-utils-common/lib/index.js"></script>
window.myJsUtils.functionName()
```  
## 常用的sass的mixins
### 全局引入
安装如下依赖
```sh
npm install sass-resources-loader
```
在vue.config.js中设置如下
```sh
chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
        item
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .options({
                resources: [
                    './node_modules/js-mixin-utils/css/mixins.scss'
                ]
            })
            .end()
    })
}
```  
### mixins   
方法名 | 方法介绍 | 参数一 | 参数二 | 参数三 | 参数四 |  
:------: | :-----: | :-----: | :-----: | :-----: |  :-----: | 
absolute_center | 通过absolute设置居中 | - | - | - | - |  
setWebkit | 输出webkit前缀，moz前缀和标准 | 样式名 | 样式值 | - | - |  
ub-img | 常用的背景图显示设置 | 可选类型0-8 | - | - | - |  
triangle | 三角箭头 | 朝向（top，left，bottom，right），默认为top | 大小，默认为6px | 颜色，默认为#ccc | - |  
ellipsisByLineNumber | 设置文本的省略样式 | 设置几行省略，默认1 | - | - | - |  
myBorder | 设置border | border类型(all，none，top，bottom，left，right)，默认all | 颜色，默认#000 | 宽度，默认1px | 线条类型，默认solid |
textBlink | 文字带渐变效果的闪烁 | - | - | - | - |            
badgeStyle | 角标标记 | 背景颜色，默认#ff0000 | 大小，默认16px | 字体大小，默认10px | 字体颜色，默认#FFFFFF |
maskDom | 遮罩 | dom的z-index，默认999 | 背景颜色，默认rgba(#000000, 0.3) | - | - |
## 方法  
### 数组相关方法  
#### ***sliceArrByNum(arr, num)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4];
let num = 3;
let returnArr = Main.sliceArrByNum(arr, num);
console.log(returnArr); //[[1, 2, 3], [4]]
```  
- *方法介绍*  
根据传入的num，将指定数组按照每num为一份进行分割，返回分割好的数组  
- *参数介绍*  
1. arr：要分割的数组  
2. num：几个元素为一份  
- *返回值*  
分割好的数组[Array]
- *注意事项*  
无
#### ***arrGroupBy(arr, key)***  
- *示例*  
```sh
let arr = [
    {
        name: 1,
        value: 2
    },
    {
        name: 1,
        value: 3
    },
    {
        name: 2,
        value: 4
    }
];

/**
[
     [
         {
             name: 1,
             value: 2
         },
         {
             name: 1,
             value: 3
         },
     ],
     [
         {
            name: 2,
            value: 4
         }
     ]
]
*/
console.log(Main.arrGroupBy(arr, 'name')); 
```  
- *方法介绍*  
根据指定key对数组分组
- *参数介绍*  
1. arr：数组  
2. key: 数组中项目的key
- *返回值*  
分好组的数组[Array]
- *注意事项*  
1. 只适用于由Object构成的复杂数组
#### ***objArrayDuplicateByKey(arr, key)***  
- *示例*  
```sh
let arr = [
    {
        name: 1,
        value: 2
    },
    {
        name: 1,
        value: 2
    },
    {
        name: 1,
        value: 3
    },
    {
        name: 2,
        value: 3
    }
];

/**
[
    {
        name: 1,
        value: 2
    },
    {
        name: 2,
        value: 3
    }
]
*/
console.log(Main.objArrayDuplicateByKey(arr, 'name'));
```  
- *方法介绍*  
根据指定的key，对数组去重
- *参数介绍*  
1. arr：数组  
2. key：数组中项目的key  
- *返回值*  
去重后的数组[Number]
- *注意事项*  
1. 只适用于由Object构成的复杂数组
2. 只要key对应的值相同，就当该项目重复
3. 相同的保留最靠前的一个
#### ***getCountOccurrences(arr, item, index)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4, 3, 3, 2, 2, 4, 3];
console.log(Main.getCountOccurrences(arr, 2, 1)); //1
console.log(Main.getCountOccurrences(arr, 2, 3)); //0
console.log(Main.getCountOccurrences(arr, 2, 5)); //2
```  
- *方法介绍*  
根据传入的数组下标和数组中某项，获得该项出现的次数，只记从下标处开始，前后中相邻的该项目的次数，包括下标  
- *参数介绍*  
1. arr：数组  
2. item：数组中的项目  
3. index：数组的下标  
- *返回值*  
出现次数[Number]
- *注意事项*  
1. 此方法仅适用于简单数组  
#### ***arrItemUpGo(arr, index)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4, 5, 6];
Main.arrItemUpGo(arr, 2);
console.log(arr); //[1, 3, 2, 4, 5, 6]
```  
- *方法介绍*  
将数组中指定位置元素前移一位，直接修改数组   
- *参数介绍*  
1. arr：数组  
2. index：数组的下标  
- *返回值*  
无
- *注意事项*  
无
#### ***arrItemDownGo(arr, index)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4, 5, 6];
Main.arrItemDownGo(arr, 2);
console.log(arr); //[1, 2, 4, 3, 5, 6]
```  
- *方法介绍*  
将数组中指定位置元素后移一位，直接修改数组
- *参数介绍*  
1. arr：数组  
2. index：数组的下标  
- *返回值*  
无
- *注意事项*  
无
#### ***arrAverageNum(arr)***  
- *示例*  
```sh
let arr = [1, 2, 3, 4, 5, 6];
console.log(Main.arrAverageNum(arr)); //3.5
```  
- *方法介绍*  
求给定数组的平均值
- *参数介绍*  
1. arr：数组  
- *返回值*  
平均值[Number]
- *注意事项*  
1. 只适用于由Number构成的简单数组
#### ***getStandardDeviation(arr)***  
- *示例*  
```sh
let arr = [3, 3, 3, 3, 3, 3];
console.log(Main.getStandardDeviation(arr)); //0
```  
- *方法介绍*  
求给定数组的标准差（离散程度）
- *参数介绍*  
1. arr：数组  
- *返回值*  
数组的标准差[Number]
- *注意事项*  
1. 只适用于由Number构成的简单数组
#### ***getArrDifference(arrA, arrB)***  
- *示例*  
```sh
let arr1 = [3, 4, 2, 3, 3, 3];
let arr2 = [3, 4, 2, 3, 5, 6];
console.log(Main.getArrDifference(arr1, arr2)); //0
```  
- *方法介绍*  
两个数组对比，取出不同的值
- *参数介绍*  
1. arrA：数组1  
2. arrB：数组2  
- *返回值*  
不同值的数组[Array]
- *注意事项*  
1. 只适用于简单数组
#### ***getDifFromToArrByKey(arr1, arr2, keyName)***  
- *示例*  
```sh
let arr1 = [
    {
        name: 1,
        value: 2
    },
    {
        name: 2,
        value: 3
    }
];
let arr2 = [
    {
        name: 2,
        value: 2
    },
    {
        value: 3
    }
];
console.log(Main.getDifFromToArrByKey(arr1, arr2, 'name')); //[{value: 3}]
```  
- *方法介绍*  
根据指定key，获取与数组1中指定key的值不一样的数组2的项目集合
- *参数介绍*  
1. arr1：数组1  
2. arr2：数组2  
3. keyName：数组中项目的key  
- *返回值*  
不同项目的数组[Array]
- *注意事项*  
1. 只适用于Object组成的复杂数组
2. 数组1是参照数组，处理的是数组2
3. 只要key对应的值相同，就当该项目相同
#### ***getConcatFromTwoArrByKey(arr1, arr2, keyName)***  
- *示例*  
```sh
let arr1 = [
    {
        name: 1,
        value: 2
    },
    {
        name: 2,
        value: 4
    }
];
let arr2 = [
    {
        name: 1,
        value: 3
    },
    {
        name: 3
        value: 5
    }
];
console.log(Main.getConcatFromTwoArrByKey(arr1, arr2, 'name'));
```  
- *方法介绍*  
根据指定的key，获取两个数组的并集
- *参数介绍*  
1. arr1：数组1  
2. arr2：数组2  
3. keyName：数组中项目的key  
- *返回值*  
两个数组的并集[Array]
- *注意事项*  
1. 只适用于由Object构成的复杂数组
2. 只要key对应的值相同，就当该项目重复
3. 相同的子项，只保留arr1中最靠前的
#### ***objectDeepClone(obj)***  
- *示例*  
```sh
Main.objectDeepClone([]);
```  
- *方法介绍*  
数组或对象的深度克隆
- *参数介绍*  
1. obj：数组或者对象[Object、Array]  
- *返回值*  
克隆好的新值[Object、Array]  
- *注意事项*  
无
### 校验相关方法  
#### ***checkMobile(str, ifNotShowAlert)***  
- *示例*  
```sh
console.log(Main.checkMobile('18666666666')); //true
```  
- *方法介绍*  
校验手机号，支持1[3456789]开头的号码
- *参数介绍*  
1. str：手机号字符串  
2. ifNotShowAlert：设置为true，不弹窗提示校验错误  
- *返回值*  
校验成功返回true，失败false[Boolean]
- *注意事项*  
无
#### ***checkPassword(str, ifNotShowAlert)***  
- *示例*  
```sh
console.log(Main.checkPassword('12ssss3aa')); //true
```  
- *方法介绍*  
校验密码，要求字母+数字长度8-16位
- *参数介绍*  
1. str：密码  
2. ifNotShowAlert：设置为true，不弹窗提示校验错误  
- *返回值*  
校验成功返回true，失败false[Boolean]
- *注意事项*  
无
### Date相关方法  
#### ***initDatePattern()***  
- *示例*  
```sh
Main.initDatePattern();
console.log(new Date()).pattern("yyyy-MM-dd hh:mm:ss.S"); //2006-07-02 08:09:04.423
console.log(new Date()).pattern("yyyy-MM-dd E HH:mm:ss"); //2009-03-10 二 20:09:04
console.log(new Date()).pattern("yyyy-MM-dd EE hh:mm:ss"); //2009-03-10 周二 08:09:04
console.log(new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss"); //2009-03-10 星期二 08:09:04
console.log(new Date()).pattern("yyyy-M-d h:m:s.S"); //2006-7-2 8:9:4.18
```  
- *方法介绍*  
对Date的扩展，将 Date 转化为指定格式的String   
月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符   
年(y)可以用 1-4 个占位符   
毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
- *参数介绍*  
无
- *返回值*  
无
- *注意事项*  
无
#### ***getPreMonth(str)***  
- *示例*  
```sh
console.log(Main.getPreMonth('2016-03-30')); //2016-02-29
```  
- *方法介绍*  
获取指定日期的前一个月的日期，默认为当天
- *参数介绍*  
1. str：可以被new Date()识别的日期格式的字符串  
- *返回值*  
前一个月的日期字符串，格式为yyyy-MM-dd[String]
- *注意事项*  
无
#### ***getPastHalfYear(str)***  
- *示例*  
```sh
console.log(Main.getPastHalfYear('2016-03-30')); //Tue Sep 29 2015 20:00:00 GMT+0800 (中国标准时间)
```  
- *方法介绍*  
获取指定日期的半年前的日期的时间戳，默认为当前时间
- *参数介绍*  
1. str：可以被new Date()识别的日期格式的字符串  
- *返回值*  
半年前的日期的时间戳[Date]
- *注意事项*  
无
#### ***getNowTimeType(time)***  
- *示例*  
```sh
console.log(Main.getNowTimeType('2016-03-30 11:20:30')); //上午好！
```  
- *方法介绍*  
判断当前时间属于哪个时间段
- *参数介绍*  
1. time：可以被new Date()识别的日期格式的字符串，默认为当前时间  
- *返回值*  
根据传入的时间，返回凌晨好,早上好,上午好,中午好,下午好,傍晚好,晚上好,夜里好[String]
- *注意事项*  
无
#### ***secondToDate(second)***  
- *示例*  
```sh
console.log(Main.secondToDate(210)); //{hour:"00",minute:"03",second:"30"}
```  
- *方法介绍*  
秒转时分秒
- *参数介绍*  
1. second：秒数，正整数[Number]  
- *返回值*  
包含时、分、秒属性的对象{hour:"00",minute:"03",second:"30"}[Object]
- *注意事项*  
无
### Number相关方法  
#### ***numToChinesNum(num)***  
- *示例*  
```sh
console.log(Main.numToChinesNum(56)); //'五十六'
```  
- *方法介绍*  
将正整数的数字转化为中文大写
- *参数介绍*  
1. num：要转换的数字[Number]  
- *返回值*  
对应的中文大写[String]
- *注意事项*  
无
#### ***numToCharCode(num)***  
- *示例*  
```sh
console.log(Main.numToCharCode(20)); //'U'
```  
- *方法介绍*  
数字转化为大写字母，数字从0开始
- *参数介绍*  
1. num：要转换的数字，正整数[Number]  
- *返回值*  
对应的大写字母[String]
- *注意事项*  
超出字母表的数字时，返回对应的字符
#### ***addZeroByLength(num, length)***  
- *示例*  
```sh
console.log(Main.addZeroByLength(15, 7)); //'0000015'
```  
- *方法介绍*  
根据传入的length，在传入的数字前面补0
- *参数介绍*  
1. num：要补0的数字，正数即可[Number]  
2. length：补成几位数字，正整数[Number]  
- *返回值*  
补好位的字符串[String]
- *注意事项*  
无
### String相关方法  
#### ***getNumberOfAppearByString(reg, str)***  
- *示例*  
```sh
console.log(Main.getNumberOfAppearByString('a', 'jashdjsabckjabsua')); //4
```  
- *方法介绍*  
判断字符在字符串中出现的次数
- *参数介绍*  
1. reg：要判断的字符[String]  
2. str：字符串[String]  
- *返回值*  
出现的次数[Number]
- *注意事项*  
无
#### ***getFileSuffix(name)***  
- *示例*  
```sh
console.log(Main.getFileSuffix('a.jpg')); //'jpg'
```  
- *方法介绍*  
获取一个文件名字符串的后缀
- *参数介绍*  
1. name：文件名，需要带后缀[String]  
- *返回值*  
文件的后缀[String]
- *注意事项*  
无
### Window相关方法  
#### ***getScrollTop()***  
- *示例*  
```sh
console.log(Main.getScrollTop()); //0
```  
- *方法介绍*  
返回页面的scrollTop
- *参数介绍*  
无 
- *返回值*  
页面的scrollTop[Number]
- *注意事项*  
无
#### ***downloadBlobObject(data, fileName, onlyUrl)***  
- *示例*  
```sh
Main.downloadBlobObject();
```  
- *方法介绍*  
处理BLOB对象或者url的下载
- *参数介绍*  
1. data：blob对象或者url链接[Object、String]  
2. fileName：保存文件时的文件名，需要加上后缀[String]  
3. onlyUrl：要下载的文件是否从url地址获取[Boolean]  
- *返回值*  
无
- *注意事项*  
无
#### ***getBrowserName()***  
- *示例*  
```sh
Main.getBrowserName();
```  
- *方法介绍*  
获取浏览器标识
- *参数介绍*  
无
- *返回值*  
浏览器的标识：Opera，Firefox，Chrome，Safari，IE[String]
- *注意事项*  
无
#### ***getUrlData(variable)***  
- *示例*  
```sh
Main.getUrlData();
```  
- *方法介绍*  
获取url的指定传入参数的值
- *参数介绍*  
1. variable：参数的key[String]  
- *返回值*  
对应key的值[String]
- *注意事项*  
无
### 插件方法  
#### ***elementUIAlert(msg, callback, tip)***  
- *示例*  
```sh
Main.elementUIAlert('12ssss3aa')
```  
- *方法介绍*  
自定义alert
- *参数介绍*  
1. msg：alert的文字  
2. callback：关掉alert后执行的方法  
3. tip：提示语，默认为‘提示’   
- *返回值*  
无
- *注意事项*  
无
#### ***elementUIConfirm(msg, callback, cancelFn, confirmButtonText, cancelButtonText)***  
- *示例*  
```sh
Main.elementUIConfirm('12ssss3aa')
```  
- *方法介绍*  
自定义confirm
- *参数介绍*  
1. msg：confirm的文字  
2. callback：点击确定后执行的方法  
3. cancelFn：点击取消后执行的方法   
4. confirmButtonText：确定按钮的文字，默认为‘确定’   
5. cancelButtonText：取消按钮的文字，默认为‘取消’   
- *返回值*  
无
- *注意事项*  
无
#### ***elementUIPrompt(title, inputValue, callback, cancelCallback, placeholder)***  
- *示例*  
```sh
Main.elementUIPrompt('12ssss3aa')
```  
- *方法介绍*  
自定义prompt
- *参数介绍*  
1. title：标题  
2. inputValue：输入框的初始值  
3. callback：点击确定后执行的方法，参数为输入框的值   
4. cancelCallback：点击取消后执行的方法，参数为输入框的值
5. placeholder：输入框的占位符   
- *返回值*  
无
- *注意事项*  
无
#### ***elementUIToast(msg)***  
- *示例*  
```sh
Main.elementUIToast('12ssss3aa')
```  
- *方法介绍*  
自定义toast，多用于系统级通知的被动提醒
- *参数介绍*  
1. msg：toast的文字  
- *返回值*  
无
- *注意事项*  
无
#### ***elementUIMessage(msg, offset, type, duration)***  
- *示例*  
```sh
Main.elementUIMessage('12ssss3aa')
```  
- *方法介绍*  
自定义toast，常用于主动操作后的反馈提示
- *参数介绍*  
1. msg：toast消息     
2. offset：距离窗口顶部的偏移量     
3. type,：主题，默认success，可选值success/warning/info/error   
4. duration：显示时间, 毫秒。设为 0 则不会自动关闭   
- *返回值*  
无
- *注意事项*  
无
#### ***elementUIShowLoadingFn()***  
- *示例*  
```sh
Main.elementUIShowLoadingFn()
```  
- *方法介绍*  
显示loading遮罩
- *参数介绍*  
无
- *返回值*  
loading遮罩对象，可调用close方法关闭遮罩[Object]
- *注意事项*  
无
#### ***initMySortable(className, endFn, startFn)***  
- *示例*  
```sh
Main.initMySortable();
```  
- *方法介绍*  
初始化拖拽插件sortablejs
- *参数介绍*  
1. className：拖拽的dom的class名[String]  
2. endFn：拖拽结束后的回调方法[Function]  
3. startFn：拖拽开始的回调方法[Function]  
- *返回值*  
sortablejs实例[Object]
- *注意事项*  
1. 初始化结束后，实例可以调用option方法进行设置，例如this.sortableObj.option('disabled', false)
#### ***vueRouterOpenNewWindow(that, pagePath)***  
- *示例*  
```sh
Main.vueRouterOpenNewWindow();
```  
- *方法介绍*  
将vue-router中的path在新窗口打开
- *参数介绍*  
1. that：vue实例[Object]  
2. pagePath：vue-router里定义的path[String]  
- *返回值*  
无
- *注意事项*  
无
## 写在最后  
个人开发和维护，有需求或者bug请提Issues或者邮箱，看到后会第一时间解决   
Email：323247568@qq.com   
