document.addEventListener("DOMContentLoaded", function() {
    let TaskData = document.querySelector(".task");
    let innerBox = document.querySelector(".innerbox");
    let NewTask_btn = document.querySelector(".NewTask-btn");

    function addNewTask() {
        let NewTask = prompt("Enter your new task");
        if (NewTask) {
            let clone = TaskData.cloneNode(true);
            let input = clone.querySelector("input");
            let label = clone.querySelector("label");
            let deleteButton = clone.querySelector(".del");

            let id = Date.now();
            input.id = id;
            label.htmlFor = id;
            label.innerText = NewTask;

            NewTask_btn.insertAdjacentElement("beforebegin", clone);

            // Add delete event listener to the new delete button
            deleteButton.addEventListener("click", function() {
                clone.remove();
            });
        }
    }

    let NewTask = document.querySelector(".NewTask-btn");
    NewTask.addEventListener("click", addNewTask);

    // Add delete event listeners to initial delete buttons
    let deleteButtons = document.querySelectorAll(".del");
    deleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            button.parentElement.remove();
        });
    });
});
