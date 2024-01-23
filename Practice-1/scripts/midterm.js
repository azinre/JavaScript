
class Pet { /* Define a class with four properties */
    constructor(name,codeNumber,age,barrenness){
      this.name = name;
      this.codeNumber = codeNumber;
      this.age = age;
      this.barrenness = barrenness;
    }

    getPetDetails() { 
      var name_line = "<strong>Name: </strong>" + this.name + "<br>\n";
      var codeNumber_line = "<strong>CodeNumber: </strong>" + this.CodeNumber + "<br>\n";
      var age_line = "<strong>age: </strong>" + this.age + "<br>\n";
      var barrenness_line = "<strong>barrenness: </strong>" + this.barrenness + "<hr>\n";
      return (name_line + codeNumber_line + age_line + barrenness_line);
    }
    getName(){ /*create method */ 
        return this.name
    }
}

var thePetsArray = [  /*create a list that inclue 3 different values */
    new Pet("Banfy","@banfy",9,true), 
    new Pet("Ferferi","@Ferferi",12,true), 
    new Pet("Shido","@shido", 1, false) 
]
 
function printPet(petssArray){ /* create a function that print the array's value */
    for(let pet of petssArray){
        document.write(pet.getPetDetails());
    }
}
printPet(thePetsArray) /* call the function*/

function printPetOnElement(petssArray){ /*Create a function to print the result of the sort and filtering function. it is related to tht html file and using id that create in html file */
    document.getElementById("result").innerHTML = "Array Data after Filtering and Sorting<hr>\n" 
    for(let pet of petssArray){
        document.getElementById("result").innerHTML += pet.getPetDetails();
    }
}
printPetOnElement(); /*call the result function */

function sortOrFilter(action){ /*using switch to acting 3 different order includes 2 sorting and 1 filtering  */
switch(action) {
    case 0 :
        thePetsArray.sort((a,b) => (a.getName() > b.getName()) ? 1:-1); /* it is for sorting ascending so from a to b and 1 to -1 */
        printPetOnElement(thePetsArray); 
        break;
    case 1:
        thePetsArray.sort((a,b) => (a.getName() > b.getName()) ? -1:1); /* it is for sorting descending from b to a alphabeticaly for this command i use from-1 to 1 */
        printPetOnElement(thePetsArray);
        break;
    case 2:
        var filter_name = document.getElementsByTagName("input")[2].value; /* in order to filter we get an input from end user so we define a variable to get value from customer */
        var filtered_pet = thePetsArray.filter((pet) => pet.getName().includes(filter_name)); /* for the filter the name we should comparison the data that the customer input with the values that we have in array, firstly I used filter method and then I used include to show all the result that customer needs */
        printPetOnElement(filtered_pet);
        break;
    default:
        break;
}}                   
