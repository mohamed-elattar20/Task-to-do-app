var addBtn = document.getElementById("addBtn");
var inputField = document.getElementById("inputField");
var content = document.getElementById("content");
var btnDelete = document.getElementById("btnDelete");

addBtn.addEventListener("click", addTask);
var arrOfTasks = [];
if (JSON.parse(localStorage.getItem("taskList")) != null) {
    arrOfTasks = JSON.parse(localStorage.getItem("taskList"));
    displayTasks(arrOfTasks);
}
function addTask() {
    var tasks = {
        taslId: arrOfTasks == 0 ? 0 : arrOfTasks.length,
        taskName: inputField.value
    }
    arrOfTasks.push(tasks)
    // console.log(arrOfTasks);
    localStorage.setItem("taskList", JSON.stringify(arrOfTasks))
    displayTasks(arrOfTasks)
}
function displayTasks(list) {
    var addTasksToHtml = "";
    for (var i = 0; i < list.length; i++) {
        addTasksToHtml += `
        <div class="checkCont">
            <input type="checkbox">
        </div>
        <p id="taskShow">${list[i].taskName}</p>
        <div class="btnCont">
            <button onclick="deleteProduct(${list[i].taslId})" id="btnDelete">Delete</button>
        </div>`
    }
    content.innerHTML = addTasksToHtml
}
// btnDelete.addEventListener("click", deleteProduct)
function deleteProduct(id) {
    arrOfTasks = arrOfTasks.filter(function (element) {
        return element.taslId != id
    })
    localStorage.setItem("taskList", JSON.stringify(arrOfTasks))
    displayTasks(arrOfTasks);
}
