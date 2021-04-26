const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware(process.env.REACT_APP_API, {
      target: process.env.REACT_APP_BASE_URL,
      changeOrigin: true,
      pathRewrite: {
        [`^${process.env.REACT_APP_API}`]: "",
      },
    })
  );

  //   app.use(
  //     proxy("/manage/apo", {
  //       target: "http://admintest.happymall.com:7000",
  //       changeOrigin: true,
  //     })
  //   );
};
