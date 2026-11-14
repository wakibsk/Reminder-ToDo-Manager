# Merge Conflict Demonstration

Perform this after both feature branches have been merged and the application works.

1. Student 1 updates local main and creates `conflict-member1`.
2. Student 2 updates local main and creates `conflict-member2` from the same main version.
3. Both students edit the same original sentence in `README.md`, but use different replacement sentences.
4. Each student commits and pushes their branch.
5. Merge Student 1's branch into `main`.
6. On Student 2's branch, run:

```bash
git fetch origin
git merge origin/main
```

7. Open `README.md`. Git will show conflict markers similar to:

```text
<<<<<<< HEAD
Student 2's sentence
=======
Student 1's sentence
>>>>>>> origin/main
```

8. Replace the entire conflict section with one agreed final sentence and remove all markers.
9. Resolve and push:

```bash
git add README.md
git commit -m "Resolve README merge conflict"
git push
```

10. Complete Student 2's pull request and capture screenshots of the conflict and its resolution.

If GitHub allows the second pull request to merge without a conflict, use the local merge procedure above to demonstrate the conflict reliably.
