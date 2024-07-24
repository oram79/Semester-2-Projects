import React from 'react';

function BreedSelector({ breeds, selectedBreed, onBreedChange, imageCount, onImageCountChange, onSubmit }) {
  return (
    <form className="breed-selector-form" onSubmit={onSubmit}>
      <select className="breed-selector-select" value={selectedBreed} onChange={onBreedChange}>
        <option value="dogselect">Select A Dog</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="imageCount">Image Count:</label>
      <br />
      <input
      
      
        className="breed-selector-input"
        type="number"
        id="imageCount"
        value={imageCount}
        onChange={onImageCountChange}
        min="1"
        max="100"
      />
      <br />
      <button className="breed-selector-button" type="submit">Fetch Images</button>
    </form>
  );
}

export default BreedSelector;



