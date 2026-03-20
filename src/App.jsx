import { useState } from 'react'

function App() {
  const gameLibrairy = ["rock", "paper", "scissors"]
  // const game2Librairy = ["Pierre", "Papier", "Ciseau", "Lézard", "Spock"]
  const [winner, setWinner] = useState("")
  const [botChoice, setBotChoice] = useState("")
  const [show, setShow] = useState(false)

  function handleClick(sign){
    const playerChoice = sign
    setBotChoice(gameLibrairy[Math.floor(Math.random()*3)])
    console.log(playerChoice)
    console.log(botChoice);
    if (playerChoice === botChoice) {
        setWinner("Draw")
    } else if(playerChoice === "rock" && botChoice === "scissors" || playerChoice==="paper" && botChoice === "rock" || playerChoice === "scissors" && botChoice==="paper"){
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
