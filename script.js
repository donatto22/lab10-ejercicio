// // traerme el Nodo, la etiqueda HTMK
// const mensaje = document.querySelector('p')
// // = find

// // Trae un arreglo de Nodos
// // un arreglo que contiene todos los elementos
// // que coincidan con lo que buscas
// const mensajes = document.querySelectorAll('p')
// // = filter

// // alert(mensaje.innerText)
// // console.log(mensajes)

// // Obtener un elemento por su ID
// const seleccion = document.getElementById('seleccion')
// const seleccion2 = document.querySelector('#seleccion')

// // Obtener un elemento por su clase
// const seleccionClase = document.getElementsByClassName('clase')
// const seleccionClase2 = document.querySelectorAll('.clase')

// // 
// const titulo = document.getElementById('titulo')
// titulo.style.color = "#000B58"
// titulo.style.fontSize = "100px"
// titulo.style.backgroundColor = 'green'

const inputMensaje = document.getElementById('mensajeWsp')

const button = document.getElementById('enviarMensajeBoton')

button.addEventListener('click', () => {
    const mensaje = inputMensaje.value
    const wspLink = 'https://wa.me/51913242570'

    const mensajeAEnviar = `${wspLink}?text=${encodeURI(mensaje)}`
    window.open(mensajeAEnviar, '_blank')
})

const botonOscuro = document.getElementById('modoOscuro')
botonOscuro.addEventListener('click', () => {
    const body = document.querySelector('body')
    body.style.cs = 'black'
})