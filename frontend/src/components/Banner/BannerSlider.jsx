import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import './BannerSlider.css';

const BannerSlider = () => {
  const images = [
    "https://w.wallhaven.cc/full/6k/wallhaven-6kww77.png",
    "https://w.wallhaven.cc/full/6k/wallhaven-6kerwl.jpg",
    "https://w.wallhaven.cc/full/96/wallhaven-96klrw.jpg",
    "https://w.wallhaven.cc/full/xl/wallhaven-xljxrd.jpg",
    "https://w.wallhaven.cc/full/9d/wallhaven-9drjwk.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Card 
      className="text-white banner-card"
      style={{
        border: "none",
        height: "500px",
        position: "relative",
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="banner-overlay"></div>

      {/* Banner Content */}
      <Card.Body className="banner-body">
        <Card.Title className="banner-title">
          Your World, Reimagined
        </Card.Title>
        <Card.Text className="banner-description">
          NovaSphere is an AI-powered platform designed to help businesses, creators, and communities visualize, plan, and manage their ideas in a fully interactive digital environment. From real-time collaboration tools to intelligent analytics, NovaSphere transforms the way people connect, create, and grow together. With its sleek interface, cloud-based architecture, and smart automation, NovaSphere ensures that every project, big or small, is built on innovation, efficiency, and creativity.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BannerSlider;
