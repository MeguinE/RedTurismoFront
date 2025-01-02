import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// -----
import { Outlet } from 'react-router-dom'
import Sidernav from './sidenav/sidenav';

const Dashboard = () => {
    return (
        <>
            <Row>
                <Col xs={2}><Sidernav /></Col>
                <Col xs={10}>
                    <Container className='margin-tablero' fluid>
                        <Outlet />
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard;

