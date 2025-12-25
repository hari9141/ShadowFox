import React from 'react'

export default function PlayerCard({ img, name, role }) {
  return (
    <div className="player-card" role="article">
      <img src={img} alt={name} />
      <div className="player-name">{name}</div>
      <div className="role">{role}</div>
    </div>
  )
}
