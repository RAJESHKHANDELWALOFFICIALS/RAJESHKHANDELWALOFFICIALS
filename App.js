import React from 'react';
import ChatGPT from './components/ChatGPT';
import ImageGenerator from './components/ImageGenerator';
import VoiceInput from './components/VoiceInput';
import Auth from './components/Auth';

function App() {
  return (
    <div>
      <h1>AI Web App Dashboard</h1>
      <Auth />
      <ChatGPT />
      <ImageGenerator />
      <VoiceInput />
    </div>
  );
}

export default App;
