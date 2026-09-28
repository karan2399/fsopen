import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, bad, neutral, all }) => {
    return (
        <div>
            <h2>Statistics</h2>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={all/3} />
        </div>
    )
}

export default Statistics
