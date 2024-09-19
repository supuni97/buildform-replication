import React,{useState} from 'react';

const Welcome = () => {

    const [title,setTitle]=useState('Welcome');
    const [description,setDescription]=useState('This is the welcome screen');
    const [image,setImage]=useState(null);


    const handleImageUpload = (e)=>{
        setImage(URL.createObjectURL(e.target.files[0]))
    };

  return (
    <div className="welcome-screen">
    <input
    type='text'
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    placeholder='Title'
    />
    <textarea
        value={description}
         onChange={(e)=>setDescription(e.target.value)}
    placeholder='Description'
    />
     <input
    type='file'
    onChange={handleImageUpload}
    />
    {image && <img src={image} alt='uploaded' />}
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
  )
}

export default Welcome;