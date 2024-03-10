import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function BookDeleteModal(props) {
  const { show, setShow, handleDelete, bookId } = props;
  const handleClose = () => setShow(false);
  const handleDeleteBook = () => {
    console.log(bookId);
    setShow(false);
    handleDelete(bookId);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>Etes-vous sure de vouloir supprimer ce livre?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annuler
        </Button>
        <Button variant="danger" onClick={handleDeleteBook}>
          Oui, je supprime
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
