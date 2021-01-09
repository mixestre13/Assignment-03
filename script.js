//1) Select the section with an id of container without using querySelector.
const selectContainer = document.querySelector("container")
console.log(selectContainer)

//2) Select the section with an id of container using querySelector.
const selectContainerSelector = document.querySelector("#container")
console.log(selectContainerSelector)

//3) Select all of the list items with a class of "second".
const selectClassSecond = document.querySelectorAll(".second")
console.log(selectClassSecond)

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const ListItemclassThird = document.querySelector("#container ol .third")
console.log(ListItemclassThird)

// //5) Give the section with an id of container the text "Hello!".
// const quest5 = document.getElementById("container").innerText = "Hello!"
// console.log(quest5)
// console.log(document.body)

//6) Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');
console.log(quest6);

//7) Remove the class main on the div with a class of footer.
footer.classList.remove('main');

//8) Create a new li element.
const li = document.createElement("li");
console.log(li);

//9) Give the li the text "four".
li.innerText = "four";
console.log(li);

//10) Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(li);
console.log(document.body)

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const greenBG = document.querySelectorAll("ol li")

greenBG.forEach((element) => {
    element.style.background = "green";
})

//13) Remove the div with a class of footer.
const divRem = document.querySelector(".footer");
divRem.remove();