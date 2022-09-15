
let myVariable = "value";
// console.log(myVariable);
myVariable= "new value";
// console.log(myVariable);
myVariable= 2;
// console.log(myVariable);
myVariable = true;
// console.log(myVariable);

let myVariable2 = "1987";
// console.log(myVariable2);

myVariable = myVariable2;
// console.log(myVariable);

let myVariable3 = myVariable + myVariable2;
// console.log (myVariable3);

function sumVariables(variable1, variable2) {
    console.log(variable1 + variable2);
}
sumVariables(myVariable, myVariable2)
sumVariables(8, "nyolc");
sumVariables("word1", "word2");

function loadEvent() {
    const addButton = document.querySelector(".add-cat");
    addButton.addEventListener("click", function () {
        const catContainer = document.querySelector(".cat-container");
        const now = new Date ().getTime(); 
        const newCat = `<img src="https://cataas.com/cat?random=${now}" alt="" />`;
        catContainer.insertAdjacentHTML("beforeend", newCat);
    })
}

window.addEventListener("load", loadEvent);