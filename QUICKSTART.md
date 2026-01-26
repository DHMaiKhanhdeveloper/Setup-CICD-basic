# 🚀 Quick Start Guide

Get up and running with this React CI/CD project in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including React, Vite, Vitest, and ESLint.

## Step 2: Start Development Server

```bash
npm run dev
```

Open your browser to `http://localhost:5173` to see your app running!

## Step 3: Make Changes

Edit `src/App.jsx` to see hot module replacement in action. Your changes will appear instantly in the browser.

## Step 4: Run Tests

```bash
npm test
```

Ensure all tests pass before committing your changes.

## Step 5: Push to GitHub

```bash
git add .
git commit -m "feat: initial commit"
git push origin main
```

The CI/CD pipeline will automatically:
- ✅ Install dependencies
- ✅ Run linting checks
- ✅ Execute tests
- ✅ Build the application
- ✅ Deploy (if configured)

## Next Steps

### Enable GitHub Pages Deployment

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Push to main branch
5. Your app will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### View CI/CD Pipeline

1. Go to **Actions** tab in your GitHub repository
2. Watch your workflows run automatically
3. Check logs if any step fails

### Add Status Badges

Add to your README.md:

```markdown
![CI/CD](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/CD%20Pipeline/badge.svg)
```

## 📚 Available Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Create production build |
| `npm test` | Run all tests |
| `npm run lint` | Check code quality |
| `npm run format` | Format code |
| `npm run preview` | Preview production build |

## 🎯 What's Included?

- ⚛️ React 18 with modern hooks
- ⚡ Vite for lightning-fast development
- 🧪 Vitest for unit testing
- 🎨 ESLint for code quality
- 💅 Prettier for code formatting
- 🔄 GitHub Actions for CI/CD
- 📦 Ready-to-deploy build

## 🆘 Common Issues

### Port 5173 already in use?
```bash
# Kill the process or change port in vite.config.js
```

### npm install fails?
```bash
# Try clearing cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Tests failing?
```bash
# Run in watch mode to debug
npm run test:watch
```

## 🎉 You're All Set!

Start building your amazing React application with automated CI/CD!

For detailed documentation, see [README.md](./README.md)

