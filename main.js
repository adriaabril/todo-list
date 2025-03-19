    console.log("JavaScript file loaded");

    let input;
    let container;
    let addButton;

    document.addEventListener('DOMContentLoaded', function() {
        input = document.getElementById("task-input");
        container = document.getElementById("task-list");
        addButton = document.getElementById("add-button");
        addButton.addEventListener('click', addTask);
    });

    function addTask(){

        const task = input.value.trim();
        if(!task){
            alert("Please write a task");
            return;
        }
        const li = document.createElement("li");
        li.innerHTML = `
                        <label>
                            <input type="checkbox">
                            <span>${task}</span>
                        </label>
                        <span class="edit-btn">Edit</span>
                        <span class="delete-btn">Delete</span>
                    `;
        container.appendChild(li);
        input.value="";

        // Event listeners for new task
        const checkbox = li.querySelector("input");
        const editBtn = li.querySelector(".edit-btn");
        const taskSpan = li.querySelector("span");
        const deleteBtn = li.querySelector(".delete-btn");

        checkbox.addEventListener("click", function(){
            li.classList.toggle("completed", checkbox.checked);
        });

        editBtn.addEventListener("click", function(){
            const edit = prompt("Edit task", taskSpan.textContent);
            
            if (edit !== null) {
                taskSpan.textContent = edit;
                li.classList.remove("completed");
                if(checkbox.checked){
                    checkbox.checked = false;
                }
            }
        });
    }
