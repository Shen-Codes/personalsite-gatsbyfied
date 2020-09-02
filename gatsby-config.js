require('dotenv').config();
module.exports = {
   siteMetadata: {
      title: `Shen Codes in Full Stack`,
      description: `Welcome to my portfolio site, where I show some of my work using React w/ Redux, Node.js w/ express, MongoDB and Firebase w/ Cloud Firestore. Coming soon, projects using Golang, Elixir Phoenix, and my foray into devops and AWS`,
      author: `John Shen`,
      menu: [
         {
            name: `About`,
            path: `/`
         },
         {
            name: `Projects`,
            path: `/projects`
         },
         {
            name: `Blog`,
            path: `/blog`
         }
      ],
      social: {
         twitter: `https://twitter.com/ShenCodes`,
         linkedin: `https://www.linkedin.com/in/john-shen-fullstack/`,
         github: `https://github.com/Shen-Codes`,
         youtube: `https://www.youtube.com/channel/UCXoCUxbLvLoonZuVEmf2YCA`
      }
   },
   plugins: [
      {
         resolve: `gatsby-plugin-react-helmet`
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`
         }
      },
      {
         resolve: `gatsby-transformer-sharp`
      },
      {
         resolve: `gatsby-plugin-sharp`
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/logo.png` // This path is relative to the root of the site.
         }
      },
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: `koch2nitolpy`,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            downloadLocal: true
         }
      }
   ]
};
