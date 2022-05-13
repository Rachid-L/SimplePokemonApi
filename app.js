const express = require('express');
const { success } = require('./helper.js')
const pokemons = require('./mock-pokemon');


const app = express()
const port = 3000

app.get('/' , (req,res) => res.send('Hello, Express 👋'))

// On retourne une liste de Pokemon au format JSON
app.get('/api/pokemons/' , (req, res) => {
    const message = 'Les pokemons ont bien été trouvé.'
    res.json(success(message,pokemons))
})

// On retourne un objet pokemon, au format JSON, grâce à son id
app.get('/api/pokemons/:id' , (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokemon a bien été trouvé.'
    res.json(success(message,pokemon))
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur http://localhost:${port}`))