// STUDENT 2: Browser storage, deletion and search helper functions.

// Load saved tasks from the browser's LocalStorage.
function loadTasksFromBrowser() {
  try {
    const savedTasks = localStorage.getItem("taskflow_tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch (error) {
    console.error("Could not load saved tasks:", error);
    return [];
  }
}

// Save the current task list in the browser.
function saveTasksToBrowser(taskList) {
  try {
    localStorage.setItem("taskflow_tasks", JSON.stringify(taskList));
  } catch (error) {
    alert("Your tasks could not be saved in this browser.");
    console.error("Could not save tasks:", error);
  }
}

// Delete a task by its unique ID.
function removeTask(taskList, taskId) {
  const taskIndex = taskList.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    return false;
  }

  taskList.splice(taskIndex, 1);
  return true;
}

// Search tasks by title (used by the search field in app.js).
function findTasks(taskList, keyword) {
  const searchText = keyword.trim().toLowerCase();

  if (!searchText) {
    return taskList;
  }

  return taskList.filter(task =>
    task.title.toLowerCase().includes(searchText)
  );
}
