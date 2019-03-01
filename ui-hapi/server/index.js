import Hapi from 'hapi';
import Path from 'path';
import Webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import Config from '../internals/webpack/webpack.dev.babel';

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

const compiler = Webpack(Config);
//compiler.apply(new DashboardPlugin());

const devMiddleware = WebpackDevMiddleware(compiler, {
    logLevel: 'trace',
    publicPath: Config.output.publicPath,
    silent: false
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {
    }
});

server.ext({
    type: 'onRequest',
    method: async (request, h) => {
        const { req, res } = request.raw;
        try {
            let setupWebpackDevMiddleware = new Promise((resolve, reject) => {
                devMiddleware(req, res, error => {
                    if (error) reject(error);
                    resolve();
                });
            });

            await setupWebpackDevMiddleware;
            return h.continue;
        }
        catch (err) {
            throw err;
        }
    }
});
server.ext({
    type: 'onRequest',
    method: async (request, h) => {
        const { req, res } = request.raw;
        try {
            let setupWebpackHotMiddleware = new Promise((resolve, reject) => {
                hotMiddleware(req, res, error => {
                    if (error) reject(error);
                    resolve();
                });
            });

            await setupWebpackHotMiddleware;
            return h.continue;
        }
        catch (err) {
            throw err;
        }
    }
});
server.ext({
    type: 'onPreResponse',
    method: async (request, h) => {
        const { req, res } = request.raw;
        try {
            let setupWebpackHotMiddleware = new Promise((resolve, reject) => {
                hotMiddleware(req, res, error => {
                    if (error) reject(error);
                    resolve();
                });
            });

            await setupWebpackHotMiddleware;
            return h.continue;
        }
        catch (err) {
            throw err;
        }
    }
});

server.ext('onPreResponse', async (request, h) => {

    // This assumes you are using the html-webpack-plugin
    // If you are serving a static html file just reply with that file directly
    const filename = Path.join(compiler.outputPath, 'index.html');
   await compiler.outputFileSystem.readFile(filename, (fileReadErr, result) => {

        if (fileReadErr) {
            return h.response(fileReadErr);
        }

        return h.response(result).type('text/html');
    });
});

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
