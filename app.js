const express =require('express'),
 createError= require('http-errors'),
 logger = require('morgan'),
 routes = require('./routes/index'),
 app = express()

 //Este middelware se va ejecutar siempre
/* const logger =(req,res,next)=>{
  console.log(`Router Recived: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
 }
 */

 app
 .use(express.json()) //Middelware permite hacer procesos antes de dar respuesta
 .use(logger('dev'))
 .use(routes)
 .use((req,res,next)=>next(createError(404)))
 .use((error,req,res,next)=>{
  res.status(error.static||500)
  res.render('error: ')
 })
 .listen(3000,()=>console.log("Se inicio en el puerto 3000"))
