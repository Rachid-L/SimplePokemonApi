console.log("Hello, Node ! 👋") ;

const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const pokemons = require('./mock-pokemon');


const app = express()
const port = 3000

app.get('/' , (req,res) => res.send('Hello, Express 👋'))

app.get('/api/pokemons/:id' , (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    res.send(`Vous avez demandé le pokemon ${pokemon.name}.`)
})

app.get('/api/pokemons/' , (req, res) => {
    res.send(`Il y a ${pokemons.length} pokémons dans le pokédex pour le moment.`)
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur http://localhost:${port}`))