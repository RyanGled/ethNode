"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import '/node_modules/bootstrap/dist/css/bootstrap.css'
const express = require("express");
const path = require("path");
class App {
    constructor() {
        this.express = express();
        this.setupHtmlTemplating();
        this.startApp();
        this.mountRoutes();
    }
    setupHtmlTemplating() {
        this.express.set('view engine', 'pug');
        this.express.locals.pretty = true;
    }
    startApp() {
        const port = 3000;
        this.express.listen(port, (err) => {
            if (err) {
                return console.error(err);
            }
            return console.log(`server is listening on ${port}`);
        });
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.render(path.join(__dirname, 'view'));
        });
        this.express.use('/', router);
        this.express.use(express.static(path.join(__dirname, 'assets')));
    }
}
exports.App = App;
exports.default = new App().express;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBMEQ7QUFDMUQsbUNBQWtDO0FBQ2xDLDZCQUE0QjtBQUU1QjtJQUlJO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsQ0FBQTtRQUN4QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVPLG1CQUFtQjtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUNyQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFVLEVBQUUsRUFBRTtZQUNyQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzdCLENBQUM7WUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUN4RCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTyxXQUFXO1FBQ2YsTUFBTSxNQUFNLEdBQW1CLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUUvQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBTyxFQUFFO1lBQ2pFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUM1QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0NBRUo7QUF2Q0Qsa0JBdUNDO0FBRUQsa0JBQWUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUEiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICAgIHB1YmxpYyBleHByZXNzOiBleHByZXNzLkV4cHJlc3NcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV4cHJlc3MgPSBleHByZXNzKClcbiAgICAgICAgdGhpcy5zZXR1cEh0bWxUZW1wbGF0aW5nKClcbiAgICAgICAgdGhpcy5zdGFydEFwcCgpXG4gICAgICAgIHRoaXMubW91bnRSb3V0ZXMoKVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0dXBIdG1sVGVtcGxhdGluZygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHByZXNzLnNldCgndmlldyBlbmdpbmUnLCAncHVnJylcblxuICAgICAgICB0aGlzLmV4cHJlc3MubG9jYWxzLnByZXR0eSA9IHRydWVcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRBcHAoKSB7XG4gICAgICAgIGNvbnN0IHBvcnQgPSAzMDAwXG4gICAgICAgIHRoaXMuZXhwcmVzcy5saXN0ZW4ocG9ydCwgKGVycjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhgc2VydmVyIGlzIGxpc3RlbmluZyBvbiAke3BvcnR9YClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdW50Um91dGVzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG4gICAgICAgIHJvdXRlci5nZXQoJy8nLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IGFueSA9PiB7XG4gICAgICAgICAgICByZXMucmVuZGVyKHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3JykpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5leHByZXNzLnVzZSgnLycsIHJvdXRlcilcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnYXNzZXRzJykpKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXBwKCkuZXhwcmVzc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==