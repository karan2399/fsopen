import React from 'react'

const Button = ({name,setter}) => {
  return (
    <div>
        <button onClick={() => setter()}>{name}</button>
    </div>
  )
}

export default Button
