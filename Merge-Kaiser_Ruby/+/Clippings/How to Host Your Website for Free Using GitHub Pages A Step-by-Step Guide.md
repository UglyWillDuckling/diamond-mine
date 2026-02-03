---
source: https://www.udacity.com/blog/2025/08/how-to-host-your-website-for-free-using-github-pages-a-step-by-step-guide.html
author:
  - "[[Alan Sánchez Pérez Peña]]"
  - "[[View All Posts by Alan Sánchez Pérez Peña]]"
published: 2025-08-06
created: 2026-02-01
tags:
  - article/github-pages
about:
  - "[[GitHub Pages]]"
---
Back in the old days when I was taking my first steps in web development, I was frustrated by the limited availability of free or affordable hosting options. I remember building simple websites with HTML and CSS but getting them online required me to pay for hosting on a shared server or going for “free” options that would either limit the things I could do with my websites or that would add their own display ads on top of my sites.

That’s why I was really glad to hear about GitHub Pages for the first time. This service really makes developers’ lives easier as anyone can publish their own static websites for free. This is great for small projects, documentation sites, and simple content websites alike.

In this guide, I’ll walk you through the entire process of hosting a website using GitHub Pages, from creating the repository to setting up a custom domain.

## Creating a GitHub Repository

The very first step is to create a new repository to host your website. If you don’t have a GitHub account yet, head to [github.com](https://github.com/) and sign up for free. Once you are logged in:

1. Click the green “New” button or the “+” icon in the top right corner
2. Select “New repository” from the dropdown menu
3. Name your repository (details on this below)
4. Make sure it’s set to “Public” (required for free GitHub Pages)
5. Check “Add a README file”
6. Click “Create repository”

### Understanding Repository Naming

There are two ways you can name your repository depending on how you want to host the files it contains.

#### Main Site

If you name your repository *myusername.github.io* (replacing “myusername” with your actual GitHub username), this becomes your main GitHub Pages site.

You can only have one “main” site and it will always be accessible at *https://myusername.github.io*.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfIKh93eAT-2QgiGnTVDcw8yQF1CKvyIEJGWsLFXWcEZtQ1Aw9gedY8S17ddrCmdh_FeUiNapsLdO3x-VITt2Fb3WktSY1e66wGHptxO4zuhaj6nffRFMVTt8t8NgLKHMM1JHte?key=nFRlXzxJkaEpOX7q8bsyaw)  
*Figure 1. To create a main site for your GitHub account, you need to use the myusername.github.io naming convention*

#### Project Site

Choosing any other name for your repository will create a separate project site.  
  
There’s a virtually unlimited number of project sites that you can create. They will all be based on your “main” site’s URL, followed by the project name, for example: *https://myusername.github.io/projectnam* e.

In case of naming conflicts, such as a folder in the main site’s repository sharing the same name as a project’s repository, the project repository will be prioritized.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfoRFBLna2GShYjd6kcTZtXXK0AsSsVveDmv2zCLWBrwdIhTHWcyfG9E6sSb6CUM-0rpFR5t9sdbJ6JAwaWTWP0jtKZv_lJ4HT-Nfj_WMGeoUhww_LFjAy_t9zUXHYo7I0RxzYd?key=nFRlXzxJkaEpOX7q8bsyaw)  
*Figure 2. The name you choose for your repositories will become subdirectories of your main site*

## Adding Your Website Files

Now that we have our repository, it’s time to add our website files. There are several ways to do this, and I’ll show you the most beginner-friendly approach first.

### Method 1: Using GitHub’s Web Interface

This method is perfect if you’re just getting started or are working with simple websites:

1. Navigate to your repository on GitHub
2. Click “Add file” → “Upload files”
3. Drag and drop your HTML, CSS, and JavaScript files
4. Make sure your main page is named “index.html”
5. Add a commit message like “Add initial website files”
6. Click “Commit changes”

### Method 2: Using Git Commands (Recommended)

If you’re comfortable with the command line, this method gives you more control:

```
# Clone your repository to your local machine
git clone https://github.com/myusername/projectname.git

# Navigate to the repository folder
cd projectname

# Add your website files to this folder
# Make sure your main page is named “index.html”

# Add all files to Git
git add .

# Commit your changes
git commit -m “Add initial website files”

# Push to GitHub
git push origin main
```

### Organizing Your Files

This is how I typically structure simple static website files. This organization keeps your project clean and makes it easy to maintain as it grows.

```
projectname/
├── index.html            (Your main page)
├── about.html            (Additional pages)
├── contact.html
├── css/
│   ├── style.css         (Your stylesheets)
│   └── responsive.css
├── js/
│   └── script.js         (Your JavaScript files)
├── images/
│   ├── logo.png          (Your images)
│   └── background.jpg
└── README.md             (Project description)
```

## Enabling GitHub Pages

Once you’ve uploaded your files, it’s very easy to enable GitHub Pages:

1. Go to your repository on GitHub
2. Click on the “Settings” tab (you might need to scroll to see it)
3. Scroll down to the “Pages” section in the left sidebar
4. Under “Source,” select “Deploy from a branch”
5. Under “Branch” choose “main” (or “master” if that’s what you’re using)
6. Select “/ (root)” as your folder
7. Click “Save”

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdx67qo-wW5Gh1CGVyn3sEuAi9qzOoVer06A4xTGOWw4MC3mwa86fGIqzD-c0-p2ef1edbwuRP-6n9Wy6PNBHKbEQX-CzUqx8nmgGjcERryf8xtXyZgODkuTan-WO62xF6ymRY?key=nFRlXzxJkaEpOX7q8bsyaw)  
*Figure 3. It only takes a few clicks to enable GitHub Pages for any repository you own*

### Understanding the Publication Process

After saving it usually takes a few minutes for the site to become available, so don’t worry if it doesn’t work immediately.

When I set up GitHub Pages for a small website for the first time, I was impatient and kept refreshing the URL expecting immediate results. Things don’t work that way. GitHub Pages needs a little time to build and deploy your site.

This publication process includes:

1. **Processing your files**: GitHub analyzes your repository structure
2. **Building the site**: If you’re using Jekyll (a static website generator supported natively by GitHub), it processes your files
3. **Deploying**: Your site becomes available at the GitHub Pages URL

You can monitor this process by going to the “Actions” tab in your repository, where you’ll see the deployment workflow in progress.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeab16vJt5qSWWr18h4l2QP0DjXyezjC-wnq_qxk2GTy6jFsKEqjXOMCa1L_JAxI6UArIh_J1hj2y6xYOlIZ5ps-Gr_ksdmgdc4NEODH3I0BuvgMpyZ5qjnTGMveelmCcfSwlYw?key=nFRlXzxJkaEpOX7q8bsyaw)  
*Figure 4. The “Actions” tab provides a real-time glimpse of the each deployment workflow process*

### Finding the URL

As I’ve described above in the repository naming section, the URL structure is very straightforward and it should be pretty easy to head to your newly published website by typing the URL directly in the address bar of your browser.

However, if you prefer, you can head back to the Pages section (or just reload it) and you’ll see a box at the top with a link to your freshly published site. This box will only appear once your website has been successfully deployed at least once.

If you click on “Visit site” you will see your new page live!

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfJFagN5ChMlgvUoN5BgDf7MucKCyfvBzbDgbZSmD1kZTpPjK8XCEBLjUAyZIyRpHDzbDj-kU47BKGOlW28bSjAUuTEU4zdQT51CJFGnoL5S3IS17sd5JV885AdFDitICd13NXI?key=nFRlXzxJkaEpOX7q8bsyaw)  
*Figure 5. Once the first deployment has been successful, you’ll find a box with your URL details in the Pages settings section*

## Customizing Your Domain

While the default URL provided by GitHub works perfectly fine, you might want to use your own domain name for certain projects that require a more professional appearance.

With this feature you can go from *https://myusername.github.io/projectname* to something like *https://projectname.com*, depending on the domain name you have. If you don’t have one yet, you’ll need to purchase a domain from a registrar like Namecheap, GoDaddy, or Cloudflare.

Once you have your domain, you can go ahead with these steps:

### Step 1: Configure GitHub Pages

1. Go to your repository settings
2. Navigate to the “Pages” section
3. Under “Custom domain,” enter your domain (e.g., www.yourdomain.com)
4. Check “Enforce HTTPS” (recommended for security)
5. Click “Save”

### Step 2: Configure Your DNS

You’ll need to create DNS records with your domain registrar. Here’s what I typically set up:

For a subdomain (like www.projectname.com):

**Type**: CNAME

**Name**: www

**Value**: [yourusername.github.io](http://yourusername.github.io/)

For an apex domain (projectname.com):

**Type**: A

**Name**: @

**Value**: 185.199.108.153

**Value**: 185.199.109.153

**Value**: 185.199.110.153

**Value**: 185.199.111.153

### Step 3: Wait

If you try to access your new domain name it might not work right away. DNS changes can take up to 24 hours to propagate worldwide, though in practice they often happen much faster. In my experience, it’s never taken more than 5 minutes for the domain to work but your mileage may vary.

## Why Choose GitHub Pages for Website Hosting?

Before taking a look into the technical steps, let me explain the compelling benefits that can make GitHub Pages become your go-to solution for hosting static websites:

### It’s Completely Free

GitHub Pages provides free hosting for public repositories. When I started my web development journey, I was spending $10-15 per month on basic hosting plans. With GitHub Pages, it’s possible to host dozens of projects without paying a cent.

### Zero Server Management

Unlike traditional hosting, you don’t need to worry about server maintenance, security updates, or uptime monitoring. GitHub handles all the infrastructure including content delivery networks (CDN) that allow your website to load quickly worldwide.

### Built-in Version Control

Every single change you make to your website is tracked through Git, giving you a complete history of your site’s evolution. [Version control](https://www.udacity.com/blog/2025/03/what-is-version-control-a-beginners-guide-to-git.html) can save you if you’ve accidentally broken something on your site as it allows you to always revert to a previous commit.

### Professional Workflow

Using GitHub Pages teaches you industry-standard practices like version control and deployment workflows that you’ll use throughout your development career. It’s like getting real-world experience while building your personal projects.

### Custom Domain Support

You can use your own domain name and still enjoy all the benefits of GitHub’s infrastructure. You could host dozens of projects with custom domains and visitors would never know the site is hosted on GitHub Pages.

### Automatic SSL Support

When you use your own custom domain, GitHub Pages automatically provides SSL certificates that secure your site with HTTPS. No configuration is required at all and this is a big deal in today’s web, where HTTPS is essential for user trust and SEO rankings.

## When Not To Choose GitHub Pages

Until now we have been praising GitHub Pages left and right but you should know that it definitely is not an universal solution to host everything you build. There are some important limitations that you should understand before using it to show that last project you’ve been working on to the world.

### Server Side Functionality Limitations

GitHub Pages is designed exclusively for static websites, which means any server-side functionality is out of the question. You cannot run server-side languages like PHP, Python (Django/Flask), Ruby on Rails, or Node.js backends.

However, this doesn’t mean your sites have to be basic. You can still build sophisticated applications using client-side frameworks such as React or Vue. You can also use static site generators like Jekyll, Hugo, or Gatsby.

If you want to have contact forms, comments, authentication, and other interactive elements in your website, there are tons of third-party services that offer them, more often than not for free.

### Repository Size Limits

GitHub Pages repositories should be under 1 GB, and individual files should always be under 100 MB. For most websites, this is more than enough. If you have big media files that go beyond this limit you can use external services like Cloudinary for images and YouTube or Vimeo for video.

### Bandwidth Limits

GitHub Pages sites have a soft bandwidth limit of 100 GB per month and a limit of 10 builds per hour. If you want to run your portfolio or a small business website, this won’t be an issue at all, but if you are planning to work on massive projects that require constant builds, you might need to look elsewhere for a more suitable hosting solution.

## Best Practices for GitHub Pages

Here are some best practices that I use to save time and avoid potential future headaches. I strongly encourage you to consider them all, even if you are not using GitHub Pages.

### Use Meaningful Commit Messages

Instead of vague messages like “update,” it’s better to be specific. This way you can always know what commit you should revert to if things go wrong.

### Test Locally Before Deploying

I always test my changes locally before pushing to GitHub. I suggest you do the same. There are a few ways to do this:

- Opening your HTML files directly in a browser
- Using a local server like Live Server in VS Code
- Running a simple Python server typing “python -m http.server 8000” in a terminal

### Optimize Your Images

Large images can significantly slow your site. You can use tools like TinyPNG to compress images before uploading them to your repository. If you use Cloudinary, you can use their f\_auto transformation and let it automatically choose the best format, dimensions, resolution, and quality for your images.

### Keep Your Repository Organized

As your site grows, I encourage you to maintain a clean file structure. Use folders for different types of assets and consider sticking to a consistent naming convention.

### Monitor Your Site’s Performance

GitHub provides basic analytics through the repository insights, but you might also want to set up Google Analytics to better understand your visitors and their behaviors.

### Regular Backups

GitHub is reliable but it’s always a good idea to make a habit of keeping local backups of your important projects. The beauty of Git is that every clone is essentially a complete backup.

## Wrapping Up

GitHub Pages has democratized web hosting, allowing anyone to publish a website without worrying about costs or complex server configurations. Today, it’s equally easy to host your first simple portfolio or more complex project sites.

Whether it’s a personal portfolio, a project showcase, or a simple business site, having your work online opens up opportunities and makes your skills visible to the world.

If you feel like you are ready to take your web development skills to the next level, you should consider Udacity’s [Front End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) to master modern web development techniques and responsive design. If you are more into full-stack development, the [Full Stack Web Developer Nanodegree](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044) covers both front-end and back-end technologies.