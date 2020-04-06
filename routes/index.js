const express = require('express'),
 router=express.Router()

router
 .get('/',(req,res)=>{
  const users=[{name:'Andrea'},{name:'Andrea 2'},{name:'Andrea 3'}]
  const data = {users:users,title:"Usuarios"}
  console.log(data)
  res.render('index.hbs',data)
 })
 .get('/user',(req,res,next)=>res.json({
  name:'Fernanda',
  lastname:'Huaman'
 }))
 .post('/user',(req,res,next)=>{
  console.log(req.body.name)
  res.send("POST request recived")
 })
 .post('/user/:id',(req,res,next)=>{
    // /users/fernanda
    //Se lee los parametro de una url mediante params
  console.log(`Id: ${req.params.id}`)
  console.log(req.body.name)
  res.send("POST request recived")
 })
 .post('/post',(req,res,next)=>res.send('POST request recived'))
 .post('/search',(req,res,next)=>{
  //search?s=Una+busqueda
  //Se lee los parametros en la url mediante Query
  console.log(`La busqueda de ${req.query.s}`)
  res.send('POST request recived')
 })
 .delete('/delete',(req,res,next)=>res.send('DELETE request recived'))


 module.exports = router