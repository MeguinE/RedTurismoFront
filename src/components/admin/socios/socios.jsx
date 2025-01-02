import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import { Fragment } from 'react';
import Tables from '../../../common/table/table';
import './socios.css'

const Socios = () => {
    return (<Fragment>
        <Row>
            <Col xs={5}>
                <Card>
                    <Card.Title className='text-center mt-4'><h4>Socios</h4></Card.Title>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col><FloatingLabel controlId='nombre'
                                    label='Nombre' className='mb-3'>
                                    <Form.Control type='text' placeholder='Nombre' />
                                </FloatingLabel></Col>
                                <Col><FloatingLabel controlId='apellidos'
                                    label='Apellidos' className='mb-3'>
                                    <Form.Control type='text' placeholder='Apellidos' />
                                </FloatingLabel></Col>
                            </Row>
                            <Row>
                                <Col> <FloatingLabel controlId='domicilio'
                                    label='Domicilio' className='mb-3'>
                                    <Form.Control type='text' placeholder='Domicilio' />
                                </FloatingLabel></Col>
                                <Col><FloatingLabel controlId='telefono'
                                    label='Telefono' className='mb-3'>
                                    <Form.Control type='text' placeholder='Telefono' />
                                </FloatingLabel></Col>
                            </Row>
                            <Row>
                                <Col><FloatingLabel controlId='Email'
                                    label='Email' className='mb-3'>
                                    <Form.Control type='text' placeholder='Email' />
                                </FloatingLabel></Col>
                                <Col> <FloatingLabel controlId='rnt'
                                    label='RNT' className='mb-3'>
                                    <Form.Control type='text' placeholder='RNT' />
                                </FloatingLabel></Col>
                            </Row>

                            <Row>
                                <Col><FloatingLabel controlId='rfc'
                                    label='RFC' className='mb-3'>
                                    <Form.Control type='text' placeholder='RFC' />
                                </FloatingLabel></Col>
                                <Col><FloatingLabel controlId='empresa'
                                    label='Empresa' className='mb-3'>
                                    <Form.Control type='text' placeholder='Empresa' />
                                </FloatingLabel></Col>
                            </Row>
                            <Row>
                                <Col><FloatingLabel controlId='lugar'
                                    label='Lugar de desarrollo' className='mb-3'>
                                    <Form.Control type='text' placeholder='Lugar de desarrollo' />
                                </FloatingLabel></Col>
                                <Col></Col>
                            </Row>


                            <Row>
                                <Col><Button variant='primary' className='d-grid gap-2 mt-5' type='submit'>Registrar</Button></Col>
                                <Col><Button variant='primary' className='d-grid gap-2 mt-5' type='submit'>Baja</Button></Col>
                                <Col><Button variant='primary' className='d-grid gap-2 mt-5' type='submit'>Modificar</Button></Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={7}><Tables /></Col>
        </Row>
    </Fragment>)
}

export default Socios;
