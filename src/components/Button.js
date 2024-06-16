import React from 'react'

const Button = ({name}) => {
  return (
    <div>
    <button  className="px-5 py-2 bg-gray-200 m-5 rounded-lg">{name}</button>
    </div>
  )
}

export default Button