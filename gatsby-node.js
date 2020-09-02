exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions;

   const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`);

   const result = await graphql(`
      {
         allContentfulPersonalSiteBlog {
            edges {
               node {
                  title
                  summary {
                     json
                  }
                  body {
                     json
                  }
                  slug
                  tags
                  createdAt
                  updatedAt
               }
            }
         }
      }
   `);

   // Handle errors
   if (result.errors) {
      reporter.panicOnBuild(`error is: ${result.errors}`);
      return;
   }

   result.data.allContentfulPersonalSiteBlog.edges.forEach(({ node }) => {
      createPage({
         path: `/blog/${node.slug}`,
         component: blogPostTemplate,
         context: {
            // additional data can be passed via context
            slug: node.slug
         }
      });
   });
};
