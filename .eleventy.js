const eleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {

  // WebC
	eleventyConfig.addPlugin(eleventyWebcPlugin, {
		components: [
			// …
			// Add as a global WebC component
			"npm:@11ty/eleventy-img/*.webc",
		]
	});

	// Allow mardown in front matter
	const md = require("markdown-it")({
		html: false,
		breaks: true,
		linkify: true,
	});

	const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
	
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addNunjucksFilter("markdownify", (markdownString) =>
		md.render(markdownString)
	);

  // Image plugin
	eleventyConfig.addPlugin(eleventyImagePlugin, {
		// Set global default options
		formats: ["webp", "jpeg"],
		urlPath: "/img/",

		// Notably `outputDir` is resolved automatically
		// to the project output directory

		defaultAttributes: {
			loading: "lazy",
			decoding: "async"
		}
	});

	eleventyConfig.addCollection("projects", collection => {
    const projects = collection.getFilteredByGlob("src/projects/*.md")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return projects;
  });

  // Copy `src/style.css` to `_site/style.css`
  eleventyConfig.addPassthroughCopy("src/style.css");

	// And copy scripts
	eleventyConfig.addPassthroughCopy("src/bundle.js");

  // Copy `assets` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};