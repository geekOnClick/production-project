import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {

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

    return [
        typescriptLoader,
        scssLoader
      ]
}