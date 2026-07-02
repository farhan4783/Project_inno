# Guide: Deploying Anas & Sons Jewellers Website to Vercel

Vercel is the creator of Next.js and provides the easiest, fastest, and most reliable platform to host Next.js websites for free. Pushing updates is automated—every time you push changes to GitHub, Vercel will automatically build and deploy the updated site.

Here is the step-by-step guide to putting your website live.

---

## Step 1: Push Your Code to GitHub

Before deploying to Vercel, your website's codebase must be hosted in a GitHub repository.

1. **Log in to GitHub:** Open [github.com](https://github.com) and log in (or create a free account).
2. **Create a New Repository:**
   - Click the **"+"** icon in the top right and select **"New repository"**.
   - Name your repository (e.g., `anas-jewellers`).
   - Keep it **Private** (or Public, as you prefer) and leave "Add a README", ".gitignore", and "license" unchecked.
   - Click **"Create repository"**.
3. **Upload Your Local Code:**
   - Open your project folder (`anas-jewellers`) in VS Code.
   - Open the terminal in VS Code (Ctrl + ` or Cmd + `) and run these commands to initialize git, commit files, and push to GitHub:
     ```bash
     # Initialize git (if not already done)
     git init

     # Add all project files
     git add .

     # Commit the files
     git commit -m "feat: initial release with standalone catalog and pinpoint map"

     # Rename branch to main
     git branch -M main

     # Connect your local repository to GitHub (REPLACE with your actual GitHub URL from the repository page)
     git remote add origin https://github.com/YOUR_GITHUB_USERNAME/anas-jewellers.git

     # Push code to GitHub
     git push -u origin main
     ```

---

## Step 2: Connect Your GitHub to Vercel

1. **Go to Vercel:** Open [vercel.com](https://vercel.com).
2. **Sign Up / Log In:** Click **"Sign Up"** and select **"Continue with GitHub"**. This links your GitHub account and imports your repositories automatically.
3. **Authorize Vercel:** Click Authorize to give Vercel permissions to read your GitHub repositories.

---

## Step 3: Import Your Project and Deploy

1. **Dashboard:** Once logged in to the Vercel dashboard, click **"Add New..."** and select **"Project"**.
2. **Import Repository:** Find your `anas-jewellers` repository in the list and click **"Import"**.
3. **Configure Settings:**
   - **Framework Preset:** Vercel will automatically detect **Next.js** and configure all build/output settings (no changes needed).
   - **Root Directory:** `./` (default).
   - **Build & Development Settings:** Leave these default.
   - **Environment Variables:** Leave empty (unless you add custom keys later).
4. **Deploy:** Click the **"Deploy"** button. 
   - Vercel will build the website, compile TypeScript, optimize images, and deploy. This takes about 1–2 minutes.
   - Once completed, you will see a congratulations screen with a live link (e.g., `anas-jewellers.vercel.app`).

---

## Step 4: Link Your Custom Domain (Optional but Recommended)

To make the site accessible via your official domain (e.g., `anasandsonsjewellers.co`):

1. **Go to Settings:** On your project page in Vercel, go to the **"Settings"** tab, then select **"Domains"** in the sidebar.
2. **Add Domain:** Enter your custom domain name and click **"Add"**.
3. **Configure DNS Records:**
   - Vercel will display the DNS settings you need to set up on your domain provider (e.g., GoDaddy, Namecheap).
   - Log in to your domain registrar's panel, find the DNS Management section, and add the records shown by Vercel:
     - For the apex domain (e.g., `anasandsonsjewellers.co`): Add an **A Record** pointing to `76.76.21.21`.
     - For the subdomain (e.g., `www.anasandsonsjewellers.co`): Add a **CNAME Record** pointing to `cname.vercel-dns.com`.
4. **Active Status:** Once DNS changes propagate (usually takes 5–15 minutes), Vercel will automatically generate a free SSL certificate (HTTPS), and your custom domain will be live!

---

## Step 5: How to Deploy Updates in the Future

Once connected, updating your live website is incredibly simple:

1. Make edits to your files locally.
2. Open terminal in VS Code and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update jewellery catalogue"
   git push origin main
   ```
3. **That's it!** Vercel will notice the new commit on GitHub, automatically start a new build, and update your live site within a minute.
