// STUDENT 1: Main application logic (add, display and complete tasks).

let tasks = loadTasksFromBrowser();
let currentFilter = "all";

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const searchInput = document.getElementById("search-input");
const emptyState = document.getElementById("empty-state");
const priorityInput = document.getElementById("task-priority");
const dueDateInput = document.getElementById("task-due-date");
const themeToggle = document.getElementById("theme-toggle");
const suggestionsBox = document.getElementById("task-suggestions");
const starterSuggestions = [
  "Review today's priorities",
  "Reply to important emails",
  "Study for 30 minutes",
  "Take a short break",
  "Plan tomorrow's tasks"
];

function showTaskSuggestions() {
  const query = taskInput.value.trim().toLowerCase();
  const previousTasks = tasks.map(task => task.title);
  const suggestions = [...new Set([...previousTasks, ...starterSuggestions])]
    .filter(title => title.toLowerCase().includes(query) && title.toLowerCase() !== query)
    .slice(0, 5);

  suggestionsBox.replaceChildren();
  if (document.activeElement !== taskInput || !suggestions.length) {
    suggestionsBox.hidden = true;
    return;
  }

  const label = document.createElement("span");
  label.className = "suggestions-label";
  label.textContent = query ? "Suggestions" : "Try one of these";
  suggestionsBox.appendChild(label);

  suggestions.forEach(function (suggestion) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "suggestion-chip";
    button.textContent = suggestion;
    button.addEventListener("click", function () {
      taskInput.value = suggestion;
      suggestionsBox.hidden = true;
      taskInput.focus();
    });
    suggestionsBox.appendChild(button);
  });
  suggestionsBox.hidden = false;
}

taskInput.addEventListener("focus", showTaskSuggestions);
taskInput.addEventListener("input", showTaskSuggestions);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Escape") suggestionsBox.hidden = true;
});
taskInput.addEventListener("blur", function () {
  window.setTimeout(() => { suggestionsBox.hidden = true; }, 120);
});

function setTheme(theme) {
  document.body.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
  localStorage.setItem("taskflow_theme", theme);
}

setTheme(localStorage.getItem("taskflow_theme") || "light");
themeToggle.addEventListener("click", function () {
  setTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

function formatDueDate(dateString) {
  if (!dateString) return "";
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function isOverdue(task) {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  return Boolean(task.dueDate && !task.completed && task.dueDate < today);
}

// Add a task after validating the input.
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (title === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push({
    id: Date.now(),
    title: title,
    completed: false,
    priority: priorityInput.value,
    dueDate: dueDateInput.value
  });

  saveTasksToBrowser(tasks);
  taskInput.value = "";
  suggestionsBox.hidden = true;
  priorityInput.value = "medium";
  dueDateInput.value = "";
  renderTasks();
});

// Display tasks according to the selected filter and search term.
function renderTasks() {
  const keyword = searchInput.value.trim().toLowerCase();

const searchedTasks = findTasks(tasks, keyword);

const visibleTasks = searchedTasks.filter(function (task) {
  const matchesFilter =
    currentFilter === "all" ||
    (currentFilter === "pending" && !task.completed) ||
    (currentFilter === "completed" && task.completed);

  return matchesFilter;
});

  taskList.innerHTML = "";

  visibleTasks.forEach(function (task) {
    const item = document.createElement("li");
    item.className = "task-item" + (task.completed ? " is-completed" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-check";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", "Mark task complete");
    checkbox.addEventListener("change", function () {
      toggleTaskCompletion(task.id);
    });

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    const status = document.createElement("span");
    status.className = "task-status";
    status.textContent = task.completed ? "DONE" : "PENDING";

    const details = document.createElement("div");
    details.className = "task-details";

    const priority = document.createElement("span");
    priority.className = `priority-badge priority-${task.priority || "medium"}`;
    priority.textContent = `${task.priority || "medium"} priority`;
    details.appendChild(priority);

    if (task.dueDate) {
      const dueDate = document.createElement("span");
      dueDate.className = "due-date" + (isOverdue(task) ? " overdue" : "");
      dueDate.textContent = `${isOverdue(task) ? "Overdue · " : "Due · "}${formatDueDate(task.dueDate)}`;
      details.appendChild(dueDate);
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      removeTask(tasks, task.id);
      saveTasksToBrowser(tasks);
      renderTasks();
    });

    const editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.textContent = "Edit";
    editButton.setAttribute("aria-label", `Edit ${task.title}`);
    editButton.onclick = function () {
      const editor = document.createElement("input");
      editor.className = "task-edit-input";
      editor.type = "text";
      editor.maxLength = 100;
      editor.value = task.title;
      editor.setAttribute("aria-label", "Edit task title");
      title.replaceWith(editor);
      editButton.textContent = "Save";
      editButton.classList.add("save-button");
      editor.focus();
      editor.select();

      const saveEdit = function () {
        const updatedTitle = editor.value.trim();
        if (!updatedTitle) {
          editor.focus();
          return;
        }
        task.title = updatedTitle;
        saveTasksToBrowser(tasks);
        renderTasks();
      };
      editButton.onclick = saveEdit;
      editor.addEventListener("keydown", function (event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") renderTasks();
      });
    };

    const content = document.createElement("div");
    content.className = "task-content";
    content.append(title, details);
    const actions = document.createElement("div");
    actions.className = "task-actions";
    actions.append(editButton, deleteButton);
    item.append(checkbox, content, status, actions);
    taskList.appendChild(item);
  });

  emptyState.hidden = visibleTasks.length !== 0;
  document.getElementById("total-count").textContent = tasks.length;
  document.getElementById("pending-count").textContent =
    tasks.filter(task => !task.completed).length;
  document.getElementById("completed-count").textContent =
    tasks.filter(task => task.completed).length;
  document.getElementById("overdue-count").textContent =
    tasks.filter(isOverdue).length;
  document.getElementById("task-count-label").textContent =
    visibleTasks.length + (visibleTasks.length === 1 ? " task" : " tasks");

  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const progressFill = document.getElementById("progress-fill");
  progressFill.style.width = `${percent}%`;
  document.getElementById("progress-label").textContent = `${percent}% complete`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", percent);
}

// Mark a task as completed or pending.
function toggleTaskCompletion(taskId) {
  const task = tasks.find(item => item.id === taskId);
  if (task) {
    task.completed = !task.completed;
    saveTasksToBrowser(tasks);
    renderTasks();
  }
}

// Change the active task filter.
document.querySelectorAll(".filter-button").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".filter-button").forEach(btn =>
      btn.classList.remove("active")
    );
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

// Update the displayed tasks as the user types.
searchInput.addEventListener("input", renderTasks);

// Initial display when the page opens.
renderTasks();
