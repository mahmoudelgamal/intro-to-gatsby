module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.gatsbyjs.org',
        title: `Gatsby Default Starter !!`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        image:  'https://res.cloudinary.com/dmnlmm15d/image/upload/v1645476326/cld-sample.jpg',     
    },
    plugins: [
        'gatsby-plugin-react-helmet',
       {
         resolve: 'gatsby-source-filesystem',
         options: {
           name: 'posts',
           path: `${__dirname}/src/posts/`,
         },
       },
       {
         resolve: 'gatsby-plugin-page-creator',
         options: {
           path: `${__dirname}/src/posts/`,
         },
       },
       'gatsby-remark-images',
       {
         resolve: 'gatsby-plugin-mdx',
         options: {
          gatsbyRemarkPlugins: [
              {
                resolve: 'gatsby-remark-images',
                options: {
                  maxWidth: 1200,
                },
              },
            ],
           defaultLayouts: {
             posts: require.resolve('./src/components/post-layout.js'),
           },
           parseFrontmatter: [`mdx`],
         },
       },
       {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images/`,
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      'gatsby-plugin-image',
       {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: 'vnkupgyb',
          dataset: 'production',
        },
      },
    ],
}