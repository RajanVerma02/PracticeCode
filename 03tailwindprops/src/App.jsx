import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import image from './assets/images.jpg'
import heroImage from './assets/hero.png'
import Card from './Components/Card'
import './App.css'

 function App() {

  console.log("Image URL in App.jsx: ", image);
  return (
    <>
    <h1>Welcome to Vite + React! || Tailwind Props</h1>
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-4">
    <Card title="1st Card Title"
      description="This is a description of the card. It provides more details about the content of the card."
      image={image}
    />
    <Card title="2nd Card Title"
      description="This is a description of the card. It provides more details about the content of the card."
      image={heroImage}
    />
    <Card title="3nd Card Title"
      description="This is a description of the card. It provides more details about the content of the card."
      image={heroImage}
    />
    <Card title="4nd Card Title"
      description="This is a description of the card. It provides more details about the content of the card."
      image={heroImage}
    />
    </div>
    
    </>
  );
}


export default App
