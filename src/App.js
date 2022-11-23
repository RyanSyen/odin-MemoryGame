import React, { useState } from 'react';
import "./App.css";

import { Fragment } from "react";

/*
  - Game
    - Header
    - GameTable
        - GameTableCell
    - Footer
*/

function Game() {
  return (
    <Fragment>
      <Gameheader />
      <Gametable />
    </Fragment>
  );
}

function Gameheader() {

  const [highestScore, setHighestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <header>
      <h2 className="title">The Memory Game</h2>
      <div className="scoreBoard">
        <div className="highestScore">
          <label>Highest Score: </label>
          <p>{highestScore}</p>
        </div>
        <div className="currentScore">
          <label>Current Score: </label>
          <p>{currentScore}</p>
        </div>
      </div>
    </header>
  );
}

function Gametable() {
  return (
    <div className="gameTableContainer">
      <table className="gameTable">
        <GameTableCell />
      </table>
    </div>
  );
}

function GameTableCell() {
  return <td className="gameTableCell">card</td>;
}

function App() {
  return <Game />;
}

export default App;
