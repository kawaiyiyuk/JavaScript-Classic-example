/**
 * Author: 洛奇
 * Create Time :2018-11-15
 * Description
 */
//自定义一个可以链化的方法
//让方法链式化操作的关键在于，在方法的末尾返回该对象的一个引用
//return this
//jQuery 广泛应用这个该方法进行链式化操作
function Book(title,author) {
    this.getTitle = () => {
        return 'title: '+ title
    }
    this.getAuthor = () => {
        return "Author: " + author
    };
    this.replcaeTitle = (newtitle) => {
        var oidTitle = title;
        title = newtitle
    }
}

function TechBook(title,author,category) {
    this.getCategory = () => {
        return 'category: ' + category
    }
    Book.apply(this,arguments)

    this.changeTitle = (newtitle) => {
        this.replcaeTitle(newtitle);
        return this
    }
}

let newBook = new TechBook('I Know things','smart','tech');
console.log(newBook.changeTitle('Book k .reader').getAuthor());//Author: smart
console.log(newBook.getTitle()) //title: Book k .reader