import React from 'react'

export const Header = (props) => {
  return (
      <header>
      <div class="container">
        <div class="header-wrapper">
          <ul>
          <li><button onClick={() => {props.setHandleComponentPC("home")}} >Home</button></li>
          <li><button onClick={() => {props.setHandleComponentPC("work1")}} >Work1</button></li>
          <li><button onClick={() => {props.setHandleComponentPC("work2")}} >Work2</button></li>
          <li><button onClick={() => {props.setHandleComponentPC("contact")}} >Contact</button></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
