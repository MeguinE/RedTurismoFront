import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// ------

import { Fragment, useState } from 'react';
import './estatutos.css';


const Estatutos = () => {
    const [estatuto, setEstatutos] = useState('');

    const handlerChangeEstatuto = (e) => {
        setEstatutos(e.target.value);
    }

    return (<Fragment>
        <Row>
            <Col xs={6}>
                <Form className='box-card-itemz'>
                    <Form.Control as="textarea" className='tamano-textarea' rows={3} value={estatuto} onChange={handlerChangeEstatuto} />
                    <Button variant='primary' className='mt-4'>Previsualizar</Button>
                </Form>
            </Col>
            <Col xs={6}><Card>
                <Card.Title className='text-center mt-4'>Estatuto</Card.Title>
                <Card.Body>{estatuto}</Card.Body>
            </Card></Col>
        </Row>
    </Fragment>)
}

export default Estatutos;