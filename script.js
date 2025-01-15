// select elements
let inputField = document.querySelector("#inputField");
let addToDo = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoContainer");

// if add button click then what happens
addToDo.addEventListener("click", function(){
    var paragraph = document.createElement("p"); //create element of paragraph
    paragraph.classList.add("paragraph-styling"); //jese paragraph bana usko style add kardiya
    paragraph.innerText = inputField.value; //paragraph content = input me joh lika hai
    toDoContainer.appendChild(paragraph); //if button click then it will add paragraph tag
    inputField.value = ""; //it remove input value after we click on button

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    });
});
