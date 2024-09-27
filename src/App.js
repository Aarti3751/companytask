import './App.css';
import Banner from './components/Banner';
import { BrowserRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { IoMenu } from 'react-icons/io5';

import { useState } from 'react';
import VideoSec from './components/VideoSec';
import Tab from './components/Tab';
import TabMul from './components/TabMul';
import Footer from './components/Footer';
import Map from './components/Map';
import Tab2 from './components/Tab2';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [showMap, setShowMap] = useState(false); 

  const toggleForm = (formType) => {
    setShowForm(true);
    setIsSignUp(formType === 'signup');
  };

  // Function to toggle the map display
  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const animal = [
    {
      images: [
        'https://i.pinimg.com/originals/eb/24/4a/eb244a4ee711cb28dc087b2db3032273.jpg',
        'https://wallpapercave.com/wp/wp2049736.jpg',
        'https://www.pixelstalk.net/wp-content/uploads/images6/3840x2160-Animal-Wallpaper-HD.jpg',
      ],
    },
  ];

  return (
    <BrowserRouter>
      <>
        <div className="menu-container">
          <div className="menu-icon" onClick={() => toggleForm(isSignUp ? 'signin' : 'signup')}>
            <IoMenu size={30} color="#333" />
          </div>
          <div className="map-icon" onClick={toggleMap}>
            <IoMenu size={30} color="#333" />
          </div>
        </div>

        <Banner animal={animal} />
        <VideoSec />
        
        <div style={{
          marginBottom:'1rem',
          paddingBottom:'2rem',
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <Tab />
          <Tab2 />
        </div>
        
        <TabMul />
        <Footer />

        {showForm && (isSignUp ? <Signup toggleForm={toggleForm} /> : <Signin toggleForm={toggleForm} />)}
        {showMap && <Map toggleMap={toggleMap} />} {/* Pass toggleMap to the Map */}
      </>
    </BrowserRouter>
  );
}

export default App;
