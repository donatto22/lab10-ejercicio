// let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// // eliminar
// //numeros.splice(0, 3)

// // agregar
// numeros.splice(numeros.length, 0, 200)
// console.log(numeros)

let frutas = []
const input = document.getElementById("fruta")
const boton = document.getElementById("agregar")
const lista = document.getElementById("lista")

boton.addEventListener("click", () => {
    lista.textContent = ''

    const valor = input.value.trim()
    input.value = ''

    if (valor) {
        frutas.push(valor)
        cargarFrutas(frutas)
    }
})

const cargarFrutas = (frutas) => {
    lista.textContent = ''

    frutas.forEach((fruta, index) => {
        const li = document.createElement("li")
        const p = document.createElement('p')
        const button = document.createElement('button')

        p.textContent = fruta
        button.textContent = 'Eliminar'

        button.addEventListener('click', () => {
            frutas.splice(index, 1)
            cargarFrutas(frutas)
        })

        li.appendChild(p)
        li.appendChild(button)

        lista.appendChild(li)  
    })
}

