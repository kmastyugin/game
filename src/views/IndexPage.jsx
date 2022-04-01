import React, { useState, useEffect } from 'react'
import PlayersInput from "../actualComponents/Players"
import SetPlayersInput from "../actualComponents/SetPlayers"
import Game from "../actualComponents/Game"

const Main = () => {
    // Количество игроков
    const [playersCount, setPlayersCount] = useState('')
    // Имена игроков
    const [playersList, setPlayersList] = useState([])
    // Объект игроков
    const [fullPlayersList, setFullPlayersList] = useState([])
    // Объект с выигрышами
    const [ prizes, setPrizes ] = useState([])

    const [ turn, setTurn ] = useState(0)

    // Шансы
    const textPrizes = [
        // 5%
        "Исправить 2 на 5",
        // 5%
        "5+",
        // 15%
        "+",
        "+",
        "+",
        // 10%
        "+1 балл к оценке",
        "+1 балл к оценке",
        // 10%
        "+1 балл в журнал",
        "+1 балл в журнал",
        // 15%
        "+0.5 балла за урок",
        "+0.5 балла за урок",
        "+0.5 балла за урок",
        // 10%
        "удалить оценку",
        // 5%
        "удалить оценку другу",
        // 5%
        "6 прис./3 отжим.",
        // 15%
        "пусто",
        "пусто",
        "пусто",
        // 5%
        "минус",
    ]


    // Текущая страница
    const [page, setPage] = useState(0)


    // Генерация выигрышей
    const generateRandomPrizes = () => {
        let randPrizes = []
        for(let i = 0; i < 100; i++) {
            let rand = Math.round(0 - 0.5 + Math.random() * (textPrizes.length))
            randPrizes.push({ id: i, name: textPrizes[rand], status: 0 })
        }
        setPrizes(randPrizes)
    }


    /**
     * Количество игроков
     */
    // Количество игроков выбрано
    const playersCountReady = () => {
        setPage(page+1)
    }


    /**
     * 
     * Имена игроков
     */
    // Добавление игрока в массив
    const addPlayer = (player) => {
        setPlayersList([...playersList, player])
    }
    // Имена игроков выбраны
    const playersNameReady = () => {
        setPage(page+1)
        generateRandomPrizes()
    }
    // Полный список игроков
    const fullPlayersListSet = () => {
        let players = []
        playersList.forEach((player, i) => {
            players.push({ id: i, name: player, points: 0 })
        })

        setFullPlayersList(players)
        // readyGame()
    }

    // const readyGame = () => {
    //     let counterZero = 0

    //     fullPlayersList.forEach(player => {
    //         if(player.points === 0) {
    //             counterZero++
    //         }
    //     })
    // }


    /**
     * useEffect
     */
    // При изменении массива имен пользователей вызываем заполнение нового массива с объектами пользователей
    useEffect(() => {
        fullPlayersListSet()
    }, [playersList])

    // При изменении массива объектов пользователей выводим актуальную информацию
    useEffect(() => {
        console.log(fullPlayersList);
    }, [ fullPlayersList ])

    useEffect(() => {
        if(turn === fullPlayersList.length) {
            setTurn(0)
        }
    }, [ turn ])


    return (
        <div className="content">
            {page === 0
            // Ввод количетсва игроков
            ? <PlayersInput players={{count: playersCount, setCount: setPlayersCount, set: playersCountReady}} />
            : page === 1 
            // Ввод игроков
            ? <SetPlayersInput players={{ count: playersCount, add: addPlayer, set: playersNameReady }} />
            : <Game turn={{turn, setTurn}} prizes={prizes} players={fullPlayersList} setPlayers={setFullPlayersList} />
            }
            
        </div>
    )
}

export default Main
