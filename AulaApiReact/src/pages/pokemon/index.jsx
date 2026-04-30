import { useState } from "react"
import "./style.css"

// um vetor de objetos
const pokemonList = [
    {id:1, nome:"Bulbassauro"},
    {id:4, nome:"Charmander"},
    {id:7, nome:"Squirtle"},
    {id:6, nome:"Charizard"},
    {id:152, nome:"Chikorita"},
    {id:149, nome:"Dragonite"},
    {id:65, nome:"Alakazam"},
    {id:150, nome:"MewTwo"},
    {id:658, nome:"greninja"},
    {id:448, nome:"Lucario"}
]

function Pokemon() {
    const [pokemmonGlobal, setPokemonGlobal] = useState(null)

    const getPokemonData = (idPokemon)=>{

        // conexão com a api
        const uri = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`

        fetch(uri)
            .then(res =>res.json())
                .then(json=> {
                    const pokemonFetch = {
                        nome: json.name,
                        peso: json.weight,
                        vida: json.stats[0].base_stat,
                        altura: json.height,
                        // é utilizado o [] por conta que dentro da api, esse objeto é um vetor
                        imagem: json.sprites.other['official-artwork'].front_default
                    }
                    setPokemonGlobal(pokemonFetch)
                    console.log(pokemonFetch)
                })
                .catch(()=>alert('Não foi possivel acessar os dados do pokémon'))
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Lista de Pokémon</h1>
            </div>

            {pokemmonGlobal && (
                <div  className="pokemon-info">
                    <h2>Nome: {pokemmonGlobal.nome}</h2>
                    <p>Peso: {pokemmonGlobal.peso}</p>
                    <p>Altura: {pokemmonGlobal.altura}</p>
                    <p>Vida: {pokemmonGlobal.vida}</p>

                    <img src src={pokemmonGlobal.imagem} alt={pokemmonGlobal.nome}/>
                </div>
            )}

            {pokemonList.map((item)=>(
                <div className="card" key={item.id}> 
                    <p>{item.nome}</p>
                    <button onClick={()=>(getPokemonData(item.id))}>Saiba mais</button>
                </div>
            ))}
        </div>
    )
}

export default Pokemon