import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { BsTrash3 } from 'react-icons/bs';
import { Table } from 'react-bootstrap';

const Tables = ({ socios, handleEditar, handleBaja }) => {
  if (!socios || socios.length === 0) {
    return <p>No hay socios registrados.</p>;
  }

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Empresa</th>
          <th>RFC</th>
          <th>NR</th>
          <th>Teléfono</th>
          <th>Domicilio</th>
          <th>Zona</th>
          <th>Estatus</th>
          <th>Usuario</th>
          <th>Rol</th>
          <th>Modificar</th>
          <th>Baja</th>
        </tr>
      </thead>
      <tbody>
        {socios.map((socio) => (
          <tr key={socio.id_socio}>
            <td>{socio.id_socio}</td>
            <td>{socio.nombre}</td>
            <td>{socio.empresa}</td>
            <td>{socio.rfc}</td>
            <td>{socio.rnt}</td>
            <td>{socio.telefono}</td>
            <td>{socio.domicilio}</td>
            <td>{socio.lugar_desarrollo}</td>
            <td>{socio.estado}</td>
            <td>{socio.usuario}</td>
            <td>{socio.rol}</td>
            <td>
              <BsPencilSquare onClick={() => handleEditar(socio)} style={{ cursor: 'pointer' }} />
            </td>
            <td>
              <BsTrash3 onClick={() => handleBaja(socio.id_socio)} style={{ cursor: 'pointer' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tables;
