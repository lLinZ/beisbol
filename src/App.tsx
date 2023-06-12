import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { AdminRoutes, ClientRoutes } from './components/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <AdminRoutes />
      <ClientRoutes />
    </BrowserRouter>
  );
}

export default App;