/**
 * Author: 洛奇
 * Create Time :2018-11-14 13:58
 * Description
 */
function f(a,b,c,d,e) {
    var args = [].slice.call(arguments); // call方法第一个参数是this值，通常是调用对象自身，这里的this是指向slice
    args.forEach(function (item) {
        console.log(item)
    })
}

f(1,2,3,4,5)
