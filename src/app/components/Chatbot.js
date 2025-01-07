import { useState } from 'react';
import './scrollbar.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const formatResponse = (text) => {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/(\d+)\.\s/g, '<ol><li>').replace(/<\/li>(?=\s*\d+\.)/g, '</li>') + '</li></ol>';
    text = text.replace(/-\s/g, '<ul><li>').replace(/<\/li>(?=\s*-)/g, '</li>') + '</li></ul>';
    text = text.replace(/\n/g, '<br>');
    return text;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setLoading(true);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputValue: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: 'bot', text: formatResponse(data.message) }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error: Unable to fetch response' }]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-transparent max-w-4xl mx-auto mt-5  rounded-lg p-4 font-sans overflow-hidden">
      <div className=''>
        <div className="max-h-96 overflow-y-scroll mb-4 p-2 rounded-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-xl text-sm max-w-[80%] break-words ${
                  msg.sender === 'user' ? 'bg-green-200 text-gray-800' : 'bg-gray-200 text-gray-800'
                }`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            disabled={loading}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-100"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
              loading ? 'cursor-not-allowed bg-blue-300' : 'hover:bg-blue-600'
            }`}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
