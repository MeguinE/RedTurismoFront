import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Fragment } from 'react';
import Tables from '../../common/table/table';

const Eventos = () => {
    return (<Fragment>
        <Row>
            <Col xs={4}>
                <Card>
                    <Card.Title className='text-center mt-4'><h4>Eventos</h4></Card.Title>
                    <Card.Body>
                        <Form>
                            <FloatingLabel controlId='evento'
                                label='Evento' className='mb-3'>
                                <Form.Control type='text' placeholder='Evento' />
                            </FloatingLabel>
                            <FloatingLabel controlId='direccion'
                                label='Direccion' className='mb-3'>
                                <Form.Control type='text' placeholder='Direccion' />
                            </FloatingLabel>
                            <FloatingLabel controlId='tipo'
                                label='Tipo' className='mb-3'>
                                <Form.Control type='text' placeholder='tipo' />
                            </FloatingLabel>
                            <FloatingLabel controlId='descripcion'
                                label='Descripcion' className='mb-3'>
                                <Form.Control type='text' placeholder='direccion' />
                            </FloatingLabel>
                            <FloatingLabel controlId='fecha'
                                label='Fecha' className='mb-3'>
                                <Form.Control type='date' placeholder='fecha' />
                            </FloatingLabel>
                            <div className='d-grid gap-2 mt-4'>
                                <Button variant='primary' type='submit'>Guardar</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={8}><Tables /></Col>
        </Row>
    </Fragment>)
}

export default Eventos;