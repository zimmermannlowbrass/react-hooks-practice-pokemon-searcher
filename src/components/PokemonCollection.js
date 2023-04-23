import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const pokemonCards = pokemon.map(poke => {
    return (
      <PokemonCard 
      key= {pokemon.indexOf(poke)}
      name = {poke.name}
      hp = {poke.hp}
      sprites = {poke.sprites}
      />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
