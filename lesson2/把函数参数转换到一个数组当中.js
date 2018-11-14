/**
 * Author: 洛奇
 * Create Time :2018-11-14 13:58
 * Description
 */
function f(a,b,c,d,e) {
    var args = [].slice.call(arguments);
    args.forEach(function (item) {
        console.log(item)
    })
}

f(1,2,3,4,5)
