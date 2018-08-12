///importar  express
const express = require('express')
const ejs = require ('ejs')

const pageRouter = require ('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter')
///////2
const app = express()
//////indicar el puerto
const PORT = 3000
/////tarea tres
app.use(express.static( `${__dirname}/public`) )

app.engine( 'ejs', ejs.renderFile )
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

//tareados
app.use('/', pageRouter)
app.use('/api', apiRouter)

// app.use((req, res)=>{
//   res.send('<h3> 404 - big error - page no exist</h3>')
// })

 ///pso 3
 app.listen(PORT,()=>{
   console.log(`App listening on localhost:${PORT}`);
 })
