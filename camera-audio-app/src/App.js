import React from 'react';
import './App.css';
import CameraFeed from './components/CameraFeed';
import AudioRecorder from './components/AudioRecorder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>See For Me</h1>
      </header>
      <main>
        <CameraFeed />
        <AudioRecorder />
      </main>
    </div>
  );
}

export default App;