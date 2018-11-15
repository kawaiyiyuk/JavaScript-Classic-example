/**
 * Author: 洛奇
 * Create Time :2018-11-15
 * Description
 */
//需求 想要阻止对象扩展一个对象

//使用Object.preventExtensions()方法来锁定一个对象，以防止未来属性的添加
//虽然不可以添加新的属性，但是可以对现有的属性进行更改
'use strict';

let Test = {
    value1 : 'one',
    value2: () => {
        return this.value1
    }
};
try {
    Object.preventExtensions(Test);
    //如果下面代码失败，并且在严格模式中抛出一个TypeError
    Test.value3 = 'test'
} catch (e) {
    console.log(e) //会报错
}

//分析 Object.preventExtensions(Test)方法阻止了开发者用新的属性来扩展对象，尽管属性
//自身是可以扩展的，他将一个内置属性Extensible设置为false
//可以使用Object.来检查一个对象是否可以扩展

if(Object.isExtensible(Test)) {
    console.log('该对象是可以扩展的')
}else {
    console.log('该对象是不可以扩展的')
}