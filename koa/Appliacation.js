const http = require("http")
class Appliacation {
    constructor() {

    }
    listen(...args) {
        const server = http.createServer(this.middleware);
        server.listen(...args)
    }
    use (middleware) {
        this.middleware = middleware
      }
}