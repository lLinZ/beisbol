import { FC } from 'react'
import { PlayersPage, GamesPage, DashboardPage, StatsPage, UsersPage } from '../../pages/admin'
import { Route } from 'react-router-dom'
export const AdminRoutes: FC = () => {
    return (
        <>
            <Route path='/admin/players' element={<PlayersPage />} />
            <Route path='/admin/games' element={<GamesPage />} />
            <Route path='/admin/dashboard' element={<DashboardPage />} />
            <Route path='/admin/stats' element={<StatsPage />} />
            <Route path='/admin/users' element={<UsersPage />} />
        </>
    )
}
