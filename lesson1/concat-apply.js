/**
 * Author: 洛奇
 * Create Time :2018-11-13
 * Description
 */
//二维数组拍扁
// var arr = [];
// arr[0] = ['111','222'];
// arr[1] = ['333','444'];
// arr[2] = ['555','666'];
// arr[3] = ['777','888'];
//concat 接受一个或多个数组，并将数组元素添加到用来调用改方法数组的尾部 返回的是原来的数组和新增数据的合集 不改变原来数组
//相当于把一个或者多个数组，用push的方法 添加到调用该方法的数组当中，只是push方法返回的是length concat返回的是新数组
// var obj = {id:1,title:2,price:3};
// var leng = arr2.concat(obj,obj); //[ { id: 1, title: 2, price: 3 }, { id: 1, title: 2, price: 3 } ]
// var leng2 = arr2.push(obj,obj); //2
// var newarr = arr.concat.apply([],arr);
// console.log(newarr)


var arr = [['111','222'],['333','444'],['555','666'],['777','888']];
var newarr = arr.concat.apply([],arr);
console.log(newarr)
/*
需要后台拿数据进行字符串拼接的时候 最好是用forEach进行循环
var fruits = [{
    title:'apple',
    price:20
},{
    title:'bannan',
    price:30
}];
var str = ''
fruits.forEach(function (item, index, array) {
    str += '<h1>'+item.title+'</h1>'+
            '<p>'+item.prcie+'</p>'
});
console.log(str);*/

