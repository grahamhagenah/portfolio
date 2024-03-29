---
layout: post.njk
title: Thinking Long-Term for My Personal Website
subtitle: Migrating my portfolio to a static site generator for long-term stability.
tags: blog
intro:
  summary: I migrated my portfolio website to a static site generator for long-term stability.
  image: /assets/img/simplicity.webp
  preview: /assets/img/simplicity.webp
  alt: ""
---

## My WorkFlow Over Time

A few months ago, I migrated my portfolio website from Gatsby, a React-based framework, to Eleventy, a straightforward, Markdown-friendly static site generator. I've gone through many different technologies over the years. The first website I made in college, a portfolio for my digital illustrations, was just a barebones HTML file with an embedded style tag. There were no build steps, dependencies, or JavaScript. Just the skeletal basics of what I needed—and it was great for my purposes. If I had kept up with the minimal hosting costs, it would still be online today after ten years.

From there, I grew to use more intensive development tools. I adopted CSS frameworks and pre-processors to make my stylesheets more concise and readable. I wanted databases to store and manage content, so I started using WordPress. I created repositories for my code to track progress and roll back changes. My days of drag-and-dropping files cowboy-style were finished. I wanted to customize page templates, so I learned PHP and began writing server-side scripts. I also started shipping lots of JavaScript with every page—sprinkles of interactivity that eventually swallowed up my entire website. Suddenly, my HTML was replaced by JSX, and my sites sent megabytes of JavaScript to the client.

That's not to say I don't love working in React. It opened a world of possibilities for me as a developer who often works alone. Building ambitious applications with the library has granted me a better understanding of the fundamentals of the web, as well as functional programming and system architecture. But it's not always the right tool for the job. I had to use it a lot to come to that conclusion.

For my portfolio site, the most straightforward path will do. I want it to be fast-loading--instantaneous. I want to be able to leave it alone for months, or even years, and not worry about maintenance. I want to serve the site locally after a period of time away and not be overwhelmed with dependency updates and security patches. I like the file structure to be clear and flat, so I don't have to dig through personal documentation and README.md to remind myself how it all works. I want it to be portable so I'm not tied into a particular framework or proprietary technology. And I want hosting to be cheap.

## Back To Static Files

Eleventy gives me all this and more. After all this time, I'm back to basics, hosting static files and images with minimal JavaScript. There's a quick build step for converting Nunchucks templates into HTML, no configuration necessary, the site deploys in seconds to Netlify, and scores near-perfect Lighthouse reports. Blog posts and project pages are Markdown files with a bit of front-matter to attach metadata like preview images and tags for search engine optimization.

I'm hopeful this website stands the test of time, and I can look back a decade from now, knowing I made the right decision. The tried-and-true building blocks of the web aren't going away anytime soon, so any bet on those technologies will likely pay off. I can't guarantee that an exciting tool won't appear next week that inspires me to scrap my static site generator, but that'll be a tall order.

I'll see you in ten years.