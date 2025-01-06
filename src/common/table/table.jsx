import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { BsTrash3 } from 'react-icons/bs';
import { Table } from 'react-bootstrap';

const Tables = ({ socios }) => {

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
            <td>
              <BsPencilSquare />
            </td>
            <td>
              <BsTrash3 />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tables;
