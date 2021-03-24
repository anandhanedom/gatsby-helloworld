module.exports = {
  siteMetadata: {
    title: "LaLiga Santander",
    author: "Andres Iniesta",
  },

  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
