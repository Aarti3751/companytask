import { useState } from "react";
import "./Tab.css";

const Tab = () => {
  const [show, setShow] = useState(false);

  const showBar = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="btn" onClick={showBar}>
        Tigers
      </button>
      <div className={`main ${show ? "active-menu" : ""}`}>
        <div className="content">
          <p>
            Tigers have reddish-orange coats with prominent black stripes, white bellies, and white spots on their ears.
            Like a human fingerprint, no two tigers have the exact same markings.
          </p>
          {/* Close Icon */}
          <span className="close-icon" onClick={showBar}>
            &times; {/* Unicode for '×' */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tab;
