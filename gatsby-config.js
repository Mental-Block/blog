module.exports = {
  siteMetadata: {
    title: `Bad Ideas Guy`,
    author: {
      name: `Aaron Tibben`,
      summary: `I am a software developer who also like to find intresting investment opportunities`,
    },
    description: ``,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
            endpoint: "https://gmail.us7.list-manage.com/subscribe/post?u=b24e063c4016bfebd34ff0a64&amp;id=749e03769b", // string; add your MC list endpoint here; see instructions below
            timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },    
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/svg/`,
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        display: "standalone",
        name: `Bad Ideas Guy`,
        short_name: `BadIdeasGuy`,
        start_url: `./public/index.html`,
        icon: `./svg/logo.svg`,
        theme_color_in_head: false
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
