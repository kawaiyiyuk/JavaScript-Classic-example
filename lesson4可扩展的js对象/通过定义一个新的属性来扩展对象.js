/**
 * Author: 洛奇
 * Create Time :2018-11-15
 * Description
 */
//需求 想要很容易的给一个对象添加一个新属性，但是又想要以能够更多的控制此过程的方式来完成

//使用defineProperty()方法来创建对象

let data = {};

Object.defineProperty(data,'type',{
    value:'data',
    enumerable:true, //可枚举
    configurable:false, //控制属性描述符是否可以更改 默认是false
    //get 默认为undefined 属性的getter
    //set 默认为undefined 属性的setter
});

Object.defineProperty(data,'id',{
    value:'id',
    writable:true //可以更改属性的值
});

console.log(data.type); //data
data.type = 'newdata';
console.log(data.type); //data

console.log(data.id); //id
data.id = 'newId';
console.log(data.id) ;//newId

for (prop in data) {
    console.log(prop) //只有type
}
