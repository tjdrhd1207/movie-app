const { createProxyMiddleware } =require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target : "https://openapi.naver.com/v1/search/cafearticle.json",
            changeOrigin : true,
            pathRewrite : {
                '^/api' : ''
            }
        })
    );

};