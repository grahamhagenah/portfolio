---
layout: project.njk
title: Virtual Event Platform
subtitle: Virtual event application used to host the remote version of the 2022 Optima Conference.
tags: project
intro:
  summary: Every year, The Predictive Index hosts a conference to discuss and grow the category of talent optimization. Since 2020, they've offered a remote experience to complement the in-person event with a service called Bizzabo, a platform for hosting hybrid and virtual events. In 2022, we nixed the third-party platform in favor of our own bespoke solution.
  image: /assets/img/optima.jpg
  preview: /assets/img/optima-preview.webp
  alt: ""
---

## Stack Description

This event platform is built in React and hosted on a CDN through our instance of Pardot, a martketing tool in the Salesforce ecosystem. The live chat interface is provided by Stream Chat, a real-time chat messaging solution that allowed us to create profiles on-the-fly for each registrant as they entered the event.

## Additional Info

I worked closely with a backend developer who created an API I could use to query information for all the registrants of the event. With access to the database of registrants, I was able to set up an authentication gate to the event, allowing only participants who registered through the proper channels to log in and view the feeds.

