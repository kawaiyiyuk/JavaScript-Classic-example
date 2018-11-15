/**
 * Author: 洛奇
 * Create Time :2018-11-15
 * Description
 */
//需求 已经定义了对象，要确保该对象不能被更改或者是被编辑
// Object.freeze方法 可以确保对象不会被进行任何修改
    'use strict';
let data = {
    value1: 'value1',
    value2: () => {
        return this.value1
    }
};

try {
    Object.freeze(data);
  //  data.value2 = 'two';//会报错 Cannot assign to read only property 'value2' of object '#<Object>'
   // data.newProperty = 'value';  //Cannot add property newProperty, object is not extensible
    Object.defineProperty(data,'catefory',{  // Cannot define property catefory, object is not extensible
        value:'catefory',
        enumerable:true
    })

}catch (e) {
    console.log(e)
}