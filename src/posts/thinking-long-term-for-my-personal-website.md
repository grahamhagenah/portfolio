---
layout: post.njk
title: Thinking Long-Term for My Personal Website
subtitle: I migrated my portfolio website to a static site generator for
  performance and long-term stability.
tags: blog
intro:
  summary: I migrated my portfolio website to a static site generator for
    performance and long-term stability.
  image: /assets/img/simplicity.webp
  preview: /assets/img/simplicity.webp
---
## My Workflow Over Time

A few months ago, I migrated my portfolio website from Gatsby, a React-based framework, to Eleventy, a straightforward, Markdown-friendly static site generator. While Gatsby does generate static files, I eventually realized that “static” can mean very different things in practice—ranging from lightweight HTML and Markdown to highly abstracted React applications with large dependency trees. That distinction ended up mattering more to me than I expected.

I’ve gone through many different technologies over the years. The first website I made in college—a portfolio for my digital illustrations—was just a barebones HTML file with an embedded `<style>` tag. There were no build steps, dependencies, or JavaScript. Just the skeletal basics of what I needed—and it was great for my purposes. If I had kept up with the minimal hosting costs, it would still be online today after ten years.

From there, I grew into more intensive development tools. I adopted CSS frameworks and preprocessors to make my stylesheets more concise and readable. I wanted databases to store and manage content, so I started using WordPress. I created repositories for my code to track progress and roll back changes. My days of drag-and-dropping files cowboy-style were finished.

I wanted to customize page templates, so I learned PHP and began writing server-side scripts. I also started shipping more and more JavaScript with every page—sprinkles of interactivity that eventually swallowed up my entire website. Suddenly, my HTML was replaced by JSX, and my sites were sending megabytes of JavaScript to the client.

That’s not to say I don’t love working in React. It opened a world of possibilities for me as a developer who often works alone. Building ambitious applications with the library gave me a better understanding of the fundamentals of the web, as well as functional programming and system architecture. But it’s not always the right tool for the job. I had to use it a lot to come to that conclusion.

## Choosing the Simple Path

For my portfolio site, the most straightforward path is the right one.

I want it to be fast-loading—ideally instantaneous. I want to be able to leave it alone for months, or even years, and not worry about maintenance. I want to serve the site locally after a long period away and not be overwhelmed by dependency updates, security patches, or broken build steps.

I want the file structure to be clear and flat, so I don’t have to dig through personal documentation or README files just to remember how things work. I want it to be portable, so I’m not tied to a particular framework or proprietary technology. And I want hosting to be cheap.

## Back to the Basics

Eleventy gives me all of this.

After all this time, I’m back to hosting static files and images with minimal JavaScript. There’s a quick build step to convert Nunjucks templates into HTML, little to no configuration required, and the site deploys in seconds to Netlify. Lighthouse scores are consistently near perfect. Blog posts and project pages live as Markdown files, with a bit of front matter to attach metadata like preview images and tags for search engine optimization.

Although Gatsby produces static output, maintaining the site still meant keeping up with a fast-moving JavaScript ecosystem. Over time, that maintenance burden undermined the simplicity and longevity I wanted for a personal site. With Eleventy, the abstractions feel thinner, the dependencies fewer, and the mental overhead much lower.

I’m hopeful this website stands the test of time—and that I can look back a decade from now knowing I made the right decision. The tried-and-true building blocks of the web aren’t going away anytime soon, so betting on them feels safe. I can’t guarantee that an exciting new tool won’t appear next week and tempt me to scrap this setup, but it’ll be a tall order.

I’ll check back in 2030.
