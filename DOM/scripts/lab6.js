//Lab6 - Working with the Document Object Model
/*1*/
var paragraph = document.getElementById("mainTitle");
var text = document.createTextNode("Learning about the Document Object Model ");
paragraph.appendChild(text);

/*2*/
document.getElementById("mainTitle").setAttribute("align", "center");

/*3*/
/*var image = document.querySelector("#image1");
/*image.setAttribute("title", "JavaScript 1");
image.title = "JavaScript 1";*/
document.getElementById("image1").title = "JavaScript 1";

/*4*/
document.getElementById("image1").setAttribute("align", "right");

/*5*/
var myElement = document.querySelector("#list");
var myNewElement = document.createElement("li");
var secondItem = myElement.getElementsByTagName("li")[1];
myElement.insertBefore(myNewElement,secondItem);
var myText = document.createTextNode("August 1996");
myNewElement.appendChild(myText);

/*6*/
var lastElement = document.querySelector("#list");
var NewLastElement = document.createElement("li");
lastElement.appendChild(NewLastElement);
var myText = document.createTextNode("1.8.2 June 22, 2009");
NewLastElement.appendChild(myText);

/*7*/
document.getElementsByTagName("li")[5].innerHTML = "1.6 November 2005";
/*var changeContent = myElement.getElementsByTagName("li")[5];
alert(changeContent.innerHTML);
changeContent.innerHTML = "1.6 November 2005"*/

/*8*/
document.write(document.getElementsByTagName("li").length);


