const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]sx'],
    addons: [
        "@storybook/preset-typescript"
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
            ]
        });
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    }
                },
                'sass-loader'
            ],
            include: path.resolve(__dirname, '../'),
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
      },
};