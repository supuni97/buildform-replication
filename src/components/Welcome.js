import React, { useState } from 'react';
import './Welcome.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';

const Welcome = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [title, setTitle] = useState('Welcome to our form');
  const [description, setDescription] = useState('This is description of the form');
  const [image, setImage] = useState(null);
  const [btntext, setBtntext] = useState('Start');

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const triggerFileUpload = (e) =>{
    document.getElementById('fileInput').click();
  }

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
            <button className='close-btn' onClick={() => setActiveTab(null)}>
            <CloseIcon />
            </button>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
            <label>Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              
            />
             <label>Button Text</label>
            <input
              value={btntext}
              onChange={(e) => setBtntext(e.target.value)}
             
            />
             
            <button onClick={triggerFileUpload} className='custom-file-upload'>
            <FileUploadIcon className='upload-icon'
            />
            Upload
            </button>
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
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
       <div className='content-text'>
       <h1>{title}</h1>
        <p>{description}</p>
        <button>{btntext}</button>
       </div>
       {image && <img src={image} alt="Uploaded" />}
      </div>
    </div>
  );
};

export default Welcome;
