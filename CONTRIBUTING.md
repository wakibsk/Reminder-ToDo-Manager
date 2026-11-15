# Contributing Guide

## 1. Team Members

TaskFlow is developed collaboratively by exactly two students using separate GitHub accounts.

- Student 1: SK WAKIB RAJA (Roll No.: 57)
- Student 2: ANURAG SINGH (Roll No.: 15)

## 2. Individual Responsibilities

### Student 1

- Initialize and configure the Git repository.
- Create the initial project structure.
- Develop and improve the application interface.
- Implement task sorting by priority and due date.
- Implement the priority statistics dashboard.
- Implement priority-wise task completion statistics.
- Implement priority-based task filtering.

### Student 2

- Implement reusable task search helper functions.
- Prevent duplicate task entries.
- Prevent duplicate task names during editing.
- Implement the Clear Completed Tasks functionality.
- Contribute to application testing and conflict resolution.

Both members participate in code reviews and collaborative development.

## 3. Branching Strategy

Each student works on a separate feature branch:

| Student   |      Branch       |
|-----------|-------------------|
| Student 1 | `feature-member1` |
| Student 2 | `feature-member2` |

The `main` branch contains the integrated and reviewed project.

## 4. Commit Guidelines

Each student must make at least four meaningful commits describing the changes implemented.

### Student 1 – Completed Commits

1. `Add task sorting by priority and due date`
2. `Add task priority statistics dashboard`
3. `Add priority-wise task completion statistics`
4. `Add priority-based task filtering`

### Student 2 – Completed Commits

1. `Integrate reusable task search helper`
2. `Prevent duplicate task entries`
3. `Prevent duplicate task names during editing`
4. `Add clear completed tasks feature`

Commits should describe actual development work. Empty or misleading commits should not be created.

## 5. Pull Request Workflow

1. Each student creates their assigned feature branch.
2. Changes are implemented and tested locally.
3. Meaningful commits are created.
4. The feature branch is pushed to GitHub.
5. A pull request is opened targeting `main`.
6. The other student reviews the changes.
7. The reviewer submits an approval or requests changes.
8. The pull request is merged after approval.

Both students must review their partner's pull request.

## 6. Merge-Conflict Demonstration

A merge conflict is demonstrated using two temporary branches:

- `conflict-member1`
- `conflict-member2`

The procedure is:

1. Both branches are created from the same version of `main`.
2. Both students edit the same paragraph in `README.md` using different descriptions.
3. Each student commits and pushes their changes.
4. Student 1's branch is merged into `main`.
5. Student 2 fetches the updated `main` branch and merges it into `conflict-member2`.
6. Git produces a conflict because both branches changed the same paragraph.
7. Student 2 resolves the conflict by combining the useful information from both descriptions.
8. The resolved file is staged, committed and pushed.
9. A pull request is reviewed and merged into `main`.

The conflict and resolution are documented in `CONFLICT_DEMO.md`.

## 7. Good Development Practices

- Use meaningful variable and function names.
- Add comments where necessary.
- Test application functionality after making changes.
- Keep project files organized.
- Use meaningful commit messages.
- Review partner changes before merging.
- Do not commit passwords, credentials or private information.
- Avoid committing unrelated or unnecessary files.

## 8. Running the Project

No additional package installation is required.

Open `index.html` in a modern web browser to run TaskFlow.