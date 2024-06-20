const Header =() => {
    return (
        <> 
    <div className="header-container">
      <div className="navbar">
        <div className="navbar-left">
          <h1>Blogr</h1>
          <ul>
            <li>Product</li>
            <li>Company</li>
            <li>Connect</li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
      <div className="header-content">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="header-buttons">
          <button className="start-btn">Start for Free</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </div>
    </>
  );
};

    


export default Header;