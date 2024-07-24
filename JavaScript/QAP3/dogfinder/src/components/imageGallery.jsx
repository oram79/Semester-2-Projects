import React from 'react';

function ImageGallery({ images }) {
  return (
    <div className='dogbox'>
      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <div key={index} className="gallery-item">
            <img src={imageUrl} alt={`Dog ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
