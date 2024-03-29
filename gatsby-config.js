module.exports = {
  siteMetadata: {
    title: 'Cosmic Division',
    description: 'Andre Clark Portfolio site',
    siteUrl: 'https://gatsbyblogfromtutorial.netlify.com/',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cosmic Division',
        short_name: 'Cosmic Div',
        start_url: '/',
        background_color: '#524763',
        theme_color: '#524763',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-remark-relative-images',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}
