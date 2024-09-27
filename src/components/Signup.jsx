import { Link } from 'react-router-dom';

const Signup = ({ toggleForm }) => {
  return (
    <section className="signup-form">
      {/* Close Icon */}
      <span className="close-icon" onClick={() => toggleForm('close')}>
        &times;
      </span>
      
      <h2>Sign Up</h2>
      <form action="#">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Sign Up</button>

        <div className="form-link">
          Already have an account? 
          <Link to="#" onClick={() => toggleForm('signin')}>Sign In</Link>
        </div>
      </form>
    </section>
  );
};

export default Signup;
