import { useState } from 'react'


function App() {
  const gameLibrairy = ["rock", "paper", "scissors"]
  // const game2Librairy = ["Pierre", "Papier", "Ciseau", "Lézard", "Spock"]

function handleClick(){}
  
  return(
    <>
    <h1>Pierre Feuille Ciseaux</h1>

    <div className='gamemode'>
      <button>2 joueur</button>
      <button>mode lézard spoke</button>
    </div>
    <div className='game-button'>
      {gameLibrairy.map((i) => (
        <button><img src={`/icon-${i}.svg`} onClick={handleClick(i)}/></button>
      ))}
    </div>
    </>
  )
}

export default App
