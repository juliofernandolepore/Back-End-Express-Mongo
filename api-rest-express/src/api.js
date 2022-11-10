const express = require ('express')
/* guardo el objeto express en una constante para poder utilizarla */
const app = express()

const puerto = 3000
/* esto es un endpoint */

/* esta es mi app con el metodo get que recibe 2 argumentos, el primero es una ruta
y el segundo una funcion handler(en funcion flecha, con los argumentos request que es la
    peticion del cliente y el response que es la respuesta al cliente) */
app.get('/api/',(peticion , respuesta) => {
    respuesta.send('hola mundo')
})


/* ahora utilizo el metodo listen que recibe 2 argumentos (puerto y funcion) */

app.listen(puerto, ()=> {
    console.log(`la app se esta ejecutando en el puerto ${puerto}`)
    console.log('esta corriento en: http://localhost:3000/api')
} )