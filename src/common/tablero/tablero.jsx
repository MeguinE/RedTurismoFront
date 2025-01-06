import { useEffect, useState, Fragment } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
// Importación de iconos
import { BsPersonLinesFill, BsPersonFillCheck, BsPersonVcard } from "react-icons/bs";
// Importación de gráficos
import Graficos from '../graficas/graficos';
import Barras from '../graficas/barras';
import GraficaPie from '../graficas/pie';
import axios from 'axios'; // Importar axios
import './tablero.css';

const Tablero = () => {
    const [totalSocios, setTotalSocios] = useState(0);
    const [nuevosSocios, setNuevosSocios] = useState(0);
    const [ingresosMembresias, setIngresosMembresias] = useState(0);
    
    // Obtener los datos del dashboard
    useEffect(() => {
        // Obtener el token almacenado en localStorage
        const token = localStorage.getItem('token');

        // Si no hay token, redirigir al login
        if (!token) {
            window.location.href = '/';  // Redirigir a la página de login si no hay token
            return;
        }

        // Función para obtener los datos desde la API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`  // Incluir el token en los headers de la solicitud
                    }
                });

                // Actualizar los estados con los datos de la API
                setTotalSocios(response.data.totalSocios);
                setNuevosSocios(response.data.nuevosSocios);
                setIngresosMembresias(response.data.ingresosMembresias);
            } catch (error) {
                console.error("Error al obtener los datos: ", error);
            }
        };

        fetchData(); // Llamar a la función para obtener los datos
    }, []); // Ejecutar una sola vez cuando el componente se monta

    return (
        <Fragment>
            <Row>
                <Col xs={4}>
                    <Card className='box-card-item'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <BsPersonLinesFill /> Total Socios
                            </Card.Title>
                            <Card.Text className='text-center change-text-item-card'>
                                {totalSocios} {/* Mostrar el total de socios */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card className='box-card-item'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <BsPersonFillCheck /> Nuevos Socios
                            </Card.Title>
                            <Card.Text className='text-center change-text-item-card'>
                                {nuevosSocios} {/* Mostrar el número de nuevos socios */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card className='box-card-item'>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                <BsPersonVcard /> Ingresos Membresías
                            </Card.Title>
                            <Card.Text className='text-center change-text-item-card'>
                                ${ingresosMembresias} {/* Mostrar los ingresos de membresías */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <GraficaPie />
            <Graficos />
            <Barras />
        </Fragment>
    );
};

export default Tablero;
