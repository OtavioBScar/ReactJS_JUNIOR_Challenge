import { useEffect, useState } from 'react';
import PokemonCard from './Components/PokemonCard';
import "./app.css"

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/


function App() {

  const [detailPokemons, setdetailPokemons] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await response.json()
        var pokemonsList = []
        await Promise.all(data.results.map(async (pokemon) => {
          const responseDetails = await fetch(pokemon.url)
          const dataDetails = await responseDetails.json()
          const dataPokemon = {
            name: dataDetails.name,
            image: dataDetails.sprites.front_default,
            experience: dataDetails.base_experience,
            type: dataDetails.types[0].type.name
          }
          console.log(dataDetails.types[0].type.name)
          pokemonsList.push(dataPokemon)
        }))
        const sortedList = pokemonsList.sort((a, b) => a.name.localeCompare(b.name))
        setdetailPokemons(sortedList)
      } catch (err) {
        console.log("Deu erro: ", err)
      }
    }
    getAll()
  }, []);

  return (
    <div className='container'>
      <div className="header">
        <h3 className='text'>desafio fernandev</h3>
        <h1 className='text'>consumir api pokémon</h1>
      </div>
      <div className="card-container">
        {detailPokemons?.map((pokemon) => (
          <div className='card-wrapper' key={pokemon?.name}>
            <PokemonCard name={pokemon?.name} experience={pokemon?.experience} image={pokemon?.image} type={pokemon?.type} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
