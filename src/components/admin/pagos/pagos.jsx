import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import { Fragment } from 'react';
import Tables from '../../../common/table/table';

const Pagos = () => {
    return (<Fragment>
        <Row>
            <Col xs={5}>
                <Card>
                    <Card.Title className='text-center mt-4'>Pagos</Card.Title>
                    <Card.Body>
                        <Form>
                            <FloatingLabel controlId='nombre'
                                label='Nombre' className='mb-3'>
                                <Form.Control type='text' placeholder='Nombre' />
                            </FloatingLabel>
                            <FloatingLabel controlId='Monto'
                                label='Monto' className='mb-3'>
                                <Form.Control type='text' placeholder='Monto' />
                            </FloatingLabel>
                            <FloatingLabel controlId='fecha'
                                label='fecha' className='mb-3'>
                                <Form.Control type='date' placeholder='Fecha' />
                            </FloatingLabel>
                            <div className="d-grid gap-2 mt-4">
                                <Button variant='primary' size='lg' type='submit'>Guardar</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={7}><Tables /></Col>
        </Row>
    </Fragment>)
}

export default Pagos;