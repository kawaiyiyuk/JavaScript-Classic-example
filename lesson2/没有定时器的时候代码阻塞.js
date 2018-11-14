/**
 * Author: 洛奇
 * Create Time :2018-11-14 10:32
 * Description
 */
function factorial (n) {
    return n == 1? n : n * factorial(n-1)
}
console.log(factorial(6))

function haveBlock (n,callback) {
    let val = factorial(n);
    if(callback && typeof callback == 'function') {
        callback(val)
    }
}


console.log("top of the morning to you");
haveBlock (9,function (n) {
    console.log("first call end" + n);
    haveBlock(n,function (m) {
        console.log("rinal result is "+m)
    })
})

var test = 0 ;
for ( i=0 ;i<10 ;i++) {
    test += i
}

console.log('value of test is '+ test);

haveBlock(4,function (n) {
    console.log("end result is " + n)
})

console.log('not doing too mush')
