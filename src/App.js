import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import BookModal from "./components/BookModal";
import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [livres, setLivres] = useState([]);
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

  // useEffect pour recuperer les livres dans la base de données
  useEffect(() => {
    api
      .get("/livres")
      .then((response) => {
        setLivres(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      api
        .put(`/livres/${currentBook.id}`, { ...currentBook, titre, auteur })
        .then((res) => {
          setLivres(
            livres.map((book) => (book.id === res.data.id ? res.data : book))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const newBook = { id: livres.length + 1, titre, auteur };
      api
        .post("/livres", newBook)
        .then((res) => {
          setLivres([...livres, res.data]);
        })
        .catch((error) => {
          console.log(error);
        });
      setLivres([...livres, newBook]);
    }
    setTitre("");
    setAuteur("");
    setShow(false);
  };

  const handleDelete = (id) => {
    // setLivres(livres.filter((book) => book.id !== id));
    api
      .delete(`/livres/${id}`)
      .then((res) => {
        setLivres(livres.filter((book) => book.id !== res.data.id));
      })
      .catch((error) => {
        console.log(error);
      });

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
