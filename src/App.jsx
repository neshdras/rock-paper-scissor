import { useState } from 'react'
import './App.css'
import { useScore } from './store/storeScore'
const winningCombos = ["rock-scissors", "paper-rock", "scissors-paper"]
const winningCombosSpock = [...winningCombos, "spock-rock", "spock-scissors", "lizard-spock", "scissors-lizard", "paper-spock", "lizard-paper", "rock-lizard"]

function App() {
  const gameLibrairy = ["rock", "paper", "scissors"]
  const game2Librairy = ["rock", "paper", "scissors", "lizard", "spock"]
  
  const [winner, setWinner] = useState("Prêt ?")
  const [botChoice, setBotChoice] = useState("")
  const [spockMode, setSpockMode] = useState(false)
  
  // Implémentation des scores
  const scorePlayer = useScore((state) => state.scorePlayer)
  const scoreBot = useScore((state) => state.scoreBot)
  const scoreDraw = useScore((state) => state.scoreDraw)

  // Fonction d'incrémentation des scores
  const increaseScorePlayer = useScore((state) => state.increaseScorePlayer)
  const increaseScoreBot = useScore((state) => state.increaseScoreBot)
  const increaseScoreDraw = useScore((state) => state.increaseScoreDraw)

  // Fonction de reset des scores
  const resetScorePlayer = useScore((state) => state.resetScorePlayer)
  const resetScoreBot = useScore((state) => state.resetScoreBot)
  const resetScoreDraw = useScore((state) => state.resetScoreDraw)

  const currentLibrary = spockMode ? game2Librairy : gameLibrairy
  const currentCombos = spockMode ? winningCombosSpock : winningCombos

  function handleClick(playerChoice) {
    const randomBotChoice = currentLibrary[Math.floor(Math.random() * currentLibrary.length)]
    setBotChoice(randomBotChoice)
    
    const match = `${playerChoice}-${randomBotChoice}`
    
    if (playerChoice === randomBotChoice) {
      setWinner("Draw")
      increaseScoreDraw()
    } else if (currentCombos.includes(match)) {
      setWinner("Win")
      increaseScorePlayer()
    } else {
      increaseScoreBot()
      setWinner("Lose")
    }
  }
  function reset(){
    resetScorePlayer()
    resetScoreBot()
    resetScoreDraw()
  }
  return (
    <div className="container">
      <h1>RPC Game</h1>
      <div className='mode-container'>
        <button className="mode-toggle" onClick={() => { setSpockMode(!spockMode); setWinner("Prêt ?"); setBotChoice(""); reset() }}>
        {spockMode ? "Mode Lézard-Spock" : "Mode Classique"}
      </button>
        <button className="mode-toggle" onClick={() => reset()}>Reinitialiser les score</button>
      </div>
      
      <p className='score'>Score joueur : {scorePlayer} | Score bot : {scoreBot} | Egalité : {scoreDraw}</p>
      <div className='game-board'>
        <div className="result-display">
          <p className={`status ${winner.toLowerCase()}`}>{winner}</p>
          {botChoice && (
            <div className="bot-pick">
              <span>Bot a choisi :</span>
              <img className='result-bot' src={`/icon-${botChoice}.svg`} alt={botChoice} />
            </div>
          )}
        </div>
      </div>

      <div className='game-button-container'>
        {currentLibrary.map((item) => (
          <button key={item} className="choice-btn" onClick={() => handleClick(item)}>
            <img src={`/icon-${item}.svg`} alt={item} />
          </button>
        ))}
      </div>
      
    </div>
  )
}

export default App