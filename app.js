const express = require('express');
const app = express();
const port = 2006;

let productos = [] // Datos Array
app.use(express.json()) //Middleware

// app.get('/Productos', (req, res) => {
//     res.send('Listado de productos.')
// })

app.get('/Productos', (req, res) => {
       res.json(productos) // mostrando productos
})

// app.post('/Productos', (req, res) => {
//     res.send('Guardando nuevos productos.')
// })

app.post('/Productos', (req, res) => {
       console.log(req.body)
       console.log(productos.length +1)
       nuevoProducto = {id: productos.length + 1, ...req.body} // genera un id y le agrega una copia de req.body
       productos.push(nuevoProducto)
       res.json({mensaje : 'Producto agregado', producto : req.body})

})

app.put('/Productos/:id', (req, res) => {
    prodEncontrado = productos.find((p)=>p.id==req.params.id)
    if(!prodEncontrado){
        return res.status(404),res.json('No se encuentra el producto')
      }
      console.log(req.params.id)
      console.log(req.body)
      nuevosDatos = req.body
      productos = productos.map(p=>p.id==req.params.id?{...p,...nuevosDatos}:p)
      res.json({mensaje: 'Productos actualizados', Productos: nuevosDatos})
})

app.delete('/Productos/:id', (req,res)=>{
        const prodEncontrado = productos.find((p)=>p.id==req.params.id)
        if(!prodEncontrado){
          return res.status(404),res.json('No se encuentra el producto')
        }
        productos = productos.filter((p)=>p.id!=req.params.id)
        res.json({Mensaje:"Producto eliminado", Producto: prodEncontrado})
})

app.get('/Productos/:id', (req,res)=>{
        console.log(req.params.id)
        prodEncontrado = productos.find((p)=>p.id==req.params.id)
        if(!prodEncontrado){
          return res.status(404),res.json('No se encuentra el producto')
        }
        res.json({
            mensaje: "Producto encontrado",
            Producto: prodEncontrado
        })
})

app.listen(port , () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});