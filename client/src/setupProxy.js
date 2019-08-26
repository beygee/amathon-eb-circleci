const proxy = require("http-proxy-middleware")
module.exports = function(app) {
  app.use(proxy("/todos", { target: "http://127.0.0.1:4001/" }))
}
