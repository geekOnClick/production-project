import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export const buildPlugins = (path: string): webpack.WebpackPluginInstance[] => {

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: path }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
      ]
}