
// fetch(url, {options})
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok) {
//         throw new Error('Could not fetch resource')
//     }
//     return response.json()
// })
// .then(data => {
//     console.log(data.id);
// })
// .catch(err => {
//     console.error(err)
// })

async function fetchData() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        const data = await response.json()
        console.log(response);
        console.log(data.name);
    } catch (error) {
        console.error(error)
    }
}

fetchData()