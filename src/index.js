document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //selects forms and task lists
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  //event listener for the submit button
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //obtain task description from user input to be displayed when rendered
    const taskInput = document.getElementById("new-task-description").value;

    //handling empty submissions
    if (!taskInput.trim()) {
      alert("Task input cannot be empty!");
      return;
    }

    //list items by creating the li to store the list of items
    const taskItem = document.createElement("li");
    taskItem.textContent = taskInput;

    //add a delete button to enable deleting items
    const deleteButton = document.createElement("button"); //delete button
    deleteButton.textContent = "X"; //content of the delete button
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.padding = "10px"
    deleteButton.style.color = "red";
    deleteButton.style.fontSize = "12px";
    deleteButton.addEventListener("click", () => taskItem.remove()); //event listener when clicked

    //add delete button to each task created
    taskItem.appendChild(deleteButton);

    //add every task added
    taskList.appendChild(taskItem);

    //empty the input part after submission
    document.getElementById("new-task-description").value = "";
  })
});
