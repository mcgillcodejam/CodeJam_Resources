import { use } from 'react';

export default function DogViewer({ breed, dogImagePromise, dogFactPromise, goBack }) {

  const imageUrl = use(dogImagePromise);

  const dogFact = use(dogFactPromise);

  return (
    <div>
      <h2>Selected Breed: {breed}</h2>
      <img className="dog-pic" src={imageUrl} alt={breed} />
      <p>Fun fact: {dogFact}</p>
      <button className="back-button" onClick={goBack}>Select Another Breed</button>
    </div>
  );
}