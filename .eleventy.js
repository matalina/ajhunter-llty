module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: 'src',
      data: '_data',
      output: '_site',
    },
  };
};