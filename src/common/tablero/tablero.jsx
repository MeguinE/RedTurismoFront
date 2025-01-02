import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// importacion de iconos
import { BsPersonLinesFill } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
import { BsPersonVcard } from "react-icons/bs";
// importacion react
import { Fragment } from 'react';
import Graficos from '../graficas/graficos';
import Barras from '../graficas/barras';
import GraficaPie from '../graficas/pie';
import './tablero.css';

const Tablero = () => {
    return (
        <Fragment>
            <Row>
                <Col xs={4}>
                    <Card className='box-card-item'>
                        <Card.Body>
                            <Card.Title className='text-center'><BsPersonLinesFill /> Total Socios</Card.Title>
                            <Card.Text className='text-center change-text-item-card'>150</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card className='box-card-item'>
                        <Card.Body>
                            <Card.Title className='text-center'><BsPersonFillCheck /> Nuevos Socios</Card.Title>
                            <Card.Text className='text-center change-text-item-card'>20</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}><Card className='box-card-item'>
                    <Card.Body>
                        <Card.Title className='text-center'><BsPersonVcard /> Ingresos Menbresias</Card.Title>
                        <Card.Text className='text-center change-text-item-card'>$12000.50</Card.Text>
                    </Card.Body>
                </Card></Col>
            </Row>
            <GraficaPie />
            <Graficos />
            <Barras />
        </Fragment>
    )
}

export default Tablero;
