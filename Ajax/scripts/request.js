const header=document.querySelector('header');
const section = document.querySelector('section')

let requestURL = 'books.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function(){
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200){
            const booksText = request.response;
            const books= JSON.parse(booksText);
            populateHeader(books);
            showbooks(books);
        }
    }
}

function populateHeader(obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.BooksName;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `Author: ${obj.Author} // year: ${obj.year}`;
    header.appendChild(myPara);
}

function showbooks(obj) {
    const library = obj.books;

    for (const boo of library) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');

      myH2.textContent = boo.name;
      myPara1.textContent = `Page Number: ${boo.pageNumber}`;
      myPara2.textContent = `year: ${boo.year}`;
      myPara3.textContent = 'genres:';

      const genres = boo.genra;
      for (const gnr of genres) {
        const listItem = document.createElement('li');
        listItem.textContent = gnr;
        myList.appendChild(listItem);
      }

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

      section.appendChild(myArticle);
    }
  }

  populate();
