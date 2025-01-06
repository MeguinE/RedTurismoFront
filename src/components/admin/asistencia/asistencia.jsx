import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import { Fragment } from 'react';

import Tables from '../../../common/table/table';

const Asistencia = () => {
    return (<Fragment>
        <Row>
            <Col xs={4}><Card>
                <Card.Title>Asistencia</Card.Title>
                <Card.Body>
                    <Form>
                        <FloatingLabel
                            controlId='evento'
                            label="Evento"
                        >
                            <Form.Control
                                type='text'
                                name='evento'
                                placeholder='Evento'
                            ></Form.Control>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId='Socio'
                            label="Socio"
                        >
                            <Form.Control
                                type='text'
                                name='socio'
                                placeholder='Socio'
                            ></Form.Control>
                        </FloatingLabel>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="asistencia"
                            label="Asistencia"
                        />
                        <Form.Control
                            type='date'
                            name='socio'
                            placeholder='Socio'
                        ></Form.Control>
                        <Button variant="warning" className="d-grid gap-2 mt-5">Registrar</Button>
                    </Form>
                </Card.Body>
            </Card></Col>
            <Col xs={8}><Tables /></Col>
        </Row>
    </Fragment>)
}

export default Asistencia;
