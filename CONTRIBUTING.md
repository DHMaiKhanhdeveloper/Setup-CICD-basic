# Contributing to Basic React CI/CD

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Basic_CICD.git
   cd Basic_CICD
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔄 Development Workflow

1. **Make your changes** in your feature branch
2. **Run tests** to ensure everything works:
   ```bash
   npm test
   ```
3. **Run linting** to check code quality:
   ```bash
   npm run lint
   ```
4. **Format your code**:
   ```bash
   npm run format
   ```
5. **Commit your changes** with a clear message:
   ```bash
   git commit -m "feat: add new feature"
   ```

## 📝 Commit Message Guidelines

We follow conventional commits format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add user authentication
fix: resolve button click issue
docs: update installation instructions
test: add tests for App component
```

## ✅ Pull Request Process

1. **Push your branch** to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Reference to any related issues

3. **Wait for CI/CD checks** to pass:
   - All tests must pass ✅
   - Code must pass linting ✅
   - Build must succeed ✅

4. **Address review feedback** if requested

5. Once approved, your PR will be merged!

## 🧪 Testing Guidelines

- Write tests for all new features
- Ensure existing tests still pass
- Aim for good test coverage
- Use descriptive test names

Example test structure:
```javascript
describe('Component Name', () => {
  it('should do something specific', () => {
    // Test implementation
  })
})
```

## 📋 Code Style

- Follow ESLint rules configured in the project
- Use Prettier for consistent formatting
- Write clear, self-documenting code
- Add comments for complex logic

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - How to reproduce the problem
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Environment** - OS, Node version, browser, etc.
6. **Screenshots** - If applicable

## 💡 Suggesting Features

Feature suggestions are welcome! Please:

1. Check if the feature has already been suggested
2. Clearly describe the feature and its benefits
3. Provide use cases and examples
4. Be open to discussion and feedback

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

## ❓ Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Check existing documentation
- Review closed issues for similar questions

Thank you for contributing! 🎉

