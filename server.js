const express = require('express')
const cookieParser = require('cookie-parser')
const responseTime = require('response-time')
const compression = require('compression')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const app = express()
const port = 8080
// load required configuration files ===============================================
const models = require('./api/models/index')
const config = require('./config');
const {errors} = require('./utils/');
const routes = require('./routers/index')
// MongDB Configuration-Mongoose ===================================================
mongoose.connect(config.dburl(), {useNewUrlParser: true, useUnifiedTopology: true});  
mongoose.set('useCreateIndex', true); 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongdDB Connection error:'));
db.once('open', () => console.log("MongoDB Connected Via Mongoose Successfully!"));
// **********************************************************************************
app.use(express.json());
app.use(cookieParser())
app.use(responseTime())
app.use(compression())
app.use(cors())
app.use(helmet());
// Logger ***************************************************************************************
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))
// **********************************************************************************************

// Routes ***************************************************************************************
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', routes)
// **********************************************************************************************
// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error(errors.errors.genericError);
//   next(err);
// });
// Server Starting.
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

process.on('warning', (warning) => {
  console.log(warning.stack);
});