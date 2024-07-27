import React, { useState } from 'react';
import axios from 'axios';
import Chatbot from './Chatbot';
import './ChatbotCustomization.css';

/**
 *  1) useState is used to add state to functional components.It takes the initial state as an argument and
 *  returns an array with the current state and a function to update it.
    2) useEffect is used to perform side effects in functional components.It takes a function as an 
    argument that contains the side-effect logic.
    When we hit an API, we need both to store and manage the dynamic data on web page
    Together, these hooks enable functional components to have state and side effects, making them powerful and capable of managing complex behaviors in a React application.
 */

const ChatbotCustomization = () => {
  const [settings, setSettings] = useState({
    mainColor: '#6fd6ed',
    sendMessageColor: '#6fd6ed',
    receivedMessageColor: '#ffffff',
    backgroundColor: '#ffffff',
    sendMessageTextColor: '#ffffff',
    receivedMessageTextColor: '#4b5563',
    launcherIcon: null,
    assistantImage: null,
    assistantAvatar: null,
    sendIcon: null,
  });


  /**
   *  showChatbot - current state value.
   * setShowChatbot - a function that you can use to update the state.
   */
  const [showChatbot, setShowChatbot] = useState(false);


  /**
   * handleChange updates the settings state when the user changes an input value. It handles both text
   * inputs and file uploads.
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setSettings({ ...settings, [name]: files[0] });
    } else {
      setSettings({ ...settings, [name]: value });
    }
  };


  /**
   * saveSettings converts the settings state into a FormData object and sends it to a backend server
   * via an axios POST request. If the request is successful, it alerts the user and displays the chatbot.
   */
  const saveSettings = () => {
    const formData = new FormData(); // FormData object is created to hold the key-value pairs of the settings
    for (let key in settings) {
      formData.append(key, settings[key]);
    }

    // axios.post method sends a POST request to the specified URL 
    axios.post('http://localhost:8000/api/message/', formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  })
  .then(response => {
      alert('Settings saved successfully');
      setShowChatbot(true); // Show chatbot after saving settings
  })
  .catch(error => {
      console.error('There was an error saving the settings!', error);
      alert('Failed to save settings. Please try again.');
  });
};

return (
  <div className="customization-container">
    <h5 className="appearance-title">Appearance</h5>
    <h4 className="customize-subtitle">Customize the look and feel of your chat widget</h4>
    <div className="customization-form">
      <div className="customization-option">
        <label>Main Color</label>
        <input type="color" name="mainColor" value={settings.mainColor} onChange={handleChange} />
      </div>
      <div className="customization-option">
        <label>Send Message Color</label>
        <input type="color" name="sendMessageColor" value={settings.sendMessageColor} onChange={handleChange} />
      </div>
      <div className="customization-option">
        <label>Received Message Color</label>
        <input type="color" name="receivedMessageColor" value={settings.receivedMessageColor} onChange={handleChange} />
      </div>
      <div className="customization-option">
        <label>Background Color</label>
        <input type="color" name="backgroundColor" value={settings.backgroundColor} onChange={handleChange} />
      </div>
      <div className="customization-option">
        <label>Send Message Text Color</label>
        <input type="color" name="sendMessageTextColor" value={settings.sendMessageTextColor} onChange={handleChange} />
      </div>
      <div className="customization-option">
        <label>Received Message Text Color</label>
        <input type="color" name="receivedMessageTextColor" value={settings.receivedMessageTextColor} onChange={handleChange} />
      </div>
      <div className="customization-option">
        <label>Launcher Icon</label>
        <input type="file" name="launcherIcon" onChange={handleChange} />
      </div>
      <div className="customization-option">
        <label>Assistant Image</label>
        <input type="file" name="assistantImage" onChange={handleChange} />
      </div>
      <div className="customization-option">
        <label>Assistant Avatar</label>
        <input type="file" name="assistantAvatar" onChange={handleChange} />
      </div>
      <div className="customization-option">
        <label>Send Icon</label>
        <input type="file" name="sendIcon" onChange={handleChange} />
      </div>
      <button className="save-button" onClick={saveSettings}>Save Settings</button>
    </div>
    {showChatbot && <Chatbot settings={settings} />}
  </div>
);
};
export default ChatbotCustomization;





















// import React, { useState } from 'react';
// import axios from 'axios';
// import Chatbot from './Chatbot'; // Assuming Chatbot is in the same directory
// import './ChatbotCustomization.css';

// const ChatbotCustomization = () => {
//   const [settings, setSettings] = useState({
//     mainColor: '#6fd6ed',
//     sendMessageColor: '#6fd6ed',
//     receivedMessageColor: '#ffffff',
//     backgroundColor: '#ffffff',
//     sendMessageTextColor: '#ffffff',
//     receivedMessageTextColor: '#4b5563',
//     launcherIcon: null,
//     assistantImage: null,
//     assistantAvatar: null,
//     sendIcon: null,
//   });

//   const [showChatbot, setShowChatbot] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setSettings({ ...settings, [name]: files[0] });
//     } else {
//       setSettings({ ...settings, [name]: value });
//     }
//   };

//   const saveSettings = () => {
//     const formData = new FormData();
//     for (let key in settings) {
//       formData.append(key, settings[key]);
//     }

//     axios.post('http://localhost:8000/api/message/', formData, {
//       headers: {
//           'Content-Type': 'multipart/form-data'
//       }
//   })
//   .then(response => {
//       alert('Settings saved successfully');
//       setShowChatbot(true); // Show chatbot after saving settings
//   })
//   .catch(error => {
//       console.error('There was an error saving the settings!', error);
//       alert('Failed to save settings. Please try again.');
//   });
// };

//   return (
//     <div className="customization-container">
//       <h2>Customize the look and feel of your chat widget</h2>
//       <div className="customization-option">
//         <label>Main Color</label>
//         <input type="color" name="mainColor" value={settings.mainColor} onChange={handleChange} />
//       </div>
//       <div className="customization-option">
//         <label>Send Message Color</label>
//         <input type="color" name="sendMessageColor" value={settings.sendMessageColor} onChange={handleChange} />
//       </div>
//       <div className="customization-option">
//         <label>Received Message Color</label>
//         <input type="color" name="receivedMessageColor" value={settings.receivedMessageColor} onChange={handleChange} />
//       </div>
//       <div className="customization-option">
//         <label>Background Color</label>
//         <input type="color" name="backgroundColor" value={settings.backgroundColor} onChange={handleChange} />
//       </div>
//       <div className="customization-option">
//         <label>Send Message Text Color</label>
//         <input type="color" name="sendMessageTextColor" value={settings.sendMessageTextColor} onChange={handleChange} />
//       </div>
//       <div className="customization-option">
//         <label>Received Message Text Color</label>
//         <input type="color" name="receivedMessageTextColor" value={settings.receivedMessageTextColor} onChange={handleChange} />
//       </div>
//       <div className="customization-option">
//         <label>Launcher Icon</label>
//         <input type="file" name="launcherIcon" onChange={handleChange} />
//       </div>
//       <div className="customization-option">
//         <label>Assistant Image</label>
//         <input type="file" name="assistantImage" onChange={handleChange} />
//       </div>
//       <div className="customization-option">
//         <label>Assistant Avatar</label>
//         <input type="file" name="assistantAvatar" onChange={handleChange} />
//       </div>
//       <div className="customization-option">
//         <label>Send Icon</label>
//         <input type="file" name="sendIcon" onChange={handleChange} />
//       </div>
//       <button onClick={saveSettings}>Save Settings</button>
//       {showChatbot && <Chatbot settings={settings} />}
//     </div>
//   );
// };

// export default ChatbotCustomization;