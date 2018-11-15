/**
 * Author: 洛奇
 * Create Time :2018-11-14
 * Description
 */

//需求 需要创建一个变量，再函数调用之间维护状态，但是，你想避免使用全部变量

(function(){
    let i =0 ;
    function increment () {
        i++ ;
        console.log("value is "+ i)
    }
    function runIncreament() {
        while (i<5) {
            increment()
        }
    }
    runIncreament()

})();

console.log(i)