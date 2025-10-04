// para guardar un valor usamos
localStorage.setItem('fruta', "valor a guardar")
localStorage.setItem('fruta1', "valor a guardar")
localStorage.setItem('fruta2', "valor a guardar")
localStorage.setItem('fruta3', "valor a guardar")

// Usando prompt() van a recibir un valor
// ese valor debe guardarse en localStorage

// clear sirve para eliminar todos los datos de un solo golpe

// crea un botón en el HTML
// el botón, al darle click, debería vaciar todo el localStorage
// el botón debe de decir "limpiar storage"

// crear un contador
// 1. Debe haber un botón en el html
// 2. El botón al darle click debe aumentar de 1 en 1 el contador - addEventListener
// 3. El mismo botón debe de contener el contador como texto - textContent
// 4. El contador debe guardarse en el localStorage - setItem
// 5. El contador debe de obtenerse desde el localStorage - getItem

const frutas = ['pera', 'fresa', 'manzana']
const objeto = {
    nombre: 'pepe'
}

localStorage.setItem('frutas', JSON.stringify(frutas))

console.log(JSON.parse(localStorage.getItem('frutas')))

// Usando 3 prompt()
// Vas a guardar 3 frutas dentro de una misma clave (key)

// si no hay nada en el localStorage
window.location.href = index.html