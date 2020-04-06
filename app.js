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
//SETTING
app
 .set('port',process.env.PORT||3000) 
 .set('view engine','hbs')

//MIDDELWARE Y ROUTER

 app
 .use(express.json()) //Middelware permite hacer procesos antes de dar respuesta
 .use(logger('dev'))
 .use(routes)
 .use((req,res,next)=>next(createError(404)))
 .use((error,req,res,next)=>{
  res.status(error.static||500)
  res.render('error: ',error.static)
 })
 .use(express.static('public'))
 .listen(app.get('port'),()=>console.log(`Se inicio en el puerto ${app.get('port')}`))
