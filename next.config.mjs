// next.config.js
import { interpolateName } from 'loader-utils';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    const oneOfRules = config.module.rules.find((rule) => Array.isArray(rule.oneOf));

    if (oneOfRules) {
      // Modify the rule handling SCSS and CSS module files
      const moduleCssRule = oneOfRules.oneOf.find((rule) =>
        rule.test && rule.test.toString().includes('.module.css')
      );
      const moduleSassRule = oneOfRules.oneOf.find((rule) =>
        rule.test && rule.test.toString().includes('.module.scss')
      );

      const localIdentName = '[name]__[local]';

      // Apply custom class name to CSS Modules for CSS files
      if (moduleCssRule) {
        const cssLoader = moduleCssRule.use.find(({ loader }) => loader.includes('css-loader'));
        if (cssLoader) {
          cssLoader.options.modules = {
            ...cssLoader.options.modules,
            getLocalIdent: (context, localIdentName, localName, options) => {
              return interpolateName(context, `${localName}`, options);
            },
            localIdentName,
            exportLocalsConvention: 'camelCaseOnly',
          };
        }
      }

      // Apply custom class name to CSS Modules for SCSS files
      if (moduleSassRule) {
        const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('css-loader'));
        if (cssLoader) {
          cssLoader.options.modules = {
            ...cssLoader.options.modules,
            getLocalIdent: (context, localIdentName, localName, options) => {
              return interpolateName(context, `${localName}`, options);
            },
            localIdentName,
            exportLocalsConvention: 'camelCaseOnly',
          };
        }
      }
    }

    return config;
  },
};

export default nextConfig;
