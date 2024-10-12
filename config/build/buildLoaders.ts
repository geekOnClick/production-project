import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }
    
    const babelLoader =  {
        test: /\.(?:js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                targets: "defaults",
                presets: [
                    ['@babel/preset-env']
                ],
                "plugins": [
                    ["i18next-extract",
                        {
                            "locales": ["ru", "en"],
                            keyAsDefaultValue: true
                        }
                    ],
                ]
            }
        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => {
                            return Boolean(resPath.includes('.module'))
                        },
                        localIdentName: options.isDev ? '[path][name]__[local]-[hash:base64:5]' : '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    // если не используем typescript - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        scssLoader
    ]
}