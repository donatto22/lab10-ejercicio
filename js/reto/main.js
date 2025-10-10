import { obtenerPosts } from './api.js'
import { mostrarPosts } from './ui.js'
import { mostrarMensaje } from './utils.js'

const boton = document.getElementById('boton')

boton.addEventListener('click', async () => {
    try {
        const posts = await obtenerPosts()
        mostrarPosts(posts)

        mostrarMensaje()
    } catch (error) {
        console.log(error)
    }
})