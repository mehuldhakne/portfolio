# Mehul J Dhakne — Portfolio

Personal portfolio website for Mehul J Dhakne, B.E. Electronics & Telecommunication Engineering student at GCOEA Amravati.

**Live site:** `https://mehuldhakne.github.io/portfolio/` *(update after deployment)*

---

## 🚀 Deploy to GitHub Pages in 4 Steps

1. **Create a new GitHub repository** named `portfolio` (or any name you prefer).

2. **Upload all files** from this folder into the repository root — make sure `index.html` is at the root level (not inside a subfolder).

3. **Enable GitHub Pages:**
   - Go to your repository → **Settings** → **Pages**
   - Under *Source*, select **Deploy from a branch**
   - Set branch to `main` (or `master`) and folder to `/ (root)`
   - Click **Save**

4. **Wait 1–2 minutes** — your site will be live at:
   `https://yourusername.github.io/portfolio/`

---

## 📁 File Structure

```
portfolio/
├── index.html          ← Home page
├── about.html          ← About & Education
├── projects.html       ← Technical Projects
├── skills.html         ← Technical Skills
├── activities.html     ← Leadership & Activities
├── contact.html        ← Contact Information
│
├── css/
│   ├── global.css      ← Shared theme, navbar, components
│   ├── home.css
│   ├── about.css
│   ├── projects.css
│   ├── skills.css
│   ├── activities.css
│   └── contact.css
│
├── js/
│   ├── nav-inject.js   ← Injects navbar on every page
│   └── main.js         ← Scroll effects, reveal animations
│
└── assets/
    └── resume/
        └── mehul_resume.pdf  ← Your actual resume PDF
```

---

## ✏️ Common Updates

**To update your CGPA:** Edit `index.html`, find `7.34` in the stats strip.

**To add a new project:** Copy a `<article class="project-card">` block in `projects.html` and update the content.

**To update resume:** Replace `assets/resume/mehul_resume.pdf` with your new file (keep the same filename).

**To add a profile photo:** In `about.html`, replace the `<div class="profile-avatar">MJD</div>` with:
```html
<div class="profile-avatar">
  <img src="assets/images/profile.jpg" alt="Mehul J Dhakne" />
</div>
```
Then add your photo as `assets/images/profile.jpg`.

---

## 🛠 Tech Stack

Pure HTML · CSS · Vanilla JS — no frameworks, no build step, no dependencies.
Works offline. Opens directly in any browser.
