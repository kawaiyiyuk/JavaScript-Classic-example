/**
 * Author: 洛奇
 * Create Time :2018-11-13
 * Description
 */
//数组操作方法


//在一个数组中找到特定的值
// var animals = ['dog','cat','seal','elphant','lion'];
// console.log(animals.indexOf('seal'));

// var arr = [1,1,2,3,4,5,5,5];
//数组去重
// var arrE = [];
// for(var i=0 ;i<arr.length;i++) {
//     if(arrE.indexOf(arr[i]) == -1) {
//         arrE.push(arr[i])
//     }
// }
// console.log(arrE)


//es6 findIndex()数组去重
var nums = [2,3,19,15,183,6,7,1,1];
var numE = []
for(var i=0 ;i<nums.length;i++) {
    var over = numE.findIndex(elememt => {
        return elememt == nums[i]
    })
    if(over == -1) {
        numE.push(nums[i])
    }
}
// var over = nums.findIndex(elememt => {
//     return elememt == 9
// })
console.log(numE);
