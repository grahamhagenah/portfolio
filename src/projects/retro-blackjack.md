---
layout: project.njk
title: Retro Blackjack
subtitle: A minimalist blackjack game inspired by the classic handheld version from the early 90's.
tags: project
story: false
order: 5
live: https://blackjack.grahamhagenah.com
source: https://github.com/grahamhagenah/blackjack
intro:
  summary: This is a minimalist React-based application inspired by the classic handheld game from the early 90’s. My goal was to capture the charm and simplicity of the original version to play on the web.
  image: /assets/img/blackjack.jpeg
  preview: /assets/img/blackjack-preview.jpg
  alt: ""
---

## Purpose and Goals

I started this project to gain experience building an interactive, client-side application in React. I learn best when I alternate between exposing myself to new concepts and applying the knowledge in actual applications. Reading developer documentation and following tutorials is an important part of process, but I've found that tackling problems head-on with just-in-time learning is the most effective way to learn something new. In building this game, I sought a deeper understanding of React hooks, the fundamentals of functional programming, and handling state.

## Stack Description

The goal of this project was to deepen my understanding of React, but I could have used a different framework or library, or even just vanilla JavaScript. Using a library like React is powerful because of the seamless, efficient way it updates state and unlocks reusability of components. I got started fast with Create React App, which handled the configuration details and allowed me to focus on prototyping my design. The static files are distributed by Netlify, my go-to choice for hosting Jamstack apps and websites. Netlify has an incredible integration with GitHub which makes it easy to commit my changes and deploy the changes immediately.

## Lessons Learned

This project helped me to internalize the benefits of using React Hooks over Class-based objects, and specifically how this method eliminates the confusion surrounding the this keyword when updating state.

Something else I learned was nuance around where I should be storing state since components will have their own states they are concerned with as well as states that are common to several components. I came to conclusion that state should be stored in the nearest common ancestor of components that use the state, and only lifted when an additional component needs access to a state variable.