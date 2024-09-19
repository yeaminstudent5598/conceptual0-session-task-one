
      let taskCount = 0; // Keep track of task number

      // Function to add a task
      function addTask() {
        const taskValue = document.getElementById("input-value.value");

        if (taskValue !== "") {
          taskCount++;

          // Create a new row for the task
          const taskRow = document.createElement("tr");
          taskRow.innerHTML = `
            <th>${taskCount}</th>
            <td>${taskValue}</td>
            <td>
              <button class="delete-btn btn btn-error btn-xs">X</button>
            </td>
          `;

          // Append the row to the table body
          document.getElementById("content-container").appendChild(taskRow);

          // Clear the input field
          document.getElementById("input-value").value = "";

          // Add delete functionality to the new task
          taskRow.querySelector(".delete-btn").addEventListener("click", function () {
            taskRow.remove();
          });
        }
      }

      // Add Task Button Click Event
      document.getElementById("task-btn").addEventListener("click", addTask);

      // Keyboard 'Enter' Key Event
      document.getElementById("input-value").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          addTask(); // Trigger addTask function when Enter is pressed
        }
      });

      // Clear All Button Click Event
      document.getElementById("clear-btn").addEventListener("click", function () {
        document.getElementById("content-container").innerHTML = "";
        taskCount = 0;
      });
    