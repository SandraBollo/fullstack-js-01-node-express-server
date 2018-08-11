///importar  express
const express = require('express')
const pageRouter = require ('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter')
///////2

const app = express()

//////indicar el puerto

const PORT = 3000



app.use('/', pageRouter)
app.use('/api', apiRouter)




 ///pso 3
 app.listen(PORT,()=>{
   console.log(`App listening on localhost:${PORT}`);
 })
