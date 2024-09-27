import { Link } from 'react-router-dom';

const Signin = ({ toggleForm }) => {
  return (
    <section className="signin-form">
      {/* Close Icon */}
      <span className="close-icon" onClick={() => toggleForm('close')}>
        &times;
      </span>

      <h2>Sign In</h2>
      <form action="#">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Sign In</button>

        <div className="form-link">
          Don't have an account? 
          <Link to="#" onClick={() => toggleForm('signup')}>Sign Up</Link>
        </div>
      </form>
    </section>
  );
};

export default Signin;
