/**
 * Author: 洛奇
 * Create Time :2018-11-14
 * Description
 */
//使用Memeization来缓存复杂计算的结果

let fibonacci = function () {
    let memo = [0,1];
    let fib = function (n) {
        let result = memo[n];
        if(typeof result != "number"){
            result =   fib(n-1) + fib(n-2);
            memo[n] = result
        }
        return result
    };
    return fib
}();

var num = fibonacci(7);
console.log(num)