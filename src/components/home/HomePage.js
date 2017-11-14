import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
    <div className="jumbotron">
      <h1> Administation Page</h1>
      <p> React, Redux & React Router In ES6</p>
      <Link to="about" className="btn btn-primary btn-lg"> Learn More</Link>
    </div>
  );
  }
}

export default HomePage;
