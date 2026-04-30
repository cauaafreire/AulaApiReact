import { useState } from "react"

// um vetor de objetos
const pokemonList = [
    {id:1, nome:"Bulbassauro"},
    {id:4, nome:"Charmander"},
    {id:7, nome:"Squirtle"},
    {id:6, nome:"Charizard"},
    {id:152, nome:"Chikorita"}
]

function Pokemon() {
    return (
        <div>
            <h1>Lista de Pokémon</h1>
        </div>
    )
}

export default Pokemon