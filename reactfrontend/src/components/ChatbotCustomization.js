import React, { useState } from 'react';
import axios from 'axios'; // axios library for making HTTP requests.
import Chatbot from './Chatbot';
import './ChatbotCustomization.css';

// settings: Contains various customization settings for the chatbot (colors, images, icons).
const ChatbotCustomization = (props) => {
  const [settings, setSettings] = useState({
    mainColor: '#6fd6ed',
    sendMessageColor: '#6fd6ed',
    receivedMessageColor: '#ffffff',
    backgroundColor: '#ffffff',
    sendMessageButtonColor: '#ffffff',
    launcherIcon: null,
    assistantImage: null,
    assistantAvatar: null,
    sendIcon: null,
  });

  const [chatSetting, setChatSetting] = useState({
    botReplyColor: '#6fd6ed',
    userMessageColor: '#6fd6ed',
    botReplyTextColor: '#ffffff',
    userMessageTextColor: '#ffffff',
    mainColor: '#6fd6ed',
    sendButtonColor: '#6fd6ed',
  });

  const [showChatbot, setShowChatbot] = useState(false);

  // handleChange function dynamically updates the state based on user input.
  const handleChange = (e, settingName) => {
    let tempUpdate = {...chatSetting}
    if(settingName === 'botReplyColor'){
      tempUpdate.botReplyColor=e.target.value;
    } else if(settingName === 'userMessageColor') {
      tempUpdate.userMessageColor=e.target.value;
    } else if(settingName === 'botReplyTextColor'){
      tempUpdate.botReplyTextColor=e.target.value;
    } else if(settingName === 'userMessageTextColor'){
      tempUpdate.userMessageTextColor=e.target.value;
    } else if(settingName === 'mainColor'){
      tempUpdate.mainColor=e.target.value;
    } else if(settingName === 'sendButtonColor'){
      tempUpdate.sendButtonColor=e.target.value;
    }
    setChatSetting(tempUpdate)
  };

  // saveCustomizations calls a prop function setCustomization with the current chatSetting state to save the customizations.
  const saveCustomizations = () =>{
    props.setCustomization(chatSetting)
  }

  const saveSettings = () => {
    const formData = new FormData(); // FormData object is created to hold the key-value pairs of the settings
    for (let key in settings) {
      formData.append(key, settings[key]);
    }

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
          <input type="color" name="mainColor" value={settings.mainColor} onChange={(e) => handleChange(e, 'mainColor')} />
        </div> 
      <div className="customization-option">
        <label>ChatBot Message Color</label>
        <input type="color" name="mainColor" value={chatSetting.botReplyColor} onChange={(e)=>handleChange(e,'botReplyColor')} />
      </div>
      <div className="customization-option">
        <label>User Message Color</label>
        <input type="color" name="sendMessageColor" value={chatSetting.userMessageColor} onChange={(e)=>handleChange(e, 'userMessageColor')} />
      </div>
      <div className="customization-option">
        <label>ChatBot Text Color</label>
        <input type="color" name="receivedMessageColor" value={chatSetting.botReplyTextColor} onChange={(e)=>handleChange(e, 'botReplyTextColor')} />
      </div>
      <div className="customization-option">
        <label>User Text Color</label>
        <input type="color" name="backgroundColor" value={chatSetting.userMessageTextColor} onChange={(e)=>handleChange(e, 'userMessageTextColor')} />
      </div>
      <div className="customization-option">
        <label>Send Message Button Color</label>
        <input type="color" name="sendButtonColor" value={settings.sendButtonColor} onChange={(e) => handleChange(e, 'sendButtonColor')} />
      </div>
      
      <button className="save-button" onClick={()=>{saveCustomizations()}}>Save Settings</button>
    </div>
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








/**
 * <div className="customization-option">
        <label>Launcher Icon</label>
        <input type="file" name="launcherIcon" onChange={()=>handleChange()} />
      </div>
      <div className="customization-option">
        <label>Assistant Image</label>
        <input type="file" name="assistantImage" onChange={()=>handleChange()} />
      </div>
      <div className="customization-option">
        <label>Assistant Avatar</label>
        <input type="file" name="assistantAvatar" onChange={()=>handleChange()} />
      </div>
      <div className="customization-option">
        <label>Send Icon</label>
        <input type="file" name="sendIcon" onChange={()=>handleChange()} />
      </div> 
 */