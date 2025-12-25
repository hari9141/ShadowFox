import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <p>2025 RCB Fan Page </p>
      <NavLink to="https://www.instagram.com/royalchallengers.bengaluru/" style={{ color: "grey" }}>@RoyalChallengersBanglore</NavLink>
    </footer>
  )
}
