import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useRef, useEffect } from 'react';
import './ProjectCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Projectcard() {
  const images = [
    "https://w.wallhaven.cc/full/je/wallhaven-je52qq.png",
    "https://w.wallhaven.cc/full/md/wallhaven-mdw871.jpg",
    // "https://w.wallhaven.cc/full/6l/wallhaven-6lkrow.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const slideshowInterval = useRef(null);
  const scrollTimeout = useRef(null);

  const isTouchDevice = () =>
    'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Switch to next image
  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  // Switch to previous image
  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  // Mobile swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) nextImage();
    else if (distance < -minSwipeDistance) prevImage();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Desktop mouse scroll handling — only horizontal
  const handleWheel = (e) => {
    if (scrollTimeout.current) return;

    // Only trigger if horizontal movement dominates
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) nextImage();
      else if (e.deltaX < 0) prevImage();

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 500);
    }
  };

  // Slideshow control
  const startSlideshow = () => {
    if (!slideshowInterval.current) {
      slideshowInterval.current = setInterval(nextImage, 2000);
    }
  };

  const stopSlideshow = () => {
    clearInterval(slideshowInterval.current);
    slideshowInterval.current = null;
  };

  // Auto slideshow rules
  useEffect(() => {
    if (isTouchDevice()) {
      startSlideshow(); // Always on for mobile
    } else {
      if (isHovered) startSlideshow();
      else stopSlideshow();
    }
    return stopSlideshow;
  }, [isHovered]);

  return (
    <Card.Link href="#">
      <Card
        style={{ width: '18rem' }}
        className="Project-card shadow-sm"
        onWheel={handleWheel}
        onMouseEnter={() => !isTouchDevice() && setIsHovered(true)}
        onMouseLeave={() => !isTouchDevice() && setIsHovered(false)}
      >
        {/* Image container */}
        <div
          className="image-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentImage]}
            className={`fade-image ${fade ? 'fade-in' : 'fade-out'}`}
            alt="Project"
          />
        </div>

        {/* Bars below the image */}
        <div className="bar-indicators">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`bar ${idx === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(idx)}
            ></div>
          ))}
        </div>

        <Card.Body>
          <Card.Title>AI-Powered Study Assistant</Card.Title>
          <Card.Text>
            A smart, adaptive learning tool designed to help students prepare
            for exams by generating personalized quizzes, summarizing notes, and
            tracking progress.
          </Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Real-time feedback on quiz performance
          </ListGroup.Item>
          <ListGroup.Item>
            AI-generated summaries of study material
          </ListGroup.Item>
          <ListGroup.Item>
            Progress tracking with visual analytics
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Card.Link>
  );
}

export default Projectcard;
