const moviesRoutes = require('./movies')


const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('welcome!')
    })

    moviesRoutes(app, fs)
}
module.exports = appRouter
