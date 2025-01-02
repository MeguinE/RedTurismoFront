// importacion de elmentos en react-bootstrap.
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';

// dependencias react
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from '../../assets/img/logo_empresa.svg'
// -- importacion de axio


const Login = () => {
    const [user, setUser] = useState('Juanperez');
    const [password, setPassword] = useState('contraseña123');
    const navigate = useNavigate();

    const handlerChangeUser = (e) => {
        setUser(e.target.value);
    }
    const handlerChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const postData = () => {
        navigate('/dashboard');
    }

    return (
        <Row className="align-items-center vh-100">
            <Col xs={4}>
            </Col>
            <Col xs={4}>
                <Card className='box-card-item'>
                    <img src={logo} width='50%' className='mx-auto d-block' />
                    <Form className='form-login' onSubmit={postData}>
                        <FloatingLabel controlId='usuario' label='Usuario' className='mt-4'>
                            <Form.Control type='text' value={user} onChange={handlerChangeUser} placeholder='Usuario' />
                        </FloatingLabel>
                        <FloatingLabel controlId='password' label='Password' className='mt-4'>
                            <Form.Control type='password' value={password} onChange={handlerChangePassword} placeholder='Password' />
                        </FloatingLabel>
                        <div className="d-grid gap-2 mt-4">
                            <Button variant='primary' size='lg' type='submit'>Log in</Button>
                        </div>
                    </Form>
                </Card>
            </Col>
            <Col xs={4}>
            </Col>
        </Row>
    )
}


export default Login

