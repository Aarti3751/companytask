const Map = ({ toggleMap }) => {
  return (
    <div className="map-container">
      {/* Close Icon */}
      <span className="close-icon" onClick={toggleMap}>
        &times;
      </span>
      <h4>Map Location</h4>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509324!2d144.95373531531645!3d-37.81627997975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11d1bd%3A0x5045675218cee80!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1635539296452!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
