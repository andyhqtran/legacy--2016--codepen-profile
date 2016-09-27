/* eslint no-console: ["error", { allow: ["warn", "error", "info"] }] */

/**
 * External dependencies
 */
import compression from 'compression';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { match, RouterContext } from 'react-router';

/**
 * Internal dependencies
 */
import config from '../config';
import routes from '../lib/routes';

/**
 * Local variables
 */
const PATHS = {
  public: path.join(__dirname, '../public'),
};

const app = express();

/**
 * Enable compression in production
 */
if (config.env === 'production') {
  app.use(compression());
}

/**
 * Serve static files
 */
app.use('assets', express.static(PATHS.public));

/**
 * Request handler
 */
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const renderedBody = renderToString(<RouterContext {...renderProps} />);

      const head = Helmet.rewind();

      const html = `
        <!doctype html>
        <html>
            <head>
              <meta charset="utf-8" />
              <title>${head.title}</title>
              ${head.meta}
              ${head.link}
              <link href="/assets/css/bundle.css?v=${config.version}" rel="stylesheet" type="text/css">
            </head>
            <body>
              <div id="app">${renderedBody}</div>
              <script src="/assets/js/bundle.js?v=${config.version}"></script>
            </body>
        </html>
      `;

      res.status(200).send(html);
    } else {
      res.status(404).send('Not found');
    }
  });
});

/**
 * Start app on {port}
 */
app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }

  console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', config.port, config.port);
});