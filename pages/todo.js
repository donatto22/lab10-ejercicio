const actividad = document.getElementById('actividad')
const button = document.getElementById('buttonRegistrar')

const main = document.querySelector('main')
const arregloTareas = []

button.addEventListener('click', () => {
    arregloTareas.push(actividad.value)

    main.innerHTML = ''
    
    arregloTareas.forEach(tarea => {
        main.innerHTML += `<p>${tarea}</p>`
    })
})

// Reto 1
// Un botón que elimine todo

// Reto 2
// La temática será de producto y precio (2 inputs)

// Reto 3
// Un botón extra que obtenga la suma de todos los precios, se deberá de ver en pantalla