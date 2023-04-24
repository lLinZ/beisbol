import { FC } from 'react'
import { PlayersPage, GamesPage, DashboardPage, ProfilePage } from '../../pages/client'
import { Route } from 'react-router-dom'
export const ClientRoutes: FC = () => {
    return (
        <>
            <Route path='/players' element={<PlayersPage />} />
            <Route path='/games' element={<GamesPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </>
    )
}
