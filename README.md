# Basic React CI/CD with GitHub Actions

A modern React.js application with automated CI/CD pipeline using GitHub Actions. This project demonstrates best practices for continuous integration and continuous deployment in a frontend application.

## 🚀 Features

- ⚛️ **React 18** - Modern React with hooks
- ⚡ **Vite** - Lightning-fast build tool
- 🧪 **Vitest** - Unit testing with React Testing Library
- 🎨 **ESLint** - Code linting and quality checks
- 💅 **Prettier** - Code formatting
- 🔄 **GitHub Actions** - Automated CI/CD pipeline
- 📦 **Automated Deployment** - Ready for GitHub Pages

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- GitHub account

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Basic_CICD
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready bundle |
| `npm run preview` | Preview production build locally |
| `npm test` | Run unit tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code for linting errors |
| `npm run format` | Format code with Prettier |

## 🔄 CI/CD Pipeline

This project includes two GitHub Actions workflows:

### 1. Main CI/CD Pipeline (`ci-cd.yml`)

Triggered on push and pull requests to `main`, `master`, or `develop` branches.

**Pipeline Stages:**

1. **Install Dependencies** 
   - Caches node_modules for faster builds
   - Installs all project dependencies

2. **Linting** 
   - Runs ESLint to check code quality
   - Ensures code follows style guidelines

3. **Testing** 
   - Executes all unit tests
   - Verifies application functionality

4. **Build** 
   - Creates production build
   - Uploads build artifacts
   - Artifacts retained for 7 days

5. **Deploy** (Optional)
   - Only runs on `main` branch
   - Ready to connect to your deployment target

### 2. GitHub Pages Deployment (`deploy-pages.yml`)

Automatically deploys to GitHub Pages on push to `main`/`master` branch.

**Setup GitHub Pages Deployment:**

1. Go to your repository Settings
2. Navigate to "Pages" section
3. Under "Build and deployment", select:
   - Source: **GitHub Actions**
4. Push to main branch to trigger deployment

## 🏗️ Project Structure

```
Basic_CICD/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml           # Main CI/CD pipeline
│       └── deploy-pages.yml    # GitHub Pages deployment
├── public/
│   └── vite.svg               # Static assets
├── src/
│   ├── test/
│   │   └── setup.js           # Test configuration
│   ├── App.css                # App styles
│   ├── App.jsx                # Main App component
│   ├── App.test.jsx           # App tests
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── .eslintrc.cjs              # ESLint configuration
├── .gitignore                 # Git ignore rules
├── .prettierrc                # Prettier configuration
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## 🧪 Testing

Tests are written using Vitest and React Testing Library.

**Run tests:**
```bash
npm test
```

**Run tests in watch mode:**
```bash
npm run test:watch
```

## 🎨 Code Quality

### Linting
```bash
npm run lint
```

### Formatting
```bash
npm run format
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Included)
- Already configured via `deploy-pages.yml`
- Enable GitHub Pages in repository settings
- Deploys automatically on push to main

### Option 2: Netlify
Add to `ci-cd.yml` deploy step:
```yaml
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2
  with:
    publish-dir: './dist'
    production-deploy: true
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### Option 3: Vercel
```bash
npm install -g vercel
vercel --prod
```

### Option 4: AWS S3
Add to `ci-cd.yml` deploy step:
```yaml
- name: Deploy to S3
  uses: jakejarvis/s3-sync-action@master
  with:
    args: --follow-symlinks --delete
  env:
    AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## 🔐 Environment Variables

For deployment, you may need to add secrets to your GitHub repository:

1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add required secrets based on your deployment target

Common secrets:
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## 📊 CI/CD Status Badges

Add these to your README to show pipeline status:

```markdown
![CI/CD Pipeline](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/CD%20Pipeline/badge.svg)
![Deploy](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

The CI/CD pipeline will automatically run on your PR!

## 📝 Best Practices Implemented

✅ Automated testing on every commit  
✅ Code linting for consistency  
✅ Build verification before deployment  
✅ Dependency caching for faster builds  
✅ Artifact storage for debugging  
✅ Conditional deployment (only on main branch)  
✅ Modern React patterns and hooks  
✅ Component testing with React Testing Library  

## 🐛 Troubleshooting

### Build fails on GitHub Actions
- Check that all dependencies are in `package.json`
- Ensure Node.js version matches (18+)
- Review the Actions logs for specific errors

### Tests fail in CI but pass locally
- Ensure test setup is properly configured
- Check for environment-specific issues
- Verify all test dependencies are installed

### Deployment fails
- Verify GitHub Pages is enabled in settings
- Check deployment secrets are correctly set
- Ensure build artifacts are generated properly

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vitest Documentation](https://vitest.dev)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 📄 License

MIT License - feel free to use this project for learning and development!

---

**Happy Coding! 🎉**

Made with ❤️ using React and GitHub Actions

# Setup-CICD-basic
