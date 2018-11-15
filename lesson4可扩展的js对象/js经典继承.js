/**
 * Author: 洛奇
 * Create Time :2018-11-15
 * Description
 */
function Book(title, author) {
    this.getTitle = () => {
        return 'Title: ' + title
    };
    this.getAuthor = () => {
        return 'Author: '+ author
    }
}

function TechBook(title,author,category) {
    this.getCategory = () => {
        return 'Technical Category: '+ category;
    };
    this.getBook = () => {
        return this.getTitle() + ' ' + author + this.getCategory()
    };
     Book.apply(this,arguments) //相当于把arguments 每一项都传入到 Book构造函数当中
}
TechBook.prototype = Object.create(Book.prototype); //Object.create方法将提供经典的继承
//其第一个参数是充当了新创建的对象的原型的对象
TechBook.prototype.constructor = TechBook;

let newBook = new TechBook('javascript cookbook','powers','programming');

console.log(newBook);
console.log(newBook.getTitle());
console.log(newBook.getAuthor());
console.log(newBook.getCategory());
