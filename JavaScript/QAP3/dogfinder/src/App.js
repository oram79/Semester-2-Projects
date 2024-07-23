import React, { useState, useEffect } from 'react';
import BreedSelector from './components/breedSelector.jsx';
import ImageGallery from './components/imageGallery';

function App() {
  const [breeds, setBreeds] = useState([]); 
  const [selectedBreed, setSelectedBreed] = useState(''); 
  const [imageCount, setImageCount] = useState(1); 
  const [fetchedImages, setFetchedImages] = useState([]); 

  // Fetch all breeds on component mount
  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      setBreeds(Object.keys(data.message)); 
    };
    fetchBreeds();
  }, []);

  // controls the breed selection from the user
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  // controls how many images the users wants to see
  const handleImageCountChange = (event) => {
    setImageCount(parseInt(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedBreed && imageCount > 0 && imageCount <= 100) {
      const images = [];
      for (let i = 0; i < imageCount; i++) {
        const imageResponse = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`);
        const imageData = await imageResponse.json();
        images.push(imageData.message);
      }
      setFetchedImages(images);
    } else {
      alert('Please select a breed and enter a valid image count (1-100)');
    }
  };

  return (
      
        <div className="header">
          <h1>Dog Image Gallery</h1>
          <BreedSelector
            breeds={breeds}
            selectedBreed={selectedBreed}
            onBreedChange={handleBreedChange}
            imageCount={imageCount}
            onImageCountChange={handleImageCountChange}
            onSubmit={handleSubmit}
          />
          {fetchedImages.length > 0 && <ImageGallery images={fetchedImages} />}
        </div>
      
  );
}

export default App;



