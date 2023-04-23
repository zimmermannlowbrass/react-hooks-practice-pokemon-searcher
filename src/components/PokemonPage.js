import React, { useContext, useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const[pokemon, setPokemon] = useState([])
  const[searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then(data => setPokemon(data))
    }, []
  )

  function handleSearch(term) {
    setSearchTerm(term)
  }

  function handleAddPokemon(newName, newHp, newSprites) {
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name : newName ,
        hp : newHp ,
        sprites : newSprites
      })
    })
    .then(r => r.json())
    .then((newPokemon) => setPokemon([...pokemon, newPokemon]))

  }
  
  const filteredPokemon = pokemon.filter(pokemon => pokemon.name.includes(searchTerm))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon = {handleAddPokemon}/>
      <br />
      <Search searchTerm={searchTerm} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon = {filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
