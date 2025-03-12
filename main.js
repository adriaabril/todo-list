    console.log("JavaScript file loaded");

    let input;
    let container;
    let addButton;

    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM Content Loaded");
        input = document.getElementById("task-input");
        container = document.getElementById("task-list");
        addButton = document.getElementById("add-button");
        
        console.log("Add button found:", addButton); // Check if button was found
        addButton.addEventListener('click', addTask);
        console.log("Click listener added");
    });

    function addTask(){
        console.log("addTask function called"); // Check if function is called
        const task = input.value.trim();
        console.log(task);
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
    }
