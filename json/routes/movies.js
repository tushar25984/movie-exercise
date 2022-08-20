const cors = require('cors')
const moviesRoutes = (app, fs) => {

    //path
    const dataPath = './data/movies.json'

    app.use(cors({
        origin: ['http://localhost:3000']
    }));

    //Read
    app.get('/movies', cors(), (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) { throw err; }
            res.send(JSON.parse(data));
        })
    });
};

module.exports = moviesRoutes