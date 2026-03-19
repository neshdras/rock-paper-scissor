import { useState } from 'react'


function App() {
  const gameLibrairy = ["Pierre", "Papier", "Ciseau"]
  const game2Librairy = ["Pierre", "Papier", "Ciseau", "Lézard", "Spock"]

  
  return(
    <>
    <h1>Pierre Feuille Ciseaux</h1>

    <div className='gamemode'>
      <button>2 joueur</button>
      <button>mode lézard spoke</button>
    </div>
    </>
  )
}

export default App
