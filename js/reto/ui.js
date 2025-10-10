export function mostrarPosts(posts) {
    const lista = document.getElementById('lista')

    lista.innerHTML = ''

    posts.forEach(p => {
        const li = document.createElement('li')
        li.textContent = p.body
        lista.appendChild(li)
    })
}