# Git Branching Strategy

## Branch Structure

## Main Branches

### `master`

- Production-ready code
- Always stable
- Never commit directly to master

### `dev`

- Development integration branch
- Features are merged here first
- Testing happens here before master

## Feature Branches

### Naming Convention

- Format: `feature/descriptive-name`
- Use kebab-case (lowercase with hyphens)
- Examples:
  - `feature/navbar`
  - `feature/hero-section`
  - `feature/contact-form`

## Workflow Commands

### Creating a New Feature

- Ensure you're on dev: `git checkout dev`
- Ensure it's up to date: `git pull origin dev`
- Create a new branch: `git checkout -b feature/descriptive-name`
- Push to remote: `git push origin feature/descriptive-name`

### Working on a Feature

- Make changes and commit: `git commit -m "descriptive message"`
- Push to remote: `git push origin feature/descriptive-name`

### Completing a Feature

- Checkout dev: `git checkout dev`
- Merge into dev: `git merge feature/descriptive-name`
- Push to remote: `git push origin dev`

## Commit Message Convention

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Formatting, missing semi colons, etc
- `refactor:` - Code changes that neither fix nor add
- `test:` - Adding missing tests
- `chore:` - Maintenance tasks

## Best Practices

1. Never commit directly to master
2. Always create feature branches from develop
3. Keep commits atomic and focused
4. Write clear commit messages
5. Test in develop before merging to master

## Handling Merge Conflicts

When a merge conflict occurs:

- During merge, conflicts will be marked in files
- See which files have conflicts: `git status`
- Open the files and resolve conflicts
- Add the resolved files: `git add <file>`
- Commit the merge: `git commit -m "Merge branch 'feature/descriptive-name' into master"`
- Push to remote: `git push origin master`

Best practices for avoiding conflicts:

- Pull from dev frequently
- Keep feature branches short-lived

## Additional Tips

1. Use `git status` frequently to check your state
2. Use `git log` to review commit history
3. Consider using `git stash` when switching branches with uncommitted changes
4. Always review changes before committing (`git diff`)
5. Use meaningful branch names that reflect the feature

## Hotfixes

For urgent fixes to production code that can't wait for the normal development cycle:

### Creating a Hotfix

- Create branch from master: `git checkout -b hotfix/issue-description master`
- Make the fix
- Commit: `git commit -m "fix: description of urgent fix"`

### Completing a Hotfix

- Merge to master:
  ```bash
  git checkout master
  git merge hotfix/issue-description
  git push origin master
  ```
- Merge to dev (to keep branches in sync):
  ```bash
  git checkout dev
  git merge hotfix/issue-description
  git push origin dev
  ```
- Delete hotfix branch:
  ```bash
  git branch -d hotfix/issue-description
  ```
