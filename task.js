var tasks = []
var editIndex=-1;

var saved = localStorage.getItem("tasks")

if(saved){
tasks = JSON.parse(saved)
showTasks()
}

function addTask(){

var task = document.getElementById("task").value;
var desc = document.getElementById("desc").value;
var status = document.getElementById("status").value;
var priority = document.getElementById("priority").value;
var due = document.getElementById("due").value;



if(task === ""){
    alert("Please enter task name");
    return;
}

if(desc === ""){
    alert("Please enter description");
    return;
}

if(status === ""){
    alert("Please select status");
    return;
}

if(priority === ""){
    alert("Please select priority");
    return;
}

if(due === ""){
    alert("Please select due date");
    return;
}

if(editIndex == -1){
    tasks.push({task:task,desc:desc,status:status,priority:priority,due:due})
}
else{
    tasks[editIndex] = {task:task,desc:desc,status:status,priority:priority,due:due}
    editIndex = -1
}

localStorage.setItem("tasks",JSON.stringify(tasks))

document.getElementById("task").value=""
document.getElementById("task").value = "";
document.getElementById("desc").value = "";
document.getElementById("due").value = "";

showTasks()

}

function showTasks(){

var list = document.getElementById("list")

list.innerHTML=""

for(var i=0;i<tasks.length;i++){

var li = document.createElement("li")

li.innerHTML = tasks[i].task + " | " +tasks[i].desc+" |" +tasks[i].status+" |" +tasks[i].priority+" | "+tasks[i].due+ "<br>"  +
" <button class='status-btn' onclick='changeStatus("+i+")'>Change Status</button> " +
" <button class='edit-btn' onclick='editTask("+i+")'>Edit</button> " +
" <button class='delete-btn' onclick='deleteTask("+i+")'>Delete</button>";
list.appendChild(li)

}

}

function deleteTask(i){

tasks.splice(i,1)

localStorage.setItem("tasks",JSON.stringify(tasks))

showTasks()

}
function editTask(i){

document.getElementById("task").value = tasks[i].task;
document.getElementById("desc").value = tasks[i].desc;
document.getElementById("status").value = tasks[i].status;
document.getElementById("priority").value = tasks[i].priority;
document.getElementById("due").value = tasks[i].due;

editIndex = i

}
function changeStatus(i){

if(tasks[i].status === "Pending"){
    tasks[i].status = "In Progress";
}
else if(tasks[i].status === "In Progress"){
    tasks[i].status = "Completed";
}
else{
    tasks[i].status = "Pending";
}


localStorage.setItem("tasks", JSON.stringify(tasks))

showTasks()

}