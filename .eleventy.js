module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
  }
};
