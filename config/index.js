const path = require('path');

module.exports = {
    dev: {
        env: require('./dev.env'),
        port: 3007,
        outputPublicPath: '/devDist',
        outputPath: path.resolve( __dirname, '../devDist' ),
        proxy: {
			"/api": {
				target: "http://localhost:7000",
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
    },
    build: {
        cdnPath: "",
        outputPath: path.resolve(__dirname, "../dist"),
        outputFolder: path.resolve(__dirname, '../static')
    }
}