/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports = api => {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            locales: './src/locales',
            routes: './src/routes',
            styles: './src/styles',
          },
          root: './src',
        },
      ],
    ],
  };
};
