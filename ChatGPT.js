import React, { useState } from 'react';

function ChatGPT() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
      }),
    });

    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || 'No response');
  };

  return (
    <div>
      <h2>ChatGPT Assistant</h2>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
      <br />
      <button onClick={sendMessage}>Send</button>
      <p><strong>Response:</strong> {response}</p>
    </div>
  );
}

export default ChatGPT;
