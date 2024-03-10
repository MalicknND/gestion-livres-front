import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BookModal(props) {
  const {
    show,
    setShow,
    titre,
    setTitre,
    auteur,
    setAuteur,
    handleSubmit,
    currentBook,
  } = props;
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentBook ? "Modifier le livre" : "Ajouter un livre"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titre du livre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter le titre"
                onChange={(e) => setTitre(e.target.value)}
                value={titre}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Auteur</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer l'auteur"
                onChange={(e) => setAuteur(e.target.value)}
                value={auteur}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Valider
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookModal;
