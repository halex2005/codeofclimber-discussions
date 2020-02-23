const proxy = require('http-proxy-middleware')
const proxyUrl = require('../package.json').proxy
// https://create-react-app.dev/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
// create-react-app by default doesn't proxify requests with `Accept: text/html` headers to API
// therefore use custom proxy here
module.exports = function (app) {
    app.use(
        '/api',
        proxy({
            target: proxyUrl,
            secure: false,
            changeOrigin: false,
            onProxyReq: proxyReq => {
                const host = proxyReq.getHeader('host')
                if (host) {
                    proxyReq.setHeader('host', host)
                }
            }
        })
    )
}
