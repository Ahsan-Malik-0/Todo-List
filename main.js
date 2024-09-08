console.log("Hello World")

let input = document.querySelector(".input input");
let btn = document.querySelector(".input button");
let taskContainer = document.querySelector("#list-container")

btn.addEventListener("click", () => {
    if (input.value === '') {
        alert("You must write something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskContainer.append(li);
        input.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
        saveOnLocalStorage();
    }
})

taskContainer.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");    
        saveOnLocalStorage();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveOnLocalStorage();
    }
}, false);

const saveOnLocalStorage = () => {
    localStorage.setItem("data", taskContainer.innerHTML);
}

// IIFE Concept 
(() => {
    taskContainer.innerHTML = localStorage.getItem("data");
})();

