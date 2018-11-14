/**
 * Author: 洛奇
 * Create Time :2018-11-13 18:24
 * Description
 */

/**
 * js 当中有变量提升的这个概念， 而函数又是一等公民，所以函数自然也存在变量提升
 *
 *
 */
/*console.log(test())
function test() {
    return 'hello'
}
不会报错
*/

/*console.log(test())
var test = function () {
    return 'hello'

    会报错
}*/

let nums = [1,45,2,16,9,12];
let sum = nums.reduce(function (n1,n2) {
    return n1+ n2
})

console.log(sum)
