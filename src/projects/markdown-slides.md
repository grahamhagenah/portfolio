---
layout: project.njk
title: Markdown Slides
subtitle: React-based markdown editor for drafting and displaying simple presentations.
tags: project
story: false
order: 1
stack: ['react', 'netlify']
live: https://slides.grahamhagenah.com
source: https://github.com/grahamhagenah/markdown-slides
intro:
  summary: This web app is a work-in-progress, but will be finished soon. You may view the live site or read the code as I build it out.
  image: /assets/img/markdown.webp
  preview: /assets/img/markdown-preview.webp
  alt: ""
---

## How It Works
Markdown Slides is a markdown editor at its core, using features and APIs from the [react-markdown-editor-lite](https://www.npmjs.com/package/react-markdown-editor-lite) npm package. With help from a parser, I wrote code to extract markdown from the editor and split the text into distinct slides in a deck. Slides are defined using headers, and users can swap between the slides using the legend in the left-most column.

## Future Updates
For now, the only way to swap between slides is to select headings from the legend. I’ll be implementing slide controls and full-screen previews to enable the basics of a presentation tool.