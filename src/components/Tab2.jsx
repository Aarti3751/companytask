import { useState } from "react";
import "./Tab2.css";
import { FaRegFaceSmileWink } from "react-icons/fa6";

const Tab2 = () => {
  const [show, setShow] = useState(false);

  const showBar = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="btn3" onClick={showBar}>
      Lions
      </button>
      <div className={` main1 ${show ? "active-menu1" : ""}`}>
        <img
          src='https://wallpapercave.com/wp/wp2049736.jpg'
          alt="img1"
          className="img1"
        />
        <h4>
        Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey.
         Their coats are yellow-gold, and adult males have shaggy manes that range in color from blond to reddish-brown to black.
          The length and color of a lion's mane is likely determined by age, genetics and hormones. 
        Young lions have light spotting on their coats that disappears as they grow.<FaRegFaceSmileWink />
        </h4>

        <span className="close-icon" onClick={showBar}>
            &times; {/* Unicode for '×' */}
          </span>
      </div>
    </div>
  );
};

export default Tab2;