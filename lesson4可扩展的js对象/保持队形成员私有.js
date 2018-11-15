/**
 * Author: 洛奇
 * Create Time :2018-11-14
 * Description
 */
//需求 想要保持一个或多个对象属性私有，从而可以在对象实例之外访问它们

//当创建私有数据成员的时候，不要对成员使用this关键字
function Rune (song,artist) {
    let _title = song; //这个属性就是私有属性 只有在这个函数内部可以调用
    //私有属性命名惯例 是在前面增加一个_符号，表明不能直接使用或者设置他们呢
    this.price = 40;
    this.concat = function () {
        return _title + ' ' + artist + ' ' + this.price
    }
}

let happySons = new Rune('putting on the ritz','Ella');

console.log(happySons.title); //undefined //title是私有属性 所以实例化后是无法访问的
// happySons.title = 'apple';给happySons设置title属性后 自然而然可以访问,但是是无法改变Rune当中的title的
console.log(happySons.price); //40 //this.price 将属性添加到原型上了 所以实例化是可以访问的
console.log(happySons.concat());