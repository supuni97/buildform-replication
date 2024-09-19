import React, { useState } from 'react';
import './Welcome.css';

const Welcome = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [title, setTitle] = useState('Welcome to our form');
  const [description, setDescription] = useState('This is description of the form');
  const [image, setImage] = useState(null);
  const [btntext, setBtntext] = useState('Start');

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="welcome-container">
      <div className="modal">
        {activeTab === null && (
          <div className="button-group">
            <button onClick={() => setActiveTab('welcome')}>Welcome Screen</button>
            <button onClick={() => setActiveTab('email')}>Enter Your Email</button>
          </div>
        )}
        {activeTab === 'welcome' && (
          <div className="welcome-screen">
            <button onClick={() => setActiveTab(null)}>Back</button>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <label>Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
             <label>Button Text</label>
            <input
              value={btntext}
              onChange={(e) => setBtntext(e.target.value)}
              placeholder="Start"
            />
            <input type="file" onChange={handleImageUpload} />
          </div>
        )}
        {activeTab === 'email' && (
          <div className="email-field">
            <button onClick={() => setActiveTab(null)}>Back</button>
            <h1>Email Field</h1>
            {/* Add your EmailField component or similar code here */}
          </div>
        )}
      </div>
      <div className="display-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {image && <img src={image} alt="Uploaded" />}
        <button>{btntext}</button>
      </div>
    </div>
  );
};

export default Welcome;
