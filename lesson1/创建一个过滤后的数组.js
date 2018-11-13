let arr = ['ab', 'cs', 'ef', '**', 'dd', 'ee', '**', 'aa', "88", '**']

var newArr = arr.filter(function (item) {
    return (item != '**')
})
console.log(newArr)

//  filter 和map forEach 一样 将一个回调函数应用到每一个数组元素  es5新加
//返回一个布尔值，如果为true 那么就添加到新数组当中，否则不添加