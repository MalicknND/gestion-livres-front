import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import BookModal from "./components/BookModal";
import { useState } from "react";

function App() {
  const [livres, setLivres] = useState([
    {
      id: 1,
      titre: "Le livre",
      auteur: "test",
    },
    {
      id: 2,
      titre: "Le livre2",
      auteur: "test",
    },
    {
      id: 3,
      titre: "Le livre3",
      auteur: "test",
    },
  ]);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [currentBook, setCurrentBook] = useState(null);

  const handleShow = () => {
    setCurrentBook(null);
    setShow(true);
    setAuteur("");
    setTitre("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      setLivres(
        livres.map((book) =>
          book.id === currentBook.id ? { ...book, titre, auteur } : book
        )
      );
    } else {
      const newBook = { id: livres.length + 1, titre, auteur };
      setLivres([...livres, newBook]);
    }
    setTitre("");
    setAuteur("");
    setShow(false);
  };

  const handleDelete = (id) => {
    setLivres(livres.filter((book) => book.id !== id));
    setShowDelete(false);
  };

  const handleEditShow = (book) => {
    setCurrentBook(book);
    setAuteur(book.auteur);
    setTitre(book.titre);
    setShow(true);
  };

  return (
    <div className="App">
      <Header />
      <BookModal
        show={show}
        setShow={setShow}
        setTitre={setTitre}
        setAuteur={setAuteur}
        handleSubmit={handleSubmit}
        currentBook={currentBook}
        titre={titre}
        auteur={auteur}
      />
      <Container style={{ marginTop: "25px" }}>
        <Row>
          <Col>
            <h2>Liste des livres</h2>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleShow}>
              Ajouter un livre
            </Button>
          </Col>
        </Row>
        <h2>Application de gestions de livres</h2>
        <BookTable
          livres={livres}
          show={showDelete}
          setShow={setShowDelete}
          handleDelete={handleDelete}
          handleEdit={handleEditShow}
        />
      </Container>
    </div>
  );
}

export default App;
