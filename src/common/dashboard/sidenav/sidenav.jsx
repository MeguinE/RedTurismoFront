import { Fragment } from 'react';
// ----
import './sidernav.css';
import Menu from './menu/menu';
import Perfil from './perfil/perfil';

const Sidernav = () => {
    return (
        <Fragment>
            <Perfil />
            <Menu />
        </Fragment>
    )
}

export default Sidernav;
