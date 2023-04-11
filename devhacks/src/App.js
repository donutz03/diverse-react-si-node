import UploadImage from './components/UploadImage'
import Fruits from './components/Fruits'
import { useState } from 'react'

const Display = props => <>
  <p>{props.text} {props.value}</p>
  </>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => { 
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  
  const [selected, setSelected] = useState(0)
  const [totalVotes, setTotalVotes] = useState(Array(7).fill(0))

  const handleVoteClick = () => {
    const newTotalVotes = [...totalVotes]
    newTotalVotes[selected] += 1
    setTotalVotes(newTotalVotes)
  }

  const handleAnecdoteClick = () => {
    const currentAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(currentAnecdote)
  }

  const products = [
    {
        id: 1,
        name: 'mere',
        category: 'fructe',
        reserved: false,
        bid: 0
    },
    {
        id: 2,
        name: 'pere',
        category: 'fructe',
        reserved: false,
        bid: 0
    },
    {
        id: 3,
        name: 'banane',
        category: 'fructe',
        reserved: false,
        bid: 0
    },
    {
        id: 3,
        name: 'banane',
        category: 'fructe',
        reserved: false,
        bid: 0
    },
    {
        id: 4,
        name: 'corn cu ciocolata',
        category: 'dulciuri',
        reserved: false,
        bid: 0
    },
    {
        id: 5,
        name: 'biscuiti',
        category: 'dulciuri',
        reserved: false,
        bid: 0
    }
]


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const setGoodValue = newGoodValue => {
    console.log('value now', newGoodValue)
    setGood(newGoodValue)
  }

  const setNeutralValue = newNeutralValue => {
    console.log('value now', newNeutralValue)
    setNeutral(newNeutralValue)
  }

  const setBadValue = newBadValue => {
    console.log('value now', newBadValue)
    setBad(newBadValue)
  }


  return(
  <div>

<h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Display text = "good" value={good} />
      <Display text = "neutral" value={neutral} />
      <Display text = "bad" value={bad} />

      <h1>Anecdote of the day</h1>
       <Anecdote text={anecdotes[selected]} numberOfVotes = {totalVotes[selected]} />
       <Button2 onClick={handleAnecdoteClick} text="Next anecdote"/>
       <Button2 onClick={handleVoteClick} text="vote"/>
       <h1>Anecdote with most votes</h1>
       <MostVotes anecdotes={anecdotes} totalVotes={totalVotes} />



  <p>Hello world</p>
 <UploadImage />
 <Fruits />
  
</div> 
)}
  
const Anecdote = ({text, numberOfVotes}) =>
<div>
  <p>{text}</p>
  <p>has {numberOfVotes} votes</p>
</div>


const Button2 = ({ onClick, text }) =>
  <button onClick={onClick}>
    {text}
  </button>

const MostVotes = ({anecdotes, totalVotes}) => {
  const mostVotes = Math.max(...totalVotes)
  const mostVotedAnecdote = anecdotes[totalVotes.indexOf(mostVotes)]
  if (totalVotes.indexOf(mostVotes) === 0) {
    return (
      <p></p>
    )
  }

  return (
    <div>
      <p>{mostVotedAnecdote}</p>
      <p>has {mostVotes} votes</p>
    </div>
  )
}



export default App

