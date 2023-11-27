---
layout: project.njk
title: Markdown Slides
subtitle: A markdown editor for drafting and displaying simple presentations.
tags: project
story: false
order: 1
stack: ['react', 'netlify']
live: https://slides.grahamhagenah.com
source: https://github.com/grahamhagenah/markdown-slides
intro:
  summary: A markdown presentation editor, built in React, for drafting, displaying, and sharing simple presentations.
  image: /assets/img/markdown.webp
  preview: /assets/img/markdown-preview.webp
  alt: ""
---

## How It Works
Markdown Slides is a markdown editor at its core, using features and APIs from the [react-markdown-editor-lite](https://www.npmjs.com/package/react-markdown-editor-lite) npm package. With help from a parser, I wrote code to extract Markdown from the editor and split the text into distinct slides in a deck. Slides are defined using headers, and the controls allow users to navigate between slides, enable a distraction-free fullscreen mode, and toggle between dark and light themes.

After some initial user feedback (comments from friends), I added a demo slide deck to the app, which is always the first thing to load. The demo provides an immediate example that introduces the fundamentals of Markdown syntax to those who are unfamiliar. Everything from italic text to tabular data is covered. The demo also explains the simple process of creating and editing new slides and gives users something to play around with when they first show up.

I load the demo markdown variable into the editor after the initial render and initialize the current slide.

```jsx
  useEffect(() => {
    mdEditor.current.setText(demo)
    setCurrent(0)
  }, []);
```

The ```setText``` API triggers an *onchange* event that runs the text through a markdown parser and passes the output to a function that reads through each line of text, creating an array of slides based on the location of headers. React saves the array as state and it becomes the content of the slide deck. Every time the user makes a change, the app re-renders, updating the content and deleting or creating slides.

## Future Updates

For now, the app requires users to save markdown files to their computer if they want to save side decks. I'd like to implemenet a backend with Remix in the future to allow users to save their slides or share presentations links with others.

Users will want more options to format and style their slide decks. I want to add functionality for parsing frontmatter to allow users to set background colors, typefaces, and custom themes.

I'm also interested in exploring the [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) to allow users to click-and-drag slides to change their order in the deck. Currently, users need to manually copy and paste text from the editor to change the order of slides. I could implement a feature in which the content of slides is automatically identified and moved in the Markdown editor to reflect the interface view.

Furthermore, it would be nice to hide the Markdown editor and edit the slides directly through the interface, more closely resembling the workflow of PowerPoint and Keynote while still retaining Markdown's portability and non-proprietary nature.