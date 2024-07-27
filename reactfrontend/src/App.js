// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ChatbotCustomization from './components/ChatbotCustomization';
// import Chatbot from './components/Chatbot';

// const App = () => {
//     const [customization, setCustomization] = useState({});
//     useEffect(async () => {
//         const messages = await axios.get('http://127.0.0.1:8000/api/message/')
//             .then(response => setCustomization(response.data))
//             .catch(error => console.error(error));
//     }, []);
//     return (
//         <div>
//             <h1 style={{ marginLeft: '80px' }}>Chatbot Customization</h1>    
//             <ChatbotCustomization customization={customization} setCustomization={setCustomization} />
//             <div>
//               <Chatbot/>
//             </div>
//         </div>
//     );
// };
// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatbotCustomization from './components/ChatbotCustomization';
import Chatbot from './components/Chatbot';

const App = () => {
    const [customization, setCustomization] = useState({});
    const [message, setMessage] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/message/');
                console.log(response.data);
                setMessage(response.data);
                setCustomization(response.data.customization || {}); // Assuming customization comes from the same response
            } catch (error) {
                console.error(error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h1 style={{ marginLeft: '80px' }}>Chatbot Customization</h1>
            <ChatbotCustomization customization={customization} setCustomization={setCustomization} />
            <div>
                <Chatbot messages={message} settings={customization} />
            </div>
        </div>
    );
};

export default App;
