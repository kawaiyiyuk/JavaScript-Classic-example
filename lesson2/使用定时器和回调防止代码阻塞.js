/**
 * Author: 洛奇
 * Create Time :2018-11-13 21:51
 * Description
 */

//当js定时器时间发生的时候，就像javaScript中任何其他的异步事件一样，它添加到了时间队列的末尾，而不是立即挤入到队列之中
//和定时器事件相关的任何功能，都是在同一队列中的任何其他功能之后处理的


function factorial(n) {
    console.log(n)
    return n == 1 ? 1 : n * factorial(n - 1)
}
console.log(factorial(6))
function noBlock(n,callback) {
    setTimeout(() => {
        let val = factorial(n);
        if(callback && typeof callback == 'function') {
            callback(val)
        }
    },0)
}
console.log("top of the morning to you");

noBlock(7,function (n) {//参数传为9是会报错的，但是会等下面的其他进行结束后 才报错
    console.log('first call ends with' + n);
    noBlock(n,function (m) {
        console.log('final result is ' + m)
    })
})

var test = 0 ;
for ( i=0 ;i<10 ;i++) {
    test += i
}

console.log('value of test is '+ test);
noBlock(4,function(n){
    console.log("end result is " + n)
})

console.log('not doing too mush')

/*
720
top of the morning to you
value of test is 45
not doing too mush
first call ends with6
end result is 24
final result is 720*/

