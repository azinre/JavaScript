
const header = document.querySelector('header');
const section = document.querySelector('section')

let requestURL = 'fruits.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
var fruits = ""
request.onload = function () {
  if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200) {
      const fruitsText = request.response;
      fruits = JSON.parse(fruitsText);
      populateHeader(fruits);
      showfruits(fruits);
    }
  }
}
class Calculator {
  constructor(displayTextElement) {
    this.displayTextElement = displayTextElement
    this.clear()
  }
  clear() {
    this.total = 0
    // this.operation = undefined
  }

  addPrice(price) {
    this.total += price
  }
  updateScreen() {
    this.displayTextElement.textContent = this.total.toString()
  }

}
function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = obj.FruitsName;
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Fresh and Organic`;
  header.appendChild(myPara);
}

function showfruits(obj) {
  const library = obj.fruits;

  for (const boo of library) {
    const myLink = document.createElement('a')
    const img = document.createElement('img');

    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');
    const myAddButton = document.createElement('button');

    myLink.id = boo.name;
    myH2.textContent = boo.name;
    myPara1.textContent = `Weight: ${boo.weight}`;
    myPara2.textContent = `price: ${boo.price}`;
    myPara2.id = "price";
    myPara3.textContent = 'Types:';
    myAddButton.textContent = `Add 1kg ${boo.name}`
    myAddButton.name = 'addButton'
    img.src = boo.images;
    const Types = boo.type;
    for (const gnr of Types) {
      const listItem = document.createElement('li');
      listItem.textContent = gnr;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(img);
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    myArticle.appendChild(myAddButton)

    section.appendChild(myArticle);
  }


  const addButtons = document.querySelectorAll('[name=addButton]')
  const displayTextElement = document.querySelector('[display]')
  const calculator = new Calculator(displayTextElement)
  addButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.addPrice(fruits.fruits.find(el => el.name === button.textContent.split(" ")[2]).price)
      calculator.updateScreen()
    })
  })
  // displayTextElement.addEventListener("submit", validate);
  const resetBtn = document.querySelector('[name=resetBtn]')
  resetBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.updateScreen()
  })

}

