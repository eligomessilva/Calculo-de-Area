const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
  app.post ('/area', function (req , res) 
  
{
    const direita = req.body.direita
    const frente = req.body.frente
    const esquerda = req.body.esquerda
    const fundo = req.body.fundo
   
   
    
    const total = direita+esquerda 
    const outotal = fundo + frente
  
    const terreno =  total* outotal
 
        res.send(`Esta é minha  ${terreno}`)

   

})
   
    app.listen(port, hostname, () =>{
        console.log(`Server running at http://${hostname}:${port}/`);

})


