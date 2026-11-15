# TaskFlow – To-Do List and Task Management System

## 1. Project Description

TaskFlow is a browser-based task management application developed using HTML, CSS and JavaScript. It helps users organize their daily activities by creating, managing, prioritizing and tracking tasks.

The application provides features such as task creation, searching, editing, completion tracking, deletion, priority selection, due-date management, sorting, filtering and progress monitoring. It uses browser LocalStorage to save tasks and user preferences between sessions.

## 2. Objectives

- Develop a functional front-end task management application.
- Practise HTML, CSS and JavaScript.
- Understand browser-based data storage using LocalStorage.
- Implement useful task management operations.
- Practise collaborative software development using Git and GitHub.
- Learn branching, committing, pushing, pull requests, code reviews and merge-conflict resolution.
- Prepare project documentation using Markdown.

## 3. Features

1. Add new tasks.
2. View all tasks.
3. Mark tasks as completed or pending.
4. Edit existing tasks.
5. Delete individual tasks.
6. Prevent duplicate task entries.
7. Search tasks using keywords.
8. Filter tasks by All, Pending and Completed.
9. Select task priorities.
10. Set due dates and identify overdue tasks.
11. Sort tasks by priority and due date.
12. Filter tasks according to priority.
13. Display priority statistics and completed-task counts.
14. Display task counts and completion progress.
15. Clear all completed tasks.
16. Switch between light and dark themes.
17. Save tasks and theme preferences using browser LocalStorage.

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Application functionality |
| Browser LocalStorage | Saving tasks and preferences |
| Git | Version control |
| GitHub | Collaboration and repository hosting |
| Markdown | Project documentation |

**Note:** This project is a client-side application. It does not use a backend, server, API or database.

## 5. Team Members and Contributions

| Member | Branch | Contributions |
|---|---|---|
| Student 1: SK WAKIB RAJA (Roll No.: 57) | `feature-member1` | Repository initialization, application development, task sorting, priority statistics, priority-wise completion statistics and priority-based filtering |
| Student 2: ANURAG SINGH (Roll No.: 15) | `feature-member2` | Reusable task search helper, duplicate-entry prevention, duplicate prevention during editing and Clear Completed functionality |

Both students contributed through separate branches, meaningful commits, pull requests and code reviews.

## 6. Project Structure

```text
Reminder-ToDo-Manager/
├── index.html
├── style.css
├── app.js
├── task_actions.js
├── favicon.svg
├── README.md
├── CONTRIBUTING.md
├── CONFLICT_DEMO.md
└── .gitignore
```

## 7. Installation and Execution

1. Clone the repository:

   ```bash
   git clone https://github.com/wakibsk/Reminder-ToDo-Manager.git
   ```

2. Open the downloaded project folder.
3. Make sure all project files are present in the same directory.
4. Open `index.html` in a modern web browser.
5. Start adding and managing tasks.

No additional package installation or server configuration is required.

## 8. Local Data Storage

TaskFlow uses the browser's LocalStorage to store tasks under the key:

```javascript
taskflow_tasks
```

Task data remains available after refreshing or reopening the application in the same browser on the same computer.

Data is not automatically synchronized between different browsers or devices. Clearing browser site data may remove saved tasks.

## 9. Sample Usage

1. Enter a task such as **Complete DBMS assignment**.
2. Select its priority and due date.
3. Add the task to the list.
4. Mark it completed using the completion control.
5. Edit or delete a task when required.
6. Search for a task using the search field.
7. Use filters to view tasks by status or priority.
8. Sort tasks by priority or due date.
9. View the statistics dashboard to monitor progress.
10. Clear completed tasks when they are no longer needed.

## 10. Testing

The following operations should be tested:

- Adding valid tasks and attempting to add empty tasks.
- Preventing duplicate task entries.
- Editing existing tasks.
- Marking tasks completed and pending.
- Searching for matching and non-matching keywords.
- Filtering tasks by status and priority.
- Sorting tasks by priority and due date.
- Deleting individual tasks.
- Clearing completed tasks.
- Switching between light and dark themes.
- Refreshing the browser to verify LocalStorage persistence.

## 11. Screenshots and Sample Output

Add screenshots of the running application in a folder named `screenshots`.

Suggested screenshots:

- TaskFlow home screen.
- Task creation and task list.
- Priority selection and due dates.
- Search and filtering.
- Priority statistics dashboard.
- Light and dark themes.
- Completed-task clearing.

Example Markdown image syntax:

```markdown
![TaskFlow Home Screen](screenshots/taskflow-home.png)
```

## 12. GitHub Collaboration

Repository: [TaskFlow – Reminder-ToDo-Manager](https://github.com/wakibsk/Reminder-ToDo-Manager)

The project was developed collaboratively by two students using Git and GitHub.

The collaboration process included:

1. Initializing the Git repository.
2. Creating and configuring the GitHub repository.
3. Inviting the second student as a collaborator.
4. Creating separate feature branches.
5. Implementing features and making meaningful commits.
6. Pushing branches to GitHub.
7. Creating pull requests.
8. Reviewing and approving the partner's pull request.
9. Merging the feature branches into `main`.
10. Demonstrating and resolving a merge conflict in `README.md`.

Refer to `CONTRIBUTING.md` for contribution guidelines and `CONFLICT_DEMO.md` for the merge-conflict demonstration procedure.

## 13. Conclusion

TaskFlow demonstrates the development of a practical browser-based task management application using HTML, CSS and JavaScript. The project also provides practical experience in version control, collaborative development, Git branching, pull requests, code reviews, Markdown documentation and merge-conflict resolution.