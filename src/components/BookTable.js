import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BookDeleteModal from "./BookDeleteModal";
import { useState } from "react";

function BookTable(props) {
  const { show, setShow, handleDelete } = props;

  const [bookId, setBookId] = useState(null);

  const ShowModal = (id) => {
    setBookId(id);
    setShow(true);
  };

  return (
    <>
      <BookDeleteModal
        show={show}
        setShow={setShow}
        handleDelete={handleDelete}
        bookId={bookId}
      />
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
                <Button variant="danger" onClick={() => ShowModal(livre.id)}>
                  Supprimer
                </Button>
                <Button variant="secondary">Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default BookTable;
