const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const input = document.getElementById("input");
const list = document.getElementById("listDiv");
const editButton = document.getElementById("editBtn");


var buttons = document.querySelectorAll("button");

submit.addEventListener("click", function updateList(){
    var text = document.getElementById("input").value;
    if(text == ""){return}

    var thingToDo = document.createElement("li");
    thingToDo.style = "unchecked";

    var text = document.getElementById("input").value;
    thingToDo.textContent = text;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.setAttribute("id", "deleteBtn");
    thingToDo.appendChild(deleteBtn);

    list.appendChild(thingToDo);
    input.value = "";

    thingToDo.addEventListener("click", function(){
        if(thingToDo.getAttribute("class") == null){
            thingToDo.setAttribute("class", "checked");
        } else {
            thingToDo.removeAttribute("class");
        }

    })

    thingToDo.addEventListener("dblclick", function(){
        list.removeChild(thingToDo);
    })

    deleteBtn.addEventListener("click", function() {

        list.removeChild(thingToDo);
    })
    });


clear.addEventListener("click", function clearList(){
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    };
});

function updateList(){
    var text = document.getElementById("input").value;
    if(text == ""){return}

    var thingToDo = document.createElement("li");
    var text = document.getElementById("input").value;
    thingToDo.textContent = text;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.setAttribute("id", "deleteBtn");
    thingToDo.appendChild(deleteBtn);

    list.appendChild(thingToDo);
    input.value = "";
    };


function clearList(){
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    };
};
/*

deleteButton.addEventListener("click", function deleteTask(){
    list.removeChild(this.thingToDo);
});

*/