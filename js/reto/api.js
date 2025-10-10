export async function obtenerPosts() {
    const URL = 'https://jsonplaceholder.typicode.com/posts'
    try {
        const response = await fetch(URL)
        return await response.json()
    } catch (error) {
        console.error("hubo un error")
        throw error
    }
}