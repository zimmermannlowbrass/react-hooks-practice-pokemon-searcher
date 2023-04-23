import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          const newName = (e.target['name'].value)
          const newHp = (e.target['hp'].value)
          const newSprites = {front: e.target['frontUrl'].value, back: e.target['backUrl'].value}
          onAddPokemon(newName, newHp, newSprites)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
