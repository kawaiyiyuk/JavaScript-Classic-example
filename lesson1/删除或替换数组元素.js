/**
 * Author: 洛奇
 * Create Time :2018-11-13
 * Description
 */


//需求: 删除数组内的一个指定元素;
    //分析: splice(index,num)可以删除数组内元素,改变原来数组,index 删除的起始位置
var arr = ['javascript','nodejs','php','python','java'];

//删除指定的数组内元素
arr.splice(arr.indexOf('php'),1);

console.log(arr)
