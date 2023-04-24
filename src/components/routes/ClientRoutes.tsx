import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashboardPage, GamesPage, PlayersPage, ProfilePage } from '../../pages/client'
export const ClientRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/players' element={<PlayersPage />} />
            <Route path='/games' element={<GamesPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    )
}
