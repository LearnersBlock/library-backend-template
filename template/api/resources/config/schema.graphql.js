module.exports = {
  query: `
    resourcesCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      resourcesCount: {
        description: 'Return the count of resources',
        resolverOf: 'application::resources.resources.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.resources.services.resources.count(options.where || {});
        },
      },
    },
  },
};
