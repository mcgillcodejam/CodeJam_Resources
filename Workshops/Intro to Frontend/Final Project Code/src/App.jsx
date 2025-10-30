import { Suspense, useState } from 'react'
import './App.css'
import DogSelector from './components/DogSelector';
import DogViewer from './components/DogViewer';

async function loadDogBreeds() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();
  return Object.keys(data.message);
}

async function loadDogImage(breed) {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
  const data = await res.json();
  return data.message;
}

async function loadDogFact() {
  const res = await fetch('https://dogapi.dog/api/v2/facts');
  const data = await res.json();
  return data.data[0].attributes.body;
}

function App() {

  const [ breed, setBreed ] = useState(null);

  let dogImagePromise;
  let dogFactPromise;
  if (breed) {
    dogImagePromise = loadDogImage(breed);
    dogFactPromise = loadDogFact();
  }

  let dogBreedsPromise = loadDogBreeds();

  return (
    <>
      <h1>Dog Pics</h1>

      {
        breed ? (
          <Suspense fallback={<p>Loading dog image...</p>}>
            <DogViewer 
              breed={breed} 
              dogImagePromise={dogImagePromise}
              dogFactPromise={dogFactPromise}
              goBack={() => setBreed(null)}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<p>Loading dog breeds...</p>}>
            <DogSelector 
              dogBreedsPromise={dogBreedsPromise}
              selectBreed={breed => setBreed(breed)}
             />
          </Suspense>
        )
      }

    </>
  )
}

export default App
