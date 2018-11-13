/**
 * Author: 洛奇
 * Create Time :2018-11-13 16:23
 * Description
 */
let arr = ['***','123','aaa','abc','-','AAA',46];

function testValue (item,index,array) {
  let textExp = /^[a-zA-Z]+$/;
  return textExp.test(item)
}

//运行测试 使用eveny()进行验证

let result = arr.every(testValue);

console.log(result) //false

let arr2 = ['elephant','lion','cat','dog'];

let result2 = arr2.every(testValue);
console.log(result2) ;//true


//运行测试 some()进行验证

let result3 = arr.some(testValue);
console.log(result3) ;//true

let result4 = arr.some(testValue);
console.log(result4) ;//true


/**
 * every() 只要该函数返回一个fasle 处理就会结束 并且该方法也会结束  返回false
 * some() 一直检测 直到回调函数返回true 此时不再验证其他元素，该方法返回true 如果所有元素都没有返回true
 * 那么该方法返回fasle
 *
 * 如果所有元素必须满足某个条件的话，那么使用every  意味着每一个都符合
 * 否则使用some  意味着一些符合
 *
 */


/**
 * 匿名函数 和命名函数
 * 使用命名函数的好处是 当调试代码的时候 他会出现再栈追踪中，而匿名函数则不会
 *
 * 使用命名函数的另一个好处是，在Array()当中调用的时候，执行速度会比匿名函数要快
 * 命名函数的缺点是可能会把全局空间搞的很乱
 *
 *
 */

