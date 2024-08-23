// src/components/Chat.js
import React, { useState } from 'react';

function Chat({ questions, interviewId }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    const currentQuestion = questions[currentQuestionIndex];
    const updatedResponses = { ...responses, [currentQuestion]: message };
    setResponses(updatedResponses);
    setMessage('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      await sendInterviewResponses(updatedResponses);
    }
  };

  const sendInterviewResponses = async (responses) => {
    const response = await fetch('http://127.0.0.1:8000/save-response', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ interview_id: interviewId, responses })
    });

    if (response.ok) {
      alert('Interview responses saved successfully.');
    } else {
      alert('Failed to save responses. Please try again.');
    }
  };

  return (
    <div className='mt-52'>
      <h2>Interview</h2>
      <div id="chat-window">
        {questions.slice(0, currentQuestionIndex + 1).map((question, index) => (
          <div key={index}>
            <div className="mt-10 mx-14 message-box">{question}</div>
            {index < currentQuestionIndex && <div className="message-box my-text">Answer:{responses[question]}</div>}
          </div>
        ))}
      </div>
      {currentQuestionIndex < questions.length && (
        <div>
          <input
            placeholder='Your Answer...'
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && handleSendMessage()}
            className="mt-3 text-black mx-16"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
      {currentQuestionIndex >= questions.length && (
        <button onClick={() => sendInterviewResponses(responses)}>End Interview</button>
      )}
    </div>
  );
}

export default Chat;
