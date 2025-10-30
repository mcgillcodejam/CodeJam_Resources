import { use, useState } from 'react';

export default function DogSelector({ dogBreedsPromise, selectBreed }) {

  const dogBreeds = use(dogBreedsPromise);

  const [ selectedBreed, setSelectedBreed ] = useState(dogBreeds[0]);

  console.log(dogBreeds);


  return (
    <div>
      <label>
        Select a breed:
        <select className="dog-dropdown" value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          {dogBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>

      <button className="dog-select-button" onClick={() => selectBreed(selectedBreed)}>Select Breed</button>
    </div>
  );

}