module.exports = {
  siteMetadata: {
    title: 'katjuell.site',
    author: 'Kat Juell',
    description: 'personal website for katjuell',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'katjuell.site',
        short_name: 'katjuell.site',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site. 
      },
    },
    'gatsby-plugin-sass',
  ],
}
