import React from 'react'

const NavButton = ({ name, id }) => {
  return (
    <button id={id}>{name}</button>
  )
}

export default NavButton