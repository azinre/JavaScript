/*var bookArray = [];
    bookArray[0] = new Book(
     "William Shakespeare",
     "The Tempest",
     "Historical Fiction"
    );
    
    bookArray[1] = new Book (
     "Stephen King",
     "The Shining",
     "Horror"
    );
    
    bookArray[2] = new Book (
     "Anne Frank",
     "The Diary of Anne Frank",
     "Non-Fiction"
    );*/

class Book {
    constructor(title,author,genre){
        this. title =  title;
        this.author = author;
        this.genre = genre;
    }
    displayBookInfo() {
        var title_line = "<strong>title: </strong>" + this.title + "<br>\n";
        var author_line = "<strong>author: </strong>" + this.author + "<br>\n";
        var genre_line = "<strong>genre: </strong>" + this.genre + "<hr>\n";
        return (title_line + author_line + genre_line);
    }
}
function addBook(){
    let title = prompt ('Plz, enter the title');
    let author = prompt ('Plz, enter the author');
    let genre = prompt ('Plz, enter the genre');
    return new Book(title, author, genre);
  }
  var bookArray = [];
  while (true){
  let c = addBook();
  bookArray.push(c);
  var quit = prompt ('Plz, enter q to quit entering Book dtails');
  if (quit==='q')
    break;
}

for(let Book of bookArray){
  document.write(Book.displayBookInfo());
}
document.querySelector('p').textContent = "You have 3 Books, Please see the details below:";

