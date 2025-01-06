// components/admin/socios/Socios.jsx
import { useEffect, useState, Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import { useSocios } from '../../../context/SociosContext'; // Usa el contexto para manejar los socios
import Tables from '../../../common/table/table'; // Componente para mostrar la tabla
import './socios.css';

const Socios = () => {
  const [socios, actualizarSocios] = useSocios(); // Estado para almacenar la lista de socios desde el contexto
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    domicilio: '',
    telefono: '',
    email: '',
    rnt: '',
    rfc: '',
    empresa: '',
    lugar: '',
  });

  // Función para cargar los datos de socios desde el backend
  const cargarSocios = async () => {
    try {
      const token = localStorage.getItem('token'); // Obtener el token desde localStorage
      const response = await axios.get('http://127.0.0.1:8000/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`, // Enviar el token en la cabecera
        },
      });
      actualizarSocios(response.data); // Actualiza los socios en el contexto
    } catch (error) {
      console.error('Error al cargar los socios:', error.response ? error.response.data : error.message);
    }
  };

  // Cargar los datos cuando el componente se monta
  useEffect(() => {
    cargarSocios();
  }, []); 

  // Manejar el cambio de valores en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el registro de un nuevo socio
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Obtener el token desde localStorage
      const response = await axios.post('http://127.0.0.1:8000/api/users', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Enviar el token en la cabecera
        },
      });
      if (response.status === 201) {
        cargarSocios(); // Recarga los socios después de registrar uno nuevo
        setFormData({
          nombre: '',
          apellidos: '',
          domicilio: '',
          telefono: '',
          email: '',
          rnt: '',
          rfc: '',
          empresa: '',
          lugar: '',
        });
      }
    } catch (error) {
      console.error('Error al registrar socio:', error.response ? error.response.data : error.message);
    }
  };

  // Función para manejar baja de socio
  const handleBaja = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Obtener el token desde localStorage
      const response = await axios.delete(`http://127.0.0.1:8000/api/users/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`, // Enviar el token en la cabecera
        },
      });
      if (response.status === 200) {
        cargarSocios(); // Recarga los socios después de dar de baja uno
      }
    } catch (error) {
      console.error('Error al dar de baja socio:', error.response ? error.response.data : error.message);
    }
  };

  // Función para manejar modificación de socio
  const handleModificar = async () => {
    try {
      const token = localStorage.getItem('token'); // Obtener el token desde localStorage
      const response = await axios.put(`http://127.0.0.1:8000/api/users/${formData.id_socio}`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Enviar el token en la cabecera
        },
      });
      if (response.status === 200) {
        cargarSocios(); // Recarga los socios después de modificar
      }
    } catch (error) {
      console.error('Error al modificar socio:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Fragment>
      <Row>
        <Col xs={5}>
          <Card>
            <Card.Title className="text-center mt-4">
              <h4>Socios</h4>
            </Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <FloatingLabel controlId="nombre" label="Nombre" className="mb-3">
                      <Form.Control
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Nombre"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel controlId="apellidos" label="Apellidos" className="mb-3">
                      <Form.Control
                        type="text"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleInputChange}
                        placeholder="Apellidos"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel controlId="domicilio" label="Domicilio" className="mb-3">
                      <Form.Control
                        type="text"
                        name="domicilio"
                        value={formData.domicilio}
                        onChange={handleInputChange}
                        placeholder="Domicilio"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel controlId="telefono" label="Telefono" className="mb-3">
                      <Form.Control
                        type="text"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="Telefono"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel controlId="email" label="Email" className="mb-3">
                      <Form.Control
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel controlId="rnt" label="RNT" className="mb-3">
                      <Form.Control
                        type="text"
                        name="rnt"
                        value={formData.rnt}
                        onChange={handleInputChange}
                        placeholder="RNT"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel controlId="rfc" label="RFC" className="mb-3">
                      <Form.Control
                        type="text"
                        name="rfc"
                        value={formData.rfc}
                        onChange={handleInputChange}
                        placeholder="RFC"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel controlId="empresa" label="Empresa" className="mb-3">
                      <Form.Control
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Empresa"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatingLabel controlId="lugar" label="Lugar de desarrollo" className="mb-3">
                      <Form.Control
                        type="text"
                        name="lugar"
                        value={formData.lugar}
                        onChange={handleInputChange}
                        placeholder="Lugar de desarrollo"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="primary" className="d-grid gap-2 mt-5" type="submit">
                      Registrar
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="danger"
                      className="d-grid gap-2 mt-5"
                      onClick={() => handleBaja(formData.id_socio)}
                    >
                      Baja
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="warning" className="d-grid gap-2 mt-5" onClick={handleModificar}>
                      Modificar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={7}>
          <Tables socios={socios} /> {/* Pasa los socios al componente de tabla */}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Socios;
