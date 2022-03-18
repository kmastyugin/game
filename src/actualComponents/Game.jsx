import React from 'react'
import Table from "../actualComponents/Table"
import PlayersList from "../actualComponents/PlayersList"


const game = ({ prizes, players, setPlayers, turn }) => {
  return (
    <div className="game">
        <Table setPlayers={setPlayers} players={players} turn={turn} prizes={prizes} />
        <PlayersList turn={turn} players={players} setPlayers={setPlayers} />
    </div>
  )
}

export default game