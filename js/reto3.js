// const body = document.querySelector("body");
// const img = document.createElement("img");
// const h2 = document.createElement("h2")

// old
fetch("https://api.github.com/users/donatto22").then(response => {
    return response.json()
}).then(data => {
})

// new
// async - await

// body.append(img);
// body.append(h2)

const body = document.querySelector('body')
const obtenerDatos = async()=>{
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    document.body.textContent = data
}

try {
    throw new Error()
    obtenerDatos()
} catch(error){
    alert("Hubo un error")
}