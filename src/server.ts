import express from 'express'

export const createServer = (): express.Express => {
    const app = express()

    app.use(jsonParser)

    app.use(errorHandler)

    app.use(notFoundHandler)

    return app
}

const jsonParser = express.json({
    type: () => true,
})

const errorHandler: express.ErrorRequestHandler = (error, _req, res, _next) => {
    res.status(500).send(error.message)
}

const notFoundHandler: express.Handler = (_req, res, _next) => {
    res.status(404).send('Not found')
}
