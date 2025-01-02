import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//----- 
import logo from '../../../../assets/img/logo_empresa.svg'
import './Perfil.css'

const Perfil = () => {
    const title = "RED DE TURISMO";
    return (
        <div className="fondo-perfil">
            <Row>
                <Col xs={6}> <div><img className="img-fluid img-logo-perfil" src={logo} /></div></Col>
                <Col xs={6}><div className="position-relative change-relative"><small className="text-white font-texts">{title}</small></div></Col>
            </Row>
        </div>
    )
}

export default Perfil;
