/**
 * Author: 洛奇
 * Create Time :2018-11-14
 * Description
 */

function Fn () {
    this.val1 = 'a';
    this.val2 = 'b';
    this.add = function () {
        return this.val1 + this.val2
    }
}
Fn.prototype.returnV1 = function () {
    return this.val1
}
Fn.prototype.returnV2 = function () {
    return this.val2
};

function newObject() {
    this.val3 = 'c';
    Fn.call(this) //将Fn的属性方法 call过来
}
//newObject.prototype = Fn.prototype
newObject.prototype = Object.create(Fn.prototype); //Objecet.create()方法 将Fn的原型赋值给了新的对象，但是当新对象
//的原型发生变化的时候，该Fn是不会跟着变化的
newObject.prototype.constructor = newObject;
newObject.prototype.getValue = function() {
    return this.val1 + ' '+ this.val2 + ' ' + this.val3
};
let obj = new newObject();
console.log(obj instanceof newObject); //true
console.log(obj instanceof Fn); //true

console.log(obj.getValue());  //a b c