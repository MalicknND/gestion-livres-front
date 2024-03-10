import Modal from "react-bootstrap/Modal";

export default function BookDetailsModal(props) {
  const { show, setShow, book } = props;
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Details du livre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {book && (
          <>
            <p>Titre : {book.titre}</p>
            <p>Auteur : {book.auteur}</p>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}
