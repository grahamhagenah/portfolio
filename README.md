## Here's How It All Works
If it's been a while since you touched this, here's a reminder of the basics.

### Run Eleventy
We can use the npx command (also provided by Node.js) to run our local project's version of Eleventy. Let’s make sure our installation went okay and try to run Eleventy:

```npx @11ty/eleventy```

### Gaze upon your templates
Use --serve to start up a hot-reloading local web server.

```npx @11ty/eleventy --serve```

### Updating content
Update content and templates from the /src directory, not /_site which is where the build files are created.

### Deploying site
When you're redy to deploy, run the build command to generate documents in the _site directory, then push to the repository.

```npm run build ```