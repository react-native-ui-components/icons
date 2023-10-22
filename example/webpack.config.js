const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pak = require("../package.json");

const babelLoaderConfiguration = {
	test: /\.js|\.tsx?$/,
	include: [
		path.join(__dirname, "../src"),
		path.join(__dirname, "src"),
		path.join(__dirname, "index.web.js"),
		path.join(__dirname, "node_modules/react-native-uncompiled")
	],
	use: {
		loader: "babel-loader",
		options: {
			cacheDirectory: true,
			presets: ["module:metro-react-native-babel-preset"],
			plugins: [
				"react-native-web",
				[
					"module-resolver",
					{
						extensions: [".tsx", ".ts", ".js", ".json"],
						alias: {
							[pak.name]: path.join(
								__dirname,
								"..",
								pak.source
							),
							react: path.resolve("./node_modules/react"),
							"react-dom": path.resolve(
								"./node_modules/react-dom"
							),
							"react-native-web": path.resolve(
								"./node_modules/react-native-web"
							)
						}
					}
				]
			]
		}
	}
};

const imageLoaderConfiguration = {
	test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
	type: "asset/resource"
};

module.exports = {
	mode: "development",
	entry: [path.join(__dirname, "index.web.js")],
	output: {
		filename: "bundle.web.js",
		path: path.join(__dirname, "dist")
	},
	module: {
		rules: [imageLoaderConfiguration, babelLoaderConfiguration]
	},
	resolve: {
		alias: {
			"react-native$": "react-native-web"
		},
		extensions: [".web.js", ".web.ts", ".web.tsx", ".ts", ".tsx", ".js"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "/public/index.html")
		})
	]
};
