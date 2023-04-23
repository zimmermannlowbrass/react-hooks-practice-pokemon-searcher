import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {
  const{front, back} = sprites

  const [currentSideFront, setSide] = useState(true)

  function handleFlipClick() {
    setSide(!currentSideFront)
  }


  return (
    <Card>
      <div onClick = {() =>handleFlipClick()}>
        <div className="image">
          <img src={currentSideFront ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
