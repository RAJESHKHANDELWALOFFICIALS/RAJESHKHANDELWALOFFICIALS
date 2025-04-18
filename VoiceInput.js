import React, { useState } from 'react';

function VoiceInput() {
  const [text, setText] = useState('');

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };
  };

  return (
    <div>
      <h2>Voice Assistant</h2>
      <button onClick={startListening}>Start Speaking</button>
      <p><strong>You said:</strong> {text}</p>
    </div>
  );
}

export default VoiceInput;
