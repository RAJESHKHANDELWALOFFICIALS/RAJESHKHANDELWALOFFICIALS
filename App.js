import React from 'react';
import ChatGPT from './components/ChatGPT';
import ImageGenerator from './components/ImageGenerator';
import VoiceInput from './components/VoiceInput';

function App() {
  return (
    <div>
      <h1>AI Web App Dashboard</h1>
      <ChatGPT />
      <ImageGenerator />
      <VoiceInput />
    </div>
  );
}

export default App;
