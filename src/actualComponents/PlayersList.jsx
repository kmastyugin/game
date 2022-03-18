import React from 'react'
import PlayerElem from "../actualComponents/PlayerElem"


const PlayersList = ({ players, turn, setPlayers }) => {

    return (
        <table>
            <tbody>
                <tr>
                    <td>Игрок</td>
                    <td>Очков</td>
                </tr>
                {players.map(player => {
                    return <PlayerElem 
                            turn={turn}
                            key={player.id} 
                            player={player}
                            players={players} 
                            setPlayers={setPlayers} />
                })}
            </tbody>
        </table>
    )
}

export default PlayersList