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
// var obj = {id:1,title:2,price:3};
// var leng = arr2.concat(obj,obj); //[ { id: 1, title: 2, price: 3 }, { id: 1, title: 2, price: 3 } ]
// var leng2 = arr2.push(obj,obj); //2
// var newarr = arr.concat.apply([],arr);
// console.log(newarr)

// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
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

