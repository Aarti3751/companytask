import React, { useState } from 'react';
import './Muti.css';

const TabMul = () => {
  const [activeTab, setActiveTab] = useState('Form Tab 1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '' }); // Clear form after submission
  };

  const tabContent = {
    'Form Tab 1': {
      content: (
        <>
          <p>This is the content for Tab 1.</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className='Btn' type="submit">Submit</button>
          </form>
        </>
      ),
      image: null,
    },
    'Text Tab 2': {
      content: (
        <>
          <h5 className='h5'>
            The journey is never ending. There’s always gonna be growth, improvement, adversity; you just gotta take it all in and do what’s right, continue to grow, continue to live in the moment.
          </h5>
        </>
      ),
      image: null,
    },
    'Image Tab 3': {
      content: (
        <div>
          <img src="img (3).jpeg" alt="img" />
        </div>
      ),
      image: null,
    },
    'Video Tab 4': {
      content: (
        <div className='Video'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UeC9-5o22aU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ),
      image: null,
    },
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {Object.keys(tabContent).map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <div>{tabContent[activeTab].content}</div>
      </div>
    </div>
  );
};

export default TabMul;
