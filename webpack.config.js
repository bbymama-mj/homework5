import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

export const entry = './index.js';
export const mode = mode ? 'production' : 'development';
export const output = {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
};
export const module = {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
    },
    ],
};
// eslint-disable-next-line no-undef
export const devtool = process.env.NODE_ENV === "production" ? "hidden-source-map" : "source-map";
export const plugins = [
    new CopyPlugin({
        patterns: [
            { from: "img", to: "static" },
        ],
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
    })
];