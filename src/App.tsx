import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './pages';
import { AdminRoutes, ClientRoutes } from './components/routes';
import { DashboardPage, GamesPage, PlayersPage, ProfilePage } from './pages/client';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pagina principal */}
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>

      {/* Rutas de administrador */}
      <AdminRoutes />

      {/* Rutas de Cliente */}
      <ClientRoutes />
    </BrowserRouter>
  );
}

export default App;