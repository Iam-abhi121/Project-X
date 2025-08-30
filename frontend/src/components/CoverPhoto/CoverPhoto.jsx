import Image from 'react-bootstrap/Image';
import './CoverPhoto.css';

function CoverPhoto() {
  return (
    <div className="cover-photo-container">
      <Image src="https://w.wallhaven.cc/full/x1/wallhaven-x1wd7o.jpg" fluid />
    </div>
  );
}

export default CoverPhoto;