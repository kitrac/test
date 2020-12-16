const express = require("express");
const app = express();
const ClimaController = require('./controllers/Clima');

var clima = express.Router();

clima.route('/current/:city?')
    .get(ClimaController.current);

clima.route('/forecast/:city?')
    .get(ClimaController.forecast);

clima.route('/location')
    .get(ClimaController.location);

app.use('/v1', clima);

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
