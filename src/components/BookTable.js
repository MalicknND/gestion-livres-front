import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BookDeleteModal from "./BookDeleteModal";
import { useState } from "react";
import BookDetailsModal from "./BookDetailsModal";

function BookTable(props) {
  const { show, setShow, handleDelete, handleEdit } = props;
  const [book, setBook] = useState(null);
  const [showDetails, setBookDetails] = useState(false);

  const ShowModal = (book) => {
    setBook(book);
    setShow(true);
  };

  const showDetailsModal = (book) => {
    setBook(book);
    setBookDetails(true);
  };

  return (
    <>
      <BookDeleteModal
        show={show}
        setShow={setShow}
        handleDelete={handleDelete}
        bookId={book?.id}
      />
      <BookDetailsModal
        show={showDetails}
        setShow={setBookDetails}
        book={book}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
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
                <Button variant="primary" onClick={() => handleEdit(livre)}>
                  Modifier
                </Button>
                <Button variant="danger" onClick={() => ShowModal(livre)}>
                  Supprimer
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => showDetailsModal(livre)}
                >
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default BookTable;
