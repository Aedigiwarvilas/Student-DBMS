import "./App.css";
import Header from "./components/Header";
import Students from "./components/Students";
import StudentAddForm from "./components/StudentAddForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row className="m-4 p-4">
          <Col sm={10}>
            <h4>
              Welcome to the Student Portal.One portal to view All Existing
              Students , Adding New Students , Updating Existing Students and
              Deleting Existing Students.
            </h4>
          </Col>
          <Col sm={2}>
            <StudentAddForm />
          </Col>
        </Row>
        <Row className="">
          <Col>
            <Students />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
