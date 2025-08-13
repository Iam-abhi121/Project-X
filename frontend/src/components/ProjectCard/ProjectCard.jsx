import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect } from 'react';
import './ProjectCard.css';

function Projectcard() {
  const images = [
    "https://w.wallhaven.cc/full/je/wallhaven-je52qq.png",
    "https://w.wallhaven.cc/full/md/wallhaven-mdw871.jpg",
    "https://w.wallhaven.cc/full/6l/wallhaven-6lkrow.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrentImage(prev => (prev + 1) % images.length);
        setFade(true); // fade-in new image
      }, 1000); // match CSS transition duration
    }, 4000); // total duration per image
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Card.Link href="#">
      <Card style={{ width: '18rem' }} className="Project-card shadow-sm">
        <div className="image-container">
          <img
            src={images[currentImage]}
            className={`fade-image ${fade ? 'fade-in' : 'fade-out'}`}
            alt="Project"
          />
        </div>
        <Card.Body>
          <Card.Title>AI-Powered Study Assistant</Card.Title>
          <Card.Text>
            A smart, adaptive learning tool designed to help students prepare for exams by 
            generating personalized quizzes, summarizing notes, and tracking progress.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Real-time feedback on quiz performance</ListGroup.Item>
          <ListGroup.Item>AI-generated summaries of study material</ListGroup.Item>
          <ListGroup.Item>Progress tracking with visual analytics</ListGroup.Item>
        </ListGroup>
      </Card>
    </Card.Link>
  );
}

export default Projectcard;
