/**
 * Author: 洛奇
 * Create Time :2018-11-13
 * Description
 */


//需求: 删除数组内的一个指定元素;
/**
 * 分析:
 * splice(index,num,str)可以删除数组内元素,
 * 改变原来数组
 * index 删除的起始位置 0开始 包含自己
 * num 删除的数量
 * str 一组替换元素
 * indexOf()
 * 元素是否在当前数组，返回元素的位置   0开始
 * 如果不在当前数组中 返回-1
 */

var arr = ['javascript','nodejs','php','python','java'];
var arr2 = ['javascript','nodejs','php','python','java'];

//从数组内删除
arr.splice(arr.indexOf('php'),1); //[ 'javascript', 'nodejs', 'python', 'java' ]

//换入新的元素
arr2.splice(arr2.indexOf('php'),1,'.net'); //[ 'javascript', 'nodejs', '.net', 'python', 'java' ]
//console.log(arr,arr2);


//需求 ：删除数组中多个重复的元素
//分析 用循环来删除或者替换

var arr3 = ['ab','bc','ab','ff','ab','df','ew','ab','dd','ac','bb','ee']
var arr4 = ['ab','bc','ab','ff','ab','df','ew','ab','dd','ac','bb','ee']

while (arr3.indexOf('ab') != -1) {
    arr3.splice(arr3.indexOf('ab'),1)
}
//console.log(arr3) //[ 'bc', 'ff', 'df', 'ew', 'dd', 'ac', 'bb', 'ee' ]

//用forEach()循环实现    forEach 接收一个回调函数

arr4.forEach(function (item,index,array) {
    if(item == 'ab') {
        array.splice(index,1)
    }
    // if语句也可以用下面这样的短路方式进行替换
    // (item == 'ab') && (array.splice(index,1))
})
console.log(arr4)