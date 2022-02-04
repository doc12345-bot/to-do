const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const input = document.getElementById("input");
const list = document.getElementById("listDiv");
const editButton = document.getElementById("editBtn");
const deleteButton = document.getElementById("deleteBtn");

submit.addEventListener("click", function updateList(){
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
});

clear.addEventListener("click", function clearList(){
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    };
});

/*deleteButton.addEventListener("click", function deleteTask(){
    list.removeChild(this.thingToDo);
});*/