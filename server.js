///importar  express

const express = require('express')
const ejs = require ('ejs')

// importar knex
const knex = require('knex')

// importar knexfile.js
const devDbConfig = require('./knexfile.js')



const pageRouter = require ('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter')

///////2
const app = express()


// configuracion data access
const appDb = knex(devDbConfig.development)
app.locals.db = appDb

//////indicar el puerto
const PORT = 3000
/////tarea tres
app.use(express.static( `${__dirname}/public`) )

app.engine( 'ejs', ejs.renderFile )
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)


app.use(express.static( `${__dirname}/public`) )

app.engine( 'ejs', ejs.renderFile )
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use('/', pageRouter)
app.use('/api', apiRouter)


app.use((req, res )=>{
  res.send('<h3> 404 BIG ERROR - PAGE NO EXIST </h3>')
})

 ///pso 3


 app.listen(PORT,()=>{
   console.log(`App listening on localhost:${PORT}`);
 })
