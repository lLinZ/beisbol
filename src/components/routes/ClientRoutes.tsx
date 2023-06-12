import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage, GamesPage, PlayersPage, ProfilePage } from '../../pages/client'

type Props = {}

export const ClientRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/games' element={<GamesPage />} />
            <Route path='/players' element={<PlayersPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    )
}