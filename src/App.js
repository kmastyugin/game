import React from 'react'
import { Routes, Route } from "react-router-dom"
// import { Routes, Route, Navigate } from "react-router-dom"

import IndexPage from "./views/IndexPage"

const App = () => {
    return (
        <>
            {/* <Main /> */}

            <Routes>
                <Route path="/" element={<IndexPage />}/>
                {/* <Route path="/goods/:id" element={<IndexPage />}/>
                <Route path="/404" element={<NotFoundPage />}/>
                <Route path="/order/:id/:code" element={<OrderPage />}/>
                <Route path="*" element={<Navigate to="/404" />}/> */}
            </Routes>
        </>
    )
}

export default App
