import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function BookTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.livres?.map((livre) => (
          <tr key={livre.id}>
            <td>{livre.id}</td>
            <td>{livre.titre}</td>
            <td>{livre.auteur}</td>
            <td>
              <Button variant="primary">Modifier</Button>
              <Button variant="danger">Supprimer</Button>
              <Button variant="secondary">Details</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BookTable;
