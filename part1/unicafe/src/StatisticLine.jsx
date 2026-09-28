import React from 'react'

const StatisticLine = ({ text, value }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>
                            {text}
                        </td>
                        <td>
                            {value}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default StatisticLine
