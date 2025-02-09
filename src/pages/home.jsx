import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';

// Create an array to store the links and grades
const links = [
  { grade: 'Grade 1', url: 'https://www.typing.com/student/game/keyboard-jump', image: '/jellyfish.png' },
  { grade: 'Grade 2', url: 'https://www.typing.com/student/game/keyboard-jump', image: '/fish.png' },
  { grade: 'Grade 3', url: 'https://www.typing.com/student/game/keyboard-jump', image: '/dolphin.png' },
  { grade: 'Grade 4', url: 'https://quizizz.com/join?gc=761827', image: '/dinosaur-egg.png' },
  { grade: 'Grade 5', url: 'https://www.typingclub.com/', image: '/orca-whale.png' },
  { grade: 'Grade 6', url: 'https://wordwall.net/resource/81799031', image: '/shark.png' },
];

const Home = () => {
  // Function to extract domain name using regex
  const extractDomain = (url) => {
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/; // Regex to extract the domain
    const match = url.match(regex);
    return match ? match[1] : 'No domain found';
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="text-white text-5xl font-bold mb-6">Welcome to ICT Class Ms.Dianocan</h1>
        
        <Container>
          <Row className="justify-content-center">
            {links.map((link, index) => (
              <Col xs={12} md={4} className="mb-4" key={index}>
                <Card className="text-center shadow-sm">
                  <Card.Img style={{ maxHeight: '150px'}} variant="top" src={`${process.env.PUBLIC_URL}/icon/${link.image}`} alt={link.grade} />
                  <Card.Body>
                    <Card.Title className="text-primary">{link.grade}</Card.Title>
                    <Card.Text>Visit {extractDomain(link.url)} website</Card.Text>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Go to {extractDomain(link.url)}
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