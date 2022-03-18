import React, { useState } from 'react'

const SetPlayers = ({ players }) => {
    const [playerNumber, setPlayerNumber] = useState(1)
    const [playerName, setPlayerName] = useState("")

    const setPlayer = () => {
        if(!playerName) {
            return alert('Введите имя первого игрока')
        }

        // Увеличение номера добавляемого игрока
        setPlayerNumber(playerNumber+1)

        // Добавление игрока в массив в компоненте IndexPage
        players.add(playerName)

        // Очистка поля ввода
        setPlayerName('')

        // Если игроки закончились вызываем метод, убирающий страницу
        if(+players.count === +playerNumber) {
            players.set()
        }
    }

    return (
        <div className='players'>
            <div className="players_number">
                Игрок {playerNumber}/{players.count}
            </div>
            <input
                value={playerName} onChange={e => setPlayerName(e.target.value)}
                className="players_input"
                type="text"
                placeholder="Имя"
            />
            <button onClick={setPlayer} className='players_button'>Принять</button>
        </div>
    )
}

export default SetPlayers