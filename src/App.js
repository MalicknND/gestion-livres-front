import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import BookTable from "./components/BookTable";
import BookModal from "./components/BookModal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  console.log(title, author);
  const livres = [
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
  ];

  return (
    <div className="App">
      <Header />
      <BookModal
        show={show}
        setShow={setShow}
        setTitle={setTitle}
        setAuthor={setAuthor}
      />
      <Container style={{ marginTop: "25px" }}>
        <Row>
          <Col>
            <h2>Liste des livres</h2>
          </Col>
          <Col>
            {/* <Button variant="success" size="lg" block>
              Ajouter un livre
            </Button> */}
            {/* <BookModal /> */}
            <Button variant="primary" onClick={handleShow}>
              Ajouter un livre
            </Button>
          </Col>
        </Row>
        <h2>Application de gestions de livres</h2>
        <BookTable livres={livres} />
      </Container>
    </div>
  );
}

export default App;
