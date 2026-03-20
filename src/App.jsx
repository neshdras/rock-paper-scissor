import { useState } from 'react'
import './App.css'

const winningCombos = ["rock-scissors", "paper-rock", "scissors-paper"]
const winningCombosSpock = ["rock-scissors", "paper-rock", "scissors-paper", "spock-rock", "spock-scissors", "lizard-spock", "scissors-lizard", "paper-spock", "lizard-paper", "rock-lizard"]
function App() {
  const gameLibrairy = ["rock", "paper", "scissors"]
  const game2Librairy = ["rock", "paper", "scissors", "lizard", "spock"]
  const [winner, setWinner] = useState("")
  const [botChoice, setBotChoice] = useState("")
  const [spock, setSpock] = useState(true)
  function gameMode() {
    setSpock(!spock)
    
  }
  function handleClick(sign){
    const playerChoice = sign
    if (spock) {
      const gameBotChoice = game2Librairy[Math.floor(Math.random()*3)]
      setBotChoice(gameBotChoice)
      const match = `${playerChoice}-${gameBotChoice}`
      if (playerChoice === gameBotChoice) {
          setWinner("Draw")
      } else if(winningCombosSpock.includes(match)){
        setWinner("Win")
      } else {
        setWinner("Loose")
      }
    } else {
      const gameBotChoice = gameLibrairy[Math.floor(Math.random()*3)]
      setBotChoice(gameBotChoice)
      const match = `${playerChoice}-${gameBotChoice}`
      if (playerChoice === gameBotChoice) {
          setWinner("Draw")
      } else if(winningCombos.includes(match)){
        setWinner("Win")
      } else {
        setWinner("Loose")
      }
    }
  }
  return(
    <>
    <h1>Pierre Feuille Ciseaux</h1>
          
      <button className="gamemode" onClick={() => gameMode()}>{spock ? <span>Mode Lézard-Spock</span> : <span>Mode classique</span>}</button>

    <div className='game-board'>
      <p>{winner}</p>
      {botChoice && <img className='result-bot' src={`/icon-${botChoice}.svg`}/>}
      
    </div>
    <div className='game-button'>
      {spock? game2Librairy.map((i) => (
        <button key={i} onClick={() => handleClick(i)}><img src={`/icon-${i}.svg`} /></button>
      )) : gameLibrairy.map((i) => (
        <button key={i} onClick={() => handleClick(i)}><img src={`/icon-${i}.svg`} /></button>
      ))}
    </div>
    </>
  )
}

export default App
