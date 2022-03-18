import React, { useState } from 'react'

const TableElem = ({ prize, turn, players, setPlayers }) => {
  const [status, setStatus] = useState(prize.status)
  const [playerNumber, setPlayerNumber] = useState("")

  const setPrize = () => {
    if(status) return

    if(players[turn.turn].points === 0) {
      return turn.setTurn(turn.turn + 1)
    }

    let newPlayers = [...players]
    newPlayers[turn.turn].points = newPlayers[turn.turn].points - 1
    setPlayers(newPlayers)
    setPlayerNumber(newPlayers[turn.turn].id + 1)

    prize.status = 1
    setStatus(prize.status)
    turn.setTurn(turn.turn + 1)
  }
  return (
    <div onClick={setPrize} className={status ? "table_elem active" : "table_elem"}>
      {status ? `${prize.name} - #${playerNumber}` : ""}
    </div>
  )
}

export default TableElem