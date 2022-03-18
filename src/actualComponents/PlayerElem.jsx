import React, { useState } from 'react'

const PlayerElem = ({ player, players, setPlayers, turn }) => {
    const [points, setPoints] = useState(player.points)

    // Реактивная смена поинтов у конкретного пользователя
    const changePoints = (p) => {
        setPoints(+p)
        let newPlayers = [...players]
        newPlayers[player.id].points = +p
        setPlayers(newPlayers)
    }

    return (
        <tr key={player.name}>
            <td className={turn.turn === player.id ? "active" : ""}>№{player.id + 1} {player.name}</td>
            <td>
                <input value={player.points} onChange={e => changePoints(e.target.value)} type="text" />
            </td>
        </tr>
    )
}

export default PlayerElem