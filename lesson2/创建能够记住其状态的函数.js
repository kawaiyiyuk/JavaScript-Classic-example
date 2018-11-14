/**
 * Author: 洛奇
 * Create Time :2018-11-14 11:30
 * Description
 */
//需求 创建一个函数，他能够记住数据，但是不必使用全局变量，并且不必对每个函数廖用重新发送同样的数据
function outFn(wrap) {
    function inFn(name) {
        return wrap+ ' '+ name //这里的wrap就是所记住的数据 并且他不在全局作用域里
    }
    return inFn
}

let daytiem = outFn('good day to you');
let night = outFn('good evening');

console.log(daytiem('luoqi'));
console.log(night('luoqi'))
