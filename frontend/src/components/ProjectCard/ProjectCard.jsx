import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import './ProjectCard.css';

function Projectcard() {
  return (
    <Card.Link href="#">
    <Card style={{ width: '18rem' }} className="Project-card shadow-sm">
      <Card.Img variant="top" src="https://w.wallhaven.cc/full/6k/wallhaven-6kww77.png" />
      <Card.Body>
        <Card.Title>AI-Powered Study Assistan</Card.Title>
        <Card.Text>
          A smart, adaptive learning tool designed to help students prepare for exams by 
          generating personalized quizzes, summarizing notes, and tracking progress.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Real-time feedback on quiz performanc</ListGroup.Item>
        <ListGroup.Item>AI-generated summaries of study material</ListGroup.Item>
        <ListGroup.Item>Progress tracking with visual analytics</ListGroup.Item>
      </ListGroup>
      <Card.Body>
    
      </Card.Body>
    </Card>
    </Card.Link>
  );
}

export default Projectcard;