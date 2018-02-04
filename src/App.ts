// import '/node_modules/bootstrap/dist/css/bootstrap.css'
import * as express from 'express'
import * as path from 'path'

export class App {

    public express: express.Express

    constructor() {
        this.express = express()
        this.setupHtmlTemplating()
        this.startApp()
        this.mountRoutes()
    }

    private setupHtmlTemplating(): void {
        this.express.set('view engine', 'pug')

        this.express.locals.pretty = true
    }

    public startApp() {
        const port = 3000
        this.express.listen(port, (err: Error) => {
            if (err) {
                return console.error(err)
            }

            return console.log(`server is listening on ${port}`)
        })
    }

    private mountRoutes(): void {
        const router: express.Router = express.Router()

        router.get('/', (req: express.Request, res: express.Response): any => {
            res.render(path.join(__dirname, 'view'))
        })

        this.express.use('/', router)
        this.express.use(express.static(path.join(__dirname, 'assets')))
    }

}

export default new App().express
