import React, { useState } from 'react';
import './Welcome.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import SquareIcon from '@mui/icons-material/Square';

const Welcome = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [title, setTitle] = useState('Welcome to our form');
  const [description, setDescription] = useState('This is a description of the form');
  const [image, setImage] = useState(null);
  const [btntext, setBtntext] = useState('Start');
  const [layout, setLayout] = useState('left'); 
  const [email, setEmail] = useState('Enter your email');
  const [contact, setContact] = useState('This will be used to contact you for next steps.');


  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const triggerFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleRemoveImage = () => {
    setImage(null);
    document.getElementById('fileInput').value = null; 
  };

  const handleLayoutLeft = () => {
    setLayout('left');
  };

  const handleLayoutRight = () => {
    setLayout('right');
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
              <FileUploadIcon className='upload-icon' />
              Upload
            </button>
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            {image && <img src={image} alt="Uploaded"  className="modal-image" />}
            {image && (
              <div>
                <button onClick={handleRemoveImage} className='remove-image-btn'>Remove Image</button>
                <label>Placement</label>
                <button onClick={handleLayoutLeft} className='layout-button'>
                  <AlignHorizontalLeftIcon className='layout-icon' />
                  <SquareIcon className='layout-icon'/>
                </button>
                <button onClick={handleLayoutRight} className='layout-button'>
                  <SquareIcon className='layout-icon'/>
                  <AlignHorizontalLeftIcon className='layout-icon' />
                </button>
              </div>
            )}
          </div>
        )}
        {activeTab === 'email' && (
          <div className="email-field">
            <button className='close-btn' onClick={() => setActiveTab(null)}>
              <CloseIcon />
            </button>
            <label>Title</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Description</label>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        )}
      </div>
      {activeTab === 'welcome' && (
        <div className="display-content" style={{ flexDirection: layout === 'left' ? 'row' : 'column' }}>
          <div className='content-text'>
            <h1>{title}</h1>
            <p>{description}</p>
            <button>{btntext}</button>
          </div>
          {image && <img src={image} alt="Uploaded" />}
        </div>
      )}
      {activeTab === 'email' && (
        <div className="display-content2">
          <div className='content-text'>
            <h1>{email}</h1>
            <p>{contact}</p>
        
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
