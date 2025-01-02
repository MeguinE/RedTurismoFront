import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './common/login/login';
import Dashboard from './common/dashboard/dashboard';
import Tablero from './common/tablero/tablero';
import Usuario from './components/admin/usuarios/usuarios';
import Finanzas from './components/admin/finanzas/finanzas';
import Asistencia from './components/admin/asistencia/asistencia';
import Calendario from './components/admin/calendario/calendario';
import Estatutos from './components/admin/estutos/estatutos';
import Eventos from './common/eventos/eventos';
import Socios from './components/admin/socios/socios';
import Pagos from './components/admin/pagos/pagos';

function App() {
  return (
    <Router>
      <Routes>
        {/* path principal para el login */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Tablero />} />
          <Route path='usuario' element={<Usuario />} />
          <Route path="finanzas" element={<Finanzas />} />
          <Route path="asistencia" element={<Asistencia />} />
          <Route path="calendario" element={<Calendario />} />
          <Route path="estatutos" element={<Estatutos />} />
          <Route path='eventos' element={<Eventos />} />
          <Route path='socios' element={<Socios />} />
          <Route path='pago' element={<Pagos />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
