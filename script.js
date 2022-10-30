//https://akabab.github.io/superhero-api/api
//10223569763528853

const ImgDiv = document.getElementById('Img')
const generateButtonDiv = document.getElementById('generateButton')
const searchDiv = document.getElementById('search')
const textInputDiv = document.getElementById('textInput')

const getSuperHero = (id,name) =>{
    fetch(`https://superheroapi.com/api.php/10223569763528853/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)   
        getStat(json)
    })
}

const getStat = (character) => {

    const name = `<h2>${character.name}</h2>`
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')

    ImgDiv.innerHTML = `${name} <img src="${character.image.url}" width=300 height=300> ${stats}`

}


const getSearch = (name) => {
    console.log(textInputDiv.value)
    fetch(`https://superheroapi.com/api.php/10223569763528853/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        getStat(hero)
    })
}

const randomHero = () => {
    const noOfHeros = 731
    return Math.floor(Math.random() * noOfHeros) + 1
}

generateButtonDiv.onclick = () => getSuperHero(randomHero())
searchDiv.onclick = () => getSearch(textInputDiv.value)