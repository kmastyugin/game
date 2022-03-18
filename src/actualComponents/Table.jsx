import React, { useState } from 'react'
import TableElem from "../actualComponents/TableElem"


const Table = ({ prizes, turn, players, setPlayers }) => {
    return (
        <div className="table">
             <div className="row">
                <div className="row_elem">
                    1
                </div>
                <div className="row_elem">
                    2
                </div>
                <div className="row_elem">
                    3
                </div>
                <div className="row_elem">
                    4
                </div>
                <div className="row_elem">
                    5
                </div>
                <div className="row_elem">
                    6
                </div>
                <div className="row_elem">
                    7
                </div>
                <div className="row_elem">
                    8
                </div>
                <div className="row_elem">
                    9
                </div>
                <div className="row_elem">
                    10
                </div>
            </div>
            <div className="col">
                <div className="col_elem">
                    А
                </div>
                <div className="col_elem">
                    Б
                </div>
                <div className="col_elem">
                    В
                </div>
                <div className="col_elem">
                    Г
                </div>
                <div className="col_elem">
                    Д
                </div>
                <div className="col_elem">
                    Е
                </div>
                <div className="col_elem">
                    Ё
                </div>
                <div className="col_elem">
                    Ж
                </div>
                <div className="col_elem">
                    З
                </div>
                <div className="col_elem">
                    И
                </div>
            </div>
            {prizes.map(prize => {
                return <TableElem setPlayers={setPlayers} players={players} turn={turn} prize={prize} key={prize.id} />
            })}
        </div>
    )
}

export default Table