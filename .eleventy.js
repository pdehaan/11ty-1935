const Nunjucks = require('nunjucks');

module.exports = function (eleventyConfig) {
  const nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes")
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
