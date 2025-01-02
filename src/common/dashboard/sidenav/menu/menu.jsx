import { BsPerson } from "react-icons/bs";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BsCheck2All } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BsHouse } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";
// --------
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="sidernav">
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-router' : '')}><BsHouse /> Inicio</NavLink>
            <NavLink to="/dashboard/socios" className={({ isActive }) => (isActive ? 'active-router' : '')}><BsPerson /> Socios</NavLink>
            <NavLink to="/dashboard/pago" className={({ isActive }) => (isActive ? 'active-router' : '')}><BsReverseLayoutTextSidebarReverse /> Pagos </NavLink>
            <NavLink to="/dashboard/asistencia" className={({ isActive }) => (isActive ? 'active-router' : '')}><BsCheck2All /> Asistencia</NavLink>
            {/*<NavLink to="/dashboard/calendario" className={({ isActive }) => (isActive ? 'active-router' : '')}><BsCalendarDate /> Calendario</NavLink>*/}
            <NavLink to="/dashboard/eventos" className={({ isActive }) => (isActive ? 'active-router' : '')}><BsCalendarDate /> Eventos</NavLink>
            <NavLink to="/dashboard/estatutos" className={({ isActive }) => (isActive ? 'active-router' : '')}><BsFileEarmarkBarGraph /> Estatutos</NavLink>
            <NavLink to="/"><BsBoxArrowInRight /> Cerrar session</NavLink>
        </div>
    )
}

export default Menu;
