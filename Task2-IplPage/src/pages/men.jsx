import React from 'react'
import PlayerCard from '../components/PlayerCard'
import { menPlayers } from '../model/players'

export default function Men() {
  return (
    <div>
      <section className="section" style={{ paddingTop: 30 }}>
        <h2 style={{ textAlign: "center", padding: "10px", fontSize: "42px" }}>RCB MEN SQUAD</h2>
        <p style={{ textAlign: 'center', color: '#d4af37' }}>Play Bold. Fear None.</p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="players-grid">
          {menPlayers.map(p => (
            <PlayerCard key={p.id} img={p.img} name={p.name} role={p.role} />
          ))}
        </div>
      </section>
    </div>
  )
}
