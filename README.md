# TaskFlow - To-Do List and Task Management System

## Project description
TaskFlow is an interactive task organizer designed to help users manage their daily activities efficiently. Developed with HTML, CSS and JavaScript, it provides task tracking, priority selection, deadline management and progress monitoring. Browser LocalStorage ensures that tasks remain saved between sessions.

## Objectives
- Build a functional front-end web application.
- Practise HTML, CSS and JavaScript.
- Store data locally without a backend or database.
- Practise collaborative development using Git and GitHub.
- Write project documentation using Markdown.

## Features
1. Add tasks.
2. View tasks.
3. Mark tasks as completed or pending.
4. Delete tasks.
5. Search tasks by keyword.
6. Filter all, pending and completed tasks.
7. Automatically save tasks in browser LocalStorage.

## Technologies
- HTML5
- CSS3
- JavaScript
- Browser LocalStorage
- Git and GitHub
- Markdown

No backend, server, API or database is used.

## Team contributions
| Student | Branch | Responsibility |
|---|---|---|
| Student 1: NAME (Roll No.) | `feature-member1` | `index.html`, `style.css`, `app.js`; page structure, styling, add/view/complete features |
| Student 2: NAME (Roll No.) | `feature-member2` | `task_actions.js`; browser storage, delete and search helper functions |

Replace the placeholders with the actual names and roll numbers.

## Project structure
```text
taskflow/
├── index.html
├── style.css
├── app.js
├── task_actions.js
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

## How to run
1. Download or clone this repository.
2. Keep all four source files in the same folder.
3. Open `index.html` in a modern web browser.
4. Add tasks and test the available controls.

No package installation or server setup is required. Internet is only needed if the optional Google Fonts import in `style.css` is to load; the page works with fallback fonts offline.

## Local data
Tasks are stored in the browser's LocalStorage under the key `taskflow_tasks`. Data remains in that browser on that computer. It is not shared across devices or browsers. Clearing browser site data may remove saved tasks.

## Sample usage
- Type `Complete DBMS assignment` and click **Add task**.
- Tick the checkbox to mark it completed.
- Use the filter buttons to view pending or completed tasks.
- Search by typing a word in the search field.
- Click **Delete** to remove a task.

## Testing checklist
- Add a normal task and an empty task.
- View tasks.
- Mark a task complete and pending again.
- Search for matching and non-matching words.
- Filter pending and completed tasks.
- Delete a task.
- Refresh the browser and check that tasks remain saved.

## GitHub collaboration
Both members must use separate GitHub accounts. Each member must create their feature branch, make at least four meaningful commits, push the branch, create a pull request and review the partner's pull request. Both branches must be merged into `main`. Follow `CONTRIBUTING.md` for the merge-conflict demonstration.
