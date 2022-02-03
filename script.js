const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const input = document.getElementById("input");
const list = document.getElementById("list");

submit.addEventListener("click", function updateList(){
    var text = document.getElementById("input").value;
    if(text == ""){return}
    var list = document.getElementById("listDiv");
    var thingToDo = document.createElement("li");
    var text = document.getElementById("input").value;
    console.log(text);
    
    thingToDo.textContent = text;

    list.appendChild(thingToDo);

    input.value = "";
});

clear.addEventListener("click", function clearList(){


});