/**
 * Author: 洛奇
 * Create Time :2018-11-13 20:36
 * Description
 */
//将下面数组里的所有元素 拼接成一个字符串
let arr = ['apple','orange','peach','lime'];

//常规写法

let str = '';
arr.forEach(function(item,index,array){
    str += item+ ' '
})

console.log(str) //apple orange peach lime
//递归算法

let reverseArray = function (arr,index,str) {
    return index == 0? str : reverseArray(arr , --index,(str += arr[index] + ' '))
    //这里不能用后自减的原因是 如果用后自减的话 那么会一直循环初始的index，因为后自减是先赋值 再进行增减
};

let str2 = reverseArray(arr,arr.length,'');
console.log(str2)

//反方向的添加

let orderArray = function (arr,index,str) {
    return index == arr.length-1? str: orderArray(arr,++index,(str+= ' '+ arr[index]))
}

var str3 = orderArray (arr,-1,'')

console.log(str3)

//斐波那契数列

// let fibonacci = function (n) {
//     return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2)
// }

