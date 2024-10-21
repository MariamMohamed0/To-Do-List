function getData(){
    var data=document.querySelector("#task").value; 
    var reslut=document.querySelector("#result"); 
    if(data==""){
        return false;
    }
    else{
        var listItem=`<li class="todo">
        <input type="checkbox" id="${Date.now()}"  onchange="toggleDone(this)">
        <label class="custom-checkbox" for="${Date.now()}">
        <i class="true fa-solid fa-check"></i>
        </label>
        <label  class="todo-text">${data}</label>
        <button class="delete-button" onclick="deleteItem(this)"><i class="delete fa-solid fa-trash"></i></button>
        </li>`;
        reslut.insertAdjacentHTML("beforebegin",listItem)
        document.querySelector("#task").value="";
        return false;
    }
}
function deleteItem(button) {
    var listItem = button.parentElement; 
    listItem.remove(); 
}