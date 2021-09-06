const routes = require('express').Router();
const associateRouter = require('./associates-master');
const specializationRouter = require('./specialization-master');

routes.use('/associate', associateRouter)
routes.use('/specialization', specializationRouter)

module.exports = routes;