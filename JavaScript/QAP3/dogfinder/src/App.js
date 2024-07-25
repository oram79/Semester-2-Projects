import React, { useState, useEffect } from 'react';
import BreedSelector from './components/breedSelector.jsx';
import ImageGallery from './components/imageGallery';
import { FaFacebook } from "react-icons/fa";

function App() {
  const [breeds, setBreeds] = useState([]); 
  const [selectedBreed, setSelectedBreed] = useState(''); 
  const [imageCount, setImageCount] = useState(1); 
  const [fetchedImages, setFetchedImages] = useState([]); 

  // Fetch all breeds from the API
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
      alert('You must select a breed & choose the number of images');
    }
  };

  return (
      
        <div className="mainbox">
          <div className='header'>
            <h1>Dog Image Gallery</h1>
          </div>
          <BreedSelector
            breeds={breeds}
            selectedBreed={selectedBreed}
            onBreedChange={handleBreedChange}
            imageCount={imageCount}
            onImageCountChange={handleImageCountChange}
            onSubmit={handleSubmit}
          />
          {fetchedImages.length > 0 && <ImageGallery images={fetchedImages} />}

          <h3> Want to donate to help shelter dogs??</h3>
          <h3>Donate Here!!</h3>
          <div>
          <a href="https://www.beaglepaws.com/" target="" rel="noopener noreferrer"></a>
          </div>

          <div className='footer'>
           <h2>Logan's Dog Finder &copy; Since 2024</h2>
          </div>
        </div>

      
  );
}

export default App;



