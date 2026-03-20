import { useState } from 'react'
import './App.css'
function App() {
  const gameLibrairy = ["rock", "paper", "scissors"]
  // const game2Librairy = ["Pierre", "Papier", "Ciseau", "Lézard", "Spock"]
  const [winner, setWinner] = useState("")
  const [botChoice, setBotChoice] = useState("")
  const [show, setShow] = useState(false)

  function handleClick(sign){
    const playerChoice = sign
    const gameBotChoice = gameLibrairy[Math.floor(Math.random()*3)]
    setBotChoice(gameBotChoice)
    
    if (playerChoice === gameBotChoice) {
        setWinner("Draw")
    } else if(playerChoice === "rock" && gameBotChoice === "scissors" || playerChoice==="paper" && gameBotChoice === "rock" || playerChoice === "scissors" && gameBotChoice==="paper"){
      setWinner("Win")
    } else {
      setWinner("Loose")
    }
  }
  return(
    <>
    <h1>Pierre Feuille Ciseaux</h1>

    <div className='gamemode'>
      <p>{winner}</p>
      {botChoice && <img className='result-bot' src={`/icon-${botChoice}.svg`}/>}
      
    </div>
    <div className='game-button'>
      {gameLibrairy.map((i) => (
        <button key={i} onClick={() => handleClick(i)}><img src={`/icon-${i}.svg`} /></button>
      ))}
    </div>
    </>
  )
}

export default App
