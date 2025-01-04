import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: 'user', text: input }]);
    setLoading(true);
    setInput('');

    try {
      const response = await fetch('/api/langflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputValue: input }),
      });

      const data = await response.json();
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: data.message }]);
    } catch (error) {
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: 'Error: Unable to fetch response' }]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        disabled={loading}
      />
      <button onClick={sendMessage} disabled={loading}>
        Send
      </button>
    </div>
  );
};

export default Chatbot;
