import React, { useState } from 'react'

const Players = ({ players }) => {

    // const [playersCount, setPlayersCount] = useState('')
    const setPlayers = () => {
        if(!players.count) {
            return alert('Введите количество игроков')
        }

        players.set()
    }

    return (
        <div className='players'>
            <input 
                value={players.count} 
                onChange={e => players.setCount(e.target.value)} 
                className="players_input" 
                type="number" 
                placeholder="Количество игроков" 
            />
            <button onClick={setPlayers} className='players_button'>Принять</button>
        </div>
    )
}

export default Players