import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminGamesPage } from '../../pages/admin/games/AdminGamesPage'
import { AdminUsersPage } from '../../pages/admin/users/AdminUsersPage'
import { AdminPlayersPage } from '../../pages/admin/players/AdminPlayersPage'
import { AdminStatsPage } from '../../pages/admin/stats/AdminStatsPage'
import { AdminDashboard } from '../../pages/admin/AdminDashboard'

type Props = {}

export const AdminRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/games' element={<AdminGamesPage />} />
            <Route path='/admin/stats' element={<AdminStatsPage />} />
            <Route path='/admin/players' element={<AdminPlayersPage />} />
            <Route path='/admin/users' element={<AdminUsersPage />} />
        </Routes>
    )
}