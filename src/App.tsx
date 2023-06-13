import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, RegisterPage, LoginPage } from './pages';
import { AdminRoutes, ClientRoutes } from './components/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/register' element={<RegisterPage />} />
      </Routes>
      <AdminRoutes />
      <ClientRoutes />
    </BrowserRouter>
  );
}

export default App;