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

app.put('/Productos', (req, res) => {
    res.send('Actualizando un producto.')
})

app.delete('/Productos', (req, res) => {
    res.send('Eliminado un producto.')
})

app.get('/Productos/:id', (req, res) => {
    res.send('Mostrando un producto.')
})

app.listen(port , () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});