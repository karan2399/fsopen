import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <>
      <div>
        <h2>
          give feedback
        </h2>

        <Button name="good" setter={() => {
          setGood(good + 1);
          setAll(all + 1)
        }
        }></Button>
        <Button name="neutral" setter={() => {
          setNeutral(neutral + 1)
          setAll(all + 1)
        }
        }></Button>
        <Button name="bad" setter={() => {
          setBad(bad + 1)
          setAll(all + 1)
        }
        }></Button>
       

        {all > 0 && (
        <Statistics good={good} bad={bad} all={all} neutral={neutral}/>
            )}
        {all === 0 && (
          <p>
            No feedback yet
          </p>
        )}
      </div>
    </>
  )
}

export default App
