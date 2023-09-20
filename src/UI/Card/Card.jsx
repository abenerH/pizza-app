import React from 'react'

const Card = ({children, className, onclick}) => {

  return (
    <div className={className ? className : ''} onClick={onclick}>
        {children}
    </div>
  )
}

export default Card