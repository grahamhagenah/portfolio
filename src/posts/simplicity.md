---
layout: post.njk
title: I'm Choosing Simplicity For My Personal Website
subtitle: 
tags: blog
intro:
  summary: I recently migrated my portfolio website from Gatsby, a React-based framework, to Eleventy, the simpler, markdown-friendly static-site generator, and in doing so recovered a long-forgotten peace of mind. 
  image: /assets/img/eleventy.jpg
  preview: /assets/img/simplicity.jpg
  alt: ""
---

## Settling on Gatsby

When I have the flexibility to work with any framework or method of creation, I’m going to lean towards the simpler path. So long as a particular technology fulfills the needs of a project, I see value in choosing the option that requires the least amount of [magic](https://en.wikipedia.org/wiki/Magic_(programming)), black-box features that I likely couldn’t understand or implement myself. I’m happy to work with libraries or frameworks that abstract away complex problems. These tools allow for a different kind of simplicity — an offloading of knowledge-work to skilled developers who aren’t afraid to dive deep into solving niche problems for the community. 

But  all things in moderation. When I started building my portfolio in [Gatsby](https://www.gatsbyjs.com/), I didn’t ask whether it was the right tool for the job. I noticed what the developer community was excited about and followed the common wisdom, deciding that building a full project for myself using that framework would be a worthwhile experience. Maybe I could use Gatsby for my freelance projects in the future. I was curious how it would work with a CMS (sanity.io in this case). How much control could I give to my clients? What are the points of frustration, if any? Does the performance live up to the lofty expectations?

In my experience, I can only get so much from reading a stranger’s blog post running through the pros and cons of a framework. I have to try it for myself. I won’t vouch for a technology, or feel comfortable criticizing an approach unless I'm drawing from first-hand knowledge. So that’s how I settled on using Gatsby to build out my portfolio, a low-stakes project for showcasing my work history.

## Complexity For Its Own Sake

Comprehensibility feels underrated in the current environment. The tides may be shifting, but I’ve seen many developers early in their career choose to build their portfolios with React just to show that they can — I’ve fallen into this trap. The desire to impress potential employers, or other developers, or to prove to yourself that you’re fluent in the latest framework is a powerful force. It leads to otherwise competent developers taking a more convoluted approach that may be difficult to maintain, less performant, and more error-prone.

I don’t mean to say that Gatbsy is the always the wrong option. It’s a fascinating framework with a strong, passionate community. I’ll be keeping a close eye on it for years to come, especially now that Netlify has acquired Gatsby Inc. But for me, in retrospect, it was a poor choice for the backbone of a tiny, personal website that only I would be updating.

Are scoped styles necessary on site with a two or three template pages? How about a headless CMS for storing a few blog posts? Is it helpful to build a reusable React component just to display an unordered list? How can I reduce the amount of JavaScript I’m shipping to the client? Will this site be stable one year from now? How about five years from now? Will I be able to upgrade versions easily without the entire site breaking? These are all questions I should have considered before creating the website, because it would have saved me hours of toiling.

## Dependency Hell and Technical Debt

The reality is, while developing with Gatsby, I was spending an undue amount of time updating dependencies, migrating to the latest versions, scouring the web for fixes to obscure bugs, combing through the docs to get a better grasp of the platform, and implementing workarounds to remove baffling error messages. The longer I spent building out the site, the deeper I found myself in technical debt. 

There is a point I eventually hit where I began to consider alternative solutions. It wasn’t in migrating my site from Gatsby v3 to v5 — I dutifully updated dependencies where it was possible, replaced plugins, and handled breaking changes. It wasn’t in troubleshooting the hot module reloader when it refused to update changes in Safari — I switched to using only Chrome for development when it became clear a fix wasn’t in the works. What changed my mind about Gatsby was a hydration error that appeared one day, inexplicably, in my console: Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server.

I wasn’t the only one struggling with this issue. In fact, it’s one of the most common errors encountered with server-side rendering and static-site generators. What’s frustrating is this error may only appear in the production build of the site, which makes troubleshooting a more complicated affair. As the error message alludes, the crux of the issue is the Gatsby-compiled HTML not matching the version generated by React in the browser. The user sees a flash of content that’s immediately replaced with the freshly generated content — far from the ideal experience, and ultimately defeating the point of precompiling the HTML document. React, in effect, abandons the server-generated DOM data and switches to a full client-side render. 

The ostensible solution is to find the discrepancy between the client render and the server render. The error can be caused by components that don’t render reliably consistent data, or invalid HTML, or simply forgetting closing tags for an element. Josh Comeau helpfully lays this out his blog post [The Perils of Rehydration](https://www.joshwcomeau.com/react/the-perils-of-rehydration/). However, the error remains difficult to detect and resolve thanks in part to the difference between production and development modes, and the vague and indirect side-effects of this issue that obfuscate the root cause. 

As the time of writing, rehydration errors still plague the Gatsby community, and the discussed workarounds have major drawbacks that defeat the purpose of using static-site generators in the first place.

## Choosing Simplicity

I’m not one to dwell on sunk cost. I had my fun with Gatsby, and learned a lot about the benefits of *Jamstack Architecture*. And as a developer who cut his teeth on monolithic solutions like Wordpress and Drupal, it was refreshing to try out a method that decouples the front-end and and the back-end.

But I was ready to take it a step further — to eliminate the need for a database entirely. I yearned for a solution that evoked the early days of the web, to do away with the heavy node_modules directory, to return to tools that felt comprehensible, to websites that will stand the test of time. I searched for a tool that would once again spark my passion for developing on the web platform. Something bare-bones, light on magic, and built close to the metal.

Enter Eleventy, a static-site generator that bills itself as the stable, flexible, zero-config alternative to the framework rat race. I’ll cut to the chase and say that this is the definitive solution I was looking for to build my personal portfolio. It only take a day or so to completely rewrite the site, and minimal time spent in the developer docs. Everything from styling, to asset management, to templating with *nunjucks* was straight-forward and intuitive. I’ve never felt more competent developing a site, and I was happy to stick to my bread-and-butter: HTML, CSS, and a sprinkle of JavaScript. Blog posts and project pages are simply markdown files with a bit of front-matter to attach metadata like preview images and tags for search-engine optimization.

The result is a site that compiles and pushes to production almost instantaneously. What took Gatsby several minutes, Eleventy can accomplish in seconds, and without the complexity and performance hits that come with content rehydration. Furthermore, all my content is freed from the constraints of a particular technology or platform — I’ll have no trouble migrating my markdown files to other services in the future if the need arises. Editing content has never been faster or simpler. I finally have peace of mind, and confidence that I’ve built a website that will continue on in perpetuity, regardless of the success of individual platforms or the whims of behemoth corporations.

## Right Tool, Right Context

I love working in React, and I’m grateful for the opportunities it’s opened for me, and the applications the library has empowered me to create. I’m a better developer for having used React, and can confidently say it’s granted me a better understanding of the fundamentals of the web and programming in general.

That being said, it’s not always the right tool for a given project, especially if the goals are efficiency, longevity, and performance. If React is the favored instrument of the community, it’s also the most overused. When planning the build for a project, it’s worth thinking about the objectives and weighing the costs for various tools, even if it means considering a tech stack you’re not familiar with, or perhaps a technology that doesn’t seem as impressive or pioneering on its face.

In this case, I’m choosing Eleventy, and the simpler life it affords.
