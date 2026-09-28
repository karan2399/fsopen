import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)

  // Create an array filled with 0s matching the length of the anecdotes
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy);
    console.log(votes)
  }

  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }


  return (
    <div>
      <h2>
        Anecdote of the day
      </h2>
      {anecdotes[selected]} <br />
      has {votes[selected]} votes <br />

      <button onClick={handleVote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <h2>
        Anecdote with the most votes
      </h2>
        {anecdotes[
          votes.reduce((maxIdx, currentVotes, currentIdx, arr) => {
            return currentVotes > arr[maxIdx] ? currentIdx : maxIdx;
          }, 0)
        ]} <br/>
        has  {Math.max(...votes)} votes
       
       
    </div>
  )
}

export default App
