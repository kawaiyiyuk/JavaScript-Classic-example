/**
 * Author: 洛奇
 * Create Time :2018-11-13
 * Description
 */
/*
* 需求 从一个数组中提取一部分 保持原数组不变
* 分析：slice(start,end) 提取一个数组的一部分的一个浅拷贝 前包含 （新数组包含start，不包含end）
* 复制一个已有数组的一部分，返回一个新数组，因为执行的是浅拷贝，意味着如果数组元素是对象，那么两个数组拥有相同的对象
* */

var arr =  ['javascript','nodejs','php','python','java'];
var newarr = arr.slice(1,3);
console.log(newarr) //[ 'nodejs', 'php' ] 前包含

//浅拷贝的说明

var myArr = []
myArr[0] = ['apple','banana'];
myArr[1] = ['apple1','banana1'];

var newArr = myArr.slice(0,2);

newArr[0][0] = 'newApple';
console.log(newArr,myArr); //[ [ 'newApple', 'banana' ], [ 'apple1', 'banana1' ] ] [ [ 'newApple', 'banana' ], [ 'apple1', 'banana1' ] ]

