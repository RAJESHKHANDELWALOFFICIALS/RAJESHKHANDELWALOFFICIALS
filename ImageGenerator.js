import React, { useState } from 'react';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = async () => {
    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt,
        n: 1,
        size: '512x512',
      }),
    });

    const data = await res.json();
    setImageUrl(data.data?.[0]?.url || '');
  };

  return (
    <div>
      <h2>AI Image Generator</h2>
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Describe image..." />
      <button onClick={generateImage}>Generate</button>
      {imageUrl && <img src={imageUrl} alt="AI generated" />}
    </div>
  );
}

export default ImageGenerator;
