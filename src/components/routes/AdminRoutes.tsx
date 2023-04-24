import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashboardPage, GamesPage, PlayersPage, ProfilePage, StatsPage, UsersPage } from '../../pages/admin'
export const AdminRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/admin/profile' element={<ProfilePage />} />
            <Route path='/admin/players' element={<PlayersPage />} />
            <Route path='/admin/games' element={<GamesPage />} />
            <Route path='/admin/dashboard' element={<DashboardPage />} />
            <Route path='/admin/stats' element={<StatsPage />} />
            <Route path='/admin/users' element={<UsersPage />} />
        </Routes>
    )
}
