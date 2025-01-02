import Table from 'react-bootstrap/Table';
// ----
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
// ---
import { Fragment } from 'react';

const Tables = () => {
    return (
        <Fragment>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NOMBRE</th>
                        <th>EMPRESA</th>
                        <th>RFC</th>
                        <th>NR</th>
                        <th>TELEFONO</th>
                        <th>DOMICILIO</th>
                        <th>ZONA</th>
                        <th>ESTATUS</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>GUILLERMO</th>
                        <th>ITSZ</th>
                        <th>DIRMDKF090L1</th>
                        <th>-</th>
                        <th>0123456789</th>
                        <th>USULO GALVAN</th>
                        <th>JALAPILLA</th>
                        <th>PENDIENTE</th>
                        <th><BsPencilSquare /></th>
                        <th><BsTrash3 /></th>
                    </tr>
                </tbody>
            </Table>
        </Fragment>
    )
}

export default Tables;