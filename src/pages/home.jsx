import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';

// Create an array to store the links and grades
const links = [
  { grade: 'Grade 1', url: 'https://example.com/grade1' },
  { grade: 'Grade 2', url: 'https://example.com/grade2' },
  { grade: 'Grade 3', url: 'https://example.com/grade3' },
  { grade: 'Grade 4', url: 'https://typer.io/lobby/AyF4un' },
  { grade: 'Grade 5', url: 'https://example.com/grade5' },
  { grade: 'Grade 6', url: 'https://example.com/grade6' },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="text-white text-5xl font-bold mb-6">Welcome to ICT Class Ms.Dianocan</h1>
        
        <Container>
          <Row className="justify-content-center">
            {links.map((link, index) => (
              <Col xs={12} md={4} className="mb-4" key={index}>
                <Card className="text-center shadow-sm">
                  <Card.Img variant="top" src="/background-home.webp" alt={link.grade} />
                  <Card.Body>
                    <Card.Title className="text-primary">{link.grade}</Card.Title>
                    <Card.Text>Visit {link.grade} website</Card.Text>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Go to {link.grade}
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
