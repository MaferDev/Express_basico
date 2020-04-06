const express =require('express'),
 createError= require('http-errors'),
 routes = require('./routes/index'),
 app = express()
 //app.get('/', (req, res) => res.send('Hello World!'))
app
 .use(express.json())
 .use(routes)
 .use((req,res,next)=>next(createError(404)))
 .use((error,req,res,next)=>{
  res.status(error.static||500)
  res.render('error: ')
 })
 .listen(3000,()=>console.log("Se inicio en el puerto 3000"))
