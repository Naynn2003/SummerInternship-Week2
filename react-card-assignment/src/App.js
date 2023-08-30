import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CovidTable from "./CovidTable";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        {/* Example card */}
        <Col md={8}>
          <CovidTable />
        </Col>

        {/* Add more cards here */}
      </Row>
    </Container>
  );
}

export default App;
