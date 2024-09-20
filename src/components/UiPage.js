import React, { useState } from 'react';
import './UiPage.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import SquareIcon from '@mui/icons-material/Square';
import { TextField } from '@mui/material';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import DefaultImg from './Default.jpg'; 
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const UiPage = () => {
  const [activeTab, setActiveTab] = useState('welcome');
  const [title, setTitle] = useState('Welcome to our form');
  const [description, setDescription] = useState('This is a description of the form');
  const [image, setImage] = useState(DefaultImg); 
  const [btntext, setBtntext] = useState('Start');
  const [layout, setLayout] = useState('left'); 
  const [email, setEmail] = useState('Enter your email');
  const [contact, setContact] = useState('This will be used to contact you for next steps.');
  const [emailError, setEmailError] = useState('');

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const triggerFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleRemoveImage = () => {
    setImage(DefaultImg); 
    document.getElementById('fileInput').value = null; 
  };

  const handleLayoutLeft = () => {
    setLayout('left');
  };

  const handleLayoutRight = () => {
    setLayout('right');
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!newEmail.includes('.') || !newEmail.includes('@')) {
      setEmailError('Invalid email address. Please include "@" and "."');
    } else {
      setEmailError('');
    }
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
            <img src={image} alt="Displayed" className="modal-image" /> 
            {image !== DefaultImg && ( 
              <div>
                <button onClick={handleRemoveImage} className='remove-image-btn'>Remove Image</button>
                <div>
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
              </div>
            )}
          </div>
        )}
        {activeTab === 'email' && (
          <div className="email-field">
            <button className='close-btn' onClick={() => setActiveTab(null)}>
              <CloseIcon />
            </button>
            <label>Email</label>
            <TextField
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}
              helperText={emailError}
              fullWidth
              margin="normal"
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
            <div>
              <button>{btntext}</button>
              <label>press enter</label>
              <SubdirectoryArrowLeftIcon />
            </div>
          </div>
          <img src={image} alt="Displayed" />
        </div>
      )}
      {activeTab === 'email' && (
        <div className="display-content2">
          <div className='content-text'>
            <h1>1
            <ArrowRightAltIcon/>
            {email}</h1>
            <p>{contact}</p>
            <input
              type="text" 
              placeholder="Type here..." 
              className="underline-input"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UiPage;
