# Contributing Guide

## Team members
This project is developed by exactly two students using separate GitHub accounts.

## Responsibilities
- Student 1: `index.html`, `style.css` and `app.js`. Implements page structure, design, add task, display tasks and completion toggle.
- Student 2: `task_actions.js`. Implements LocalStorage loading/saving, deletion and search helper functions.

## Branch workflow
- Student 1 creates `feature-member1`.
- Student 2 creates `feature-member2`.
- Each student makes at least four meaningful commits on their own branch.
- Each student pushes their branch and opens one pull request into `main`.
- The partner reviews the pull request and leaves a genuine review comment.
- Merge both pull requests after review.

## Suggested meaningful commits
Student 1:
1. Create the HTML page structure.
2. Add responsive CSS styling.
3. Implement adding and displaying tasks.
4. Implement completion toggle and filters.

Student 2:
1. Implement loading tasks from LocalStorage.
2. Implement saving tasks to LocalStorage.
3. Implement deleting tasks.
4. Implement task-search helper and test it with sample data.

Make commits as the work is actually completed. Do not make empty or misleading commits.

## Merge-conflict demonstration
After both feature pull requests are merged, create two temporary branches from the same `main` commit. Both students edit the same sentence in `README.md` differently, commit and push their changes. Merge the first branch, then merge the second. Resolve the conflict by keeping one agreed sentence, remove all conflict markers, commit the resolution and capture screenshots before and after.

## Good practices
- Use meaningful names and comments.
- Test changes in a browser.
- Keep all source files in the same folder.
- Do not commit passwords, private information or unrelated files.
