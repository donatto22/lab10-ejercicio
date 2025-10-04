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
  const valor = input.value.trim()

  if (valor) {
    frutas.push(valor)
    const li = document.createElement("li")
    const p = document.createElement('p')
    const button = document.createElement('button')

    p.textContent = valor
    button.textContent = 'Eliminar'

    // findIndex para obtener el índice del elemento buscado
    const indiceAEliminar = frutas.findIndex(f => f == valor)

    // con ese indice empezamos a trabajar en el .splice para eliminarlo
    button.addEventListener('click', () => {
        frutas.splice(indiceAEliminar, 1)
        console.log(frutas)
    })

    li.appendChild(p)
    li.appendChild(button)

    lista.appendChild(li)
    input.value = ""
  }
})