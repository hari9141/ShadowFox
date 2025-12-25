import React, { useState, useEffect } from 'react';
import { matchHistory, playerStats, womenStatsMock } from '../model/statistics';
import { menPlayers, womenPlayers } from '../model/players';

export default function Statistics() {
    const [activeTab, setActiveTab] = useState('matches');
    const [teamFilter, setTeamFilter] = useState('men');
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const getStats = (id, team) => {
        return team === 'men' ? playerStats[id] : womenStatsMock[id];
    };

    const players = teamFilter === 'men' ? menPlayers : womenPlayers;

    const getResultClass = (result) => {
        if (result.toLowerCase().includes('won')) return 'win';
        return 'loss';
    };

    return (
        <div className="statistics-page">

            <header className="stats-hero">
                <div className="hero-overlay"></div>
                <div className="stats-hero-content">
                    <h1 className="stats-title-large">Stats Arena</h1>
                    <p className="stats-subtitle-large">Analyze. Dominate. Conquer.</p>
                </div>
            </header>

            <nav className="stats-nav">
                <button
                    className={`stats-nav-btn ${activeTab === 'matches' ? 'active' : ''}`}
                    onClick={() => setActiveTab('matches')}
                >
                    Match Center
                </button>
                <button
                    className={`stats-nav-btn ${activeTab === 'players' ? 'active' : ''}`}
                    onClick={() => setActiveTab('players')}
                >
                    Player Metrics
                </button>
            </nav>

            {activeTab === 'matches' && (
                <section className="matches-grid">
                    {matchHistory.map((match, index) => (
                        <div
                            key={match.id}
                            className={`match-card-3d ${getResultClass(match.result)}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="match-card-header">
                                <span className="match-date">{match.date} | {match.venue}</span>
                            </div>

                            <h3 className="opponent-name">VS {match.opponent}</h3>
                            <p className="score-display">{match.score}</p>

                            <div className="match-footer">
                                <span className={`match-result-tag ${getResultClass(match.result)}`}>
                                    {match.result}
                                </span>
                                <div style={{ marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px' }}>
                                    <small style={{ color: '#aaa' }}>Top Performer</small>
                                    <p style={{ color: '#fff', fontWeight: '600' }}>{match.topPerformer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {activeTab === 'players' && (
                <section className="player-dashboard">

                    <div className="dashboard-controls">
                        <button
                            className={`control-btn ${teamFilter === 'men' ? 'active' : ''}`}
                            onClick={() => setTeamFilter('men')}
                        >
                            Men's Team
                        </button>
                        <button
                            className={`control-btn ${teamFilter === 'women' ? 'active' : ''}`}
                            onClick={() => setTeamFilter('women')}
                        >
                            Women's Team
                        </button>
                    </div>

                    <div className="stats-table-container custom-scrollbar">
                        <table className="stats-glass-table">
                            <thead>
                                <tr>
                                    <th>Player Profile</th>
                                    <th>Role</th>
                                    <th>Matches</th>
                                    <th>Runs / Performance</th>
                                    <th>Wickets</th>
                                    <th>Avg</th>
                                    <th>S/R</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((p, index) => {
                                    const stats = getStats(p.id, teamFilter) || { matches: 0, runs: 0, wickets: 0, avg: 0, sr: 0 };

                                    return (
                                        <tr key={p.id} style={{ animationDelay: `${index * 0.05}s` }}>
                                            <td>
                                                <div className="player-info-flex">
                                                    <img src={p.img} alt={p.name} className="player-avatar-small" />
                                                    <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{p.name}</span>
                                                </div>
                                            </td>
                                            <td style={{ color: '#ccc' }}>{p.role}</td>
                                            <td className="stat-value">{stats.matches}</td>

                                            <td>
                                                <div className="stat-value">{stats.runs}</div>
                                            </td>

                                            <td className="stat-value">{stats.wickets}</td>
                                            <td className="stat-value">{stats.avg}</td>

                                            <td>
                                                <div className="stat-value">{stats.sr}</div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

        </div>
    );
}
