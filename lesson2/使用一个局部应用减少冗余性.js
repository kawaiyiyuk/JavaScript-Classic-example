/**
 * Author: 洛奇
 * Create Time :2018-11-14
 * Description
 */

//需求 有一个函数 带有三个参数，但是，前两个参数通常基于特定的用途而重复，你想要无论何时都避免参数的重复性
//给不同的字符串 添加不同的编码符号
function makString(ldelim, str, rdelim) {
    return ldelim + str + rdelim
}

function quoteString(str) {
    return makString("'",str,"'")
};
function barString (str) {
    return makString('-',str,'-')
}
console.log(quoteString('apple'));
console.log(quoteString('banana'));
console.log(barString('apple'));
console.log(barString('banana'));

function mastring (ldelim,rdelim,str) {
    return ldelim + str + rdelim
}
let named = mastring.bind(undefined,'-','"');
console.log(named('apple'))