import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatbotCustomization from './components/ChatbotCustomization';
import Chatbot from './components/Chatbot';

const App = () => {
    const [customization, setCustomization] = useState({});

    // message to store chat messages.
    const [message, setMessage] = useState([]);

    // useEffect runs a function after the component has rendered.
    useEffect(() => {

        // fetching chat messages from an API.
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/message/');
                console.log(response.data);
                setMessage(response.data);
                setCustomization(response.data.customization || {});
            } catch (error) {
                console.error(error);
            }
        };

        fetchMessages();
    }, []);

    const setCustomizationHandler=(submittedParam)=>{
        setCustomization(submittedParam)
    }

    return (
        <div>
           <h1 style={{ 
                marginLeft: '30px', 
                textAlign: 'center', 
                width: 'calc(100% - 30px)', 
                alignItems: 'self-start'
            }}>Chatbot Customization</h1>
            <ChatbotCustomization customization={customization} setCustomization={(e)=>setCustomizationHandler(e)} />
            <div>
                <Chatbot messages={message} settings={customization} />
            </div>
        </div>
    );
};

export default App;
















/**
 * The App component is the main container that handles data fetching, state management, and rendering 
 * of both the customization interface and the chatbot itself. The goal is to allow users to see and 
 * interact with the chatbot while also providing a way to customize its appearance and behavior.
 */





















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