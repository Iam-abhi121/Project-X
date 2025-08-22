import Image from 'react-bootstrap/Image';
import './CoverPhoto.css';

function CoverPhoto() {
  return (
    <div className="cover-photo-container">
      <Image src="https://w.wallhaven.cc/full/ly/wallhaven-ly9qzq.jpg" fluid />
    </div>
  );
}

export default CoverPhoto;