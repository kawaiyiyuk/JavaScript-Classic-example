/**
 * Author: 洛奇
 * Create Time :2018-11-15
 * Description
 */
//实现单体的一个示例

let Fn = (function () {
    //实例存储了该单体的引用

    let instance;
    function init() {
        //单体
        //私有方法和变量

        function myFn () {
            console.log('I am private')
        }
        let data1 = 'I am also private';
        let data2 = Math.random();

        return {
            //公有变量和方法 闭包实现

            publicMethod: function () {
                console.log('The public call me')
            },
            publicProperty:'I am alos public',
            getRandom : function () {
                return data2
            }
        };
    }
    return {
        //如果存在的话，就获取该单体实例
        //如果不存在的话，就创建一个单体实例

        getinstance: function () {
            if(!instance) {
                instance = init
            }
            return instance
        }
    }
})();

let singlea = Fn.getinstance();
console.log(singlea().getRandom());