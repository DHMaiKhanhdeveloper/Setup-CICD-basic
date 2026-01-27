# 🚀 How to Enable GitHub Pages Deployment

## Step 1: Enable GitHub Pages on Repository

1. Go to your repository on GitHub:
   ```
   https://github.com/DHMaiKhanhdeveloper/Setup-CICD-basic
   ```

2. Click **Settings** tab

3. In the left sidebar, click **Pages**

4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions** (NOT "Deploy from a branch")
   - Click **Save**

5. Wait a few seconds for GitHub to process the change

## Step 2: Re-enable Auto-Deploy Workflow

Edit `.github/workflows/deploy-pages.yml`:

Change FROM:
```yaml
on:
  # Temporarily disabled - uncomment when ready to deploy
  # push:
  #   branches: [ main, master ]
  workflow_dispatch:
```

Change TO:
```yaml
on:
  push:
    branches: [ main, master ]
  workflow_dispatch:
```

## Step 3: Commit and Push

```bash
git add .github/workflows/deploy-pages.yml
git commit -m "feat: enable GitHub Pages auto-deployment"
git push origin master
```

## Step 4: Verify Deployment

1. Go to **Actions** tab
2. Wait for "Deploy to GitHub Pages" workflow to complete
3. Your site will be live at:
   ```
   https://DHMaiKhanhdeveloper.github.io/Setup-CICD-basic/
   ```

## ⚠️ Important Notes

- Make sure to enable GitHub Pages BEFORE re-enabling the workflow
- The first deployment may take 1-2 minutes
- Check the Actions tab for any errors during deployment

## 🎯 Quick Enable Commands

```bash
# After enabling Pages on GitHub, run:
cd /d/Project/Devops/Setup_Source_Github/Practice_Basic_CICD_Github/Basic_CICD

# Uncomment the push trigger in deploy-pages.yml
# Then:
git add .github/workflows/deploy-pages.yml
git commit -m "feat: enable auto-deploy to GitHub Pages"
git push origin master
```

## 🆘 Troubleshooting

### Error: "Not Found"
- Verify Pages is enabled in repository Settings
- Ensure Source is set to "GitHub Actions"

### Workflow doesn't trigger
- Check if push trigger is uncommented
- Verify you're pushing to master/main branch

### Deployment fails
- Check Actions logs for specific errors
- Verify build completes successfully first

