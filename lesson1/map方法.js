/**
 * Author: 洛奇
 * Create Time :2018-11-13
 * Description
 */


/**
 * map()方法和forEach()方法相同，对数组中的每一个元素应用一次回调函数
 * 不同的是 map()需要并且必须要有一个返回值
 * 下面分别用两种方法 实现一个将数组中的10进制数字改变成16进制
 *
 */

//forEach()实现
//必须新建一个空数字，然后将循环出来的数据push到新数组当中
let decArray = [23,255,122,5,16,99];
let newArr = [];
decArray.forEach(function (item) {
    newArr.push(item.toString(16))
});
console.log(newArr);


//map()实现
//直接可以进行赋值操作
let hexArray = decArray.map(function (item) {
    return item.toString(16)
});

console.log(hexArray);

