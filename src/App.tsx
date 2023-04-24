import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { AdminRoutes, ClientRoutes } from './components/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pagina principal */}
        <Route path='/' element={<HomePage />} />

        {/* Rutas de administrador */}
        <AdminRoutes />

        {/* Rutas de Cliente */}
        <ClientRoutes />
      </Routes>
    </BrowserRouter>
  );
}

export default App;