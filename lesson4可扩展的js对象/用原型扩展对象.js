/**
 * Author: 洛奇
 * Create Time :2018-11-14
 * Description
 */
// function G(name,color) {
//     this.name = name;
//     this.color = color;
//     this.whatAreYou = function () {
//         return 'I am a' + this.color + ' ' + this.color
//     }
// }
// G.prototype.price = '20';
//
// let newtoy = new G('yuanse','red');
// console.log(newtoy.price)
function Fn (song,art) {
    let _title = song;
    this.concat = function () {
        return _title + ' ' + art
    }
}
Fn.prototype.add = function (name) {
    this.name = name
}
Fn.prototype.price = '20';

let newData = new Fn('hello','洛奇');

newData.add('yuanse');
console.log(newData.name)