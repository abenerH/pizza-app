import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={className ? className : ''}>
        {children}
    </div>
  )
}

export default Card