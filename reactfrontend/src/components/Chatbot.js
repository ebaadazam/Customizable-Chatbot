import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatbot.css';

const predefinedResponses = {
    'hello': 'Hi! How can I assist you?',
    'how are you': 'I am just a bot, but I am doing well. How can I assist you today?',
    'what is django': 'Django is a high-level Python web framework...',
    'what is reactjs': 'ReactJS is a JavaScript library for building user interfaces...',
    'what is python': 'Python is a high-level, interpreted programming language known for its readability and versatility.',
    'what is javascript': 'JavaScript is a versatile, high-level programming language commonly used to create interactive effects within web browsers.',
    'what is java spring boot': 'Java Spring Boot is an extension of the Spring framework that simplifies the development of new Spring applications. It helps developers create stand-alone, production-grade Spring-based applications that can be easily deployed with minimal configuration.',
    'memorly.ai': 'Memorly.AI offers scalable AI solutions that grow with your business. Whether you are a small startup or a large enterprise, Memorly provides the infrastructure to support your evolving needs. Benefit from robust performance and reliability, ensuring that your AI agents remain effective as your business expands.',
    'what is your purpose': 'My ultimate purpose is to assist people',
    'what is the tech stack of this project': 'The Tech Stack used in this project is Django Rest Framework and Reactjs'
};
const Chatbot = ({ messages, settings }) => {

    const [input, setInput] = useState('');

    const [chatMessages, setChatMessages] = useState(messages);

    useEffect(() => {
        setChatMessages(messages);
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userMessage = input;
        let botResponse = predefinedResponses[userMessage.toLowerCase()];

        if (botResponse) {
            setChatMessages([...chatMessages, { user_message: userMessage, bot_response: botResponse }]);
        } else {
            // Adding a temporary bot response
            setChatMessages(prevMessages => [...prevMessages, { user_message: userMessage, bot_response: '...' }]);
            try {
                // Making a POST request
                const response = await axios.post('http://127.0.0.1:8000/api/message/', { user_message: userMessage });
                botResponse = response.data.bot_response; // Ensure this matches your API response structure

                // Replaces the temporary response with the actual response from the API.
                setChatMessages(prevMessages => {
                    const newMessages = [...prevMessages];
                    newMessages[newMessages.length - 1].bot_response = botResponse;
                    return newMessages;
                });
            } catch (error) {
                console.error(error);
                setChatMessages(prevMessages => {
                    const newMessages = [...prevMessages];
                    newMessages[newMessages.length - 1].bot_response = "Sorry, I didn't get it!";
                    return newMessages;
                });
            }
        }
        setInput('');
    };

    return (
        <div className="chat-container">
            <h3>Blind Assistant Version 2</h3>
            <p>This is an AI assistant to help blind people navigate their surrounding environment</p>
            <div className="chat-box"
                style={{ backgroundColor: settings?.mainColor }}>
                {chatMessages.map((msg, index) => (
                    <div key={index} className="message-pair">
                        
                        <div className="message sent" style={{ backgroundColor: settings?.userMessageColor }}>
                            <p className="message-text" style={{ color: settings?.userMessageTextColor }}>
                                {msg.user_message}
                            </p>
                        </div>

                        <div className="message received" style={{ backgroundColor: settings?.botReplyColor }}>
                            <p className="message-text" style={{ color: settings?.botReplyTextColor }}>
                                {msg.bot_response}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <form className="chat-input" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit"
                style={{ backgroundColor: settings?.sendButtonColor }}
                >Send</button>
            </form>
        </div>
    );
};

export default Chatbot;

















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Chatbot.css'; // Ensure you have your styles here

// const Chatbot = ({ messages }) => {
//     const [input, setInput] = useState('');
//     const [chatMessages, setChatMessages] = useState(messages);

//     useEffect(() => {
//         setChatMessages(messages);
//     }, [messages]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const userMessage = input;

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/message/', {
//                 user_message: userMessage,
//             });
//             const botResponse = response.data.bot_response;
//             setChatMessages([...chatMessages, { user_message: userMessage, bot_response: botResponse }]);
//         } catch (error) {
//             console.error(error);
//             setChatMessages([...chatMessages, { user_message: userMessage, bot_response: "Sorry, I didn't get it!" }]);
//         }

//         setInput('');
//     };

//     return (
//         <div className="chat-container">
//             <h3>Blind Assistant Version 2</h3>
//             <p className=''>This is an AI assistant to help the blind person navigate in the surrounding environment</p>
//             <div className="chat-box">
//                 {chatMessages.map((msg, index) => (   // data to show from console to browser using map as this is an array
//                     <div key={index} className="message-pair">
//                         <div className="message sent">
//                             <p className="message-text">{msg.user_message}</p>
//                         </div>
//                         <div className="message received">
//                             <p className="message-text">{msg.bot_response}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <form className="chat-input" onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Type a message..."
//                 />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// };

// export default Chatbot;
