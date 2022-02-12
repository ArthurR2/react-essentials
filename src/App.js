import React, { useState } from 'react';
import './App.css';

function SecretComponent(){
  return <h1>Secret information for authorized users only</h1>;
}

function RegularComponent(){
  return <h1>Everyone can see this components.</h1>;
}

function App() {
    const [emotion, setEmotion] = useState("Happy");
    console.log(emotion);
    return (
      <>
        <h1>Current emotion is {emotion}.</h1>
        <button onClick={() => setEmotion("frustrated")}>
        Frustrated
        </button>
      </>
    );
  
}

export default App;
