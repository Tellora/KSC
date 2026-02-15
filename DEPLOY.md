# How to Deploy Keshu B2B App to GitHub Pages

Since I cannot directly access your GitHub account due to security restrictions, follow these simple steps to launch your site live on the internet.

## Prerequisite
You already have git initialized and all files committed.

## Step 1: Create a Repository on GitHub
1. Log in to your GitHub account.
2. Click the **+** icon in the top right and select **New repository**.
3. Name it `keshu-b2b` (or any name you prefer).
4. Make sure it is **Public** (required for free GitHub Pages).
5. Do **NOT** initialize with README, .gitignore, or License (we have them).
6. Click **Create repository**.

## Step 2: Push Your Code
Copy the commands shown on the GitHub page under "…or push an existing repository from the command line". It will look like this:

```bash
git remote add origin https://github.com/<YOUR_USERNAME>/keshu-b2b.git
git branch -M main
git push -u origin main
```

Run these commands in your VS Code terminal (I have already prepared the commits).

## Step 3: Launch the Site
Once the code is pushed, run this single command in your terminal:

```bash
npm run deploy
```

This script will:
1. Build the production version of your app.
2. Upload it to a `gh-pages` branch on your repository.

## Step 4: Access Your Live Site
1. Go to your repository **Settings** > **Pages**.
2. You should see "Your site is live at...".
3. The URL will be: `https://<YOUR_USERNAME>.github.io/keshu-b2b/`

---
**Note:** If you see a blank page, wait 2-3 minutes for GitHub to process the deployment.
