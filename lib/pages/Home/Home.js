/**
 * External dependencies
 */
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

/**
 * <Pens />
 */
const Home = () => (
  <div>
    <Helmet
      title="Home"
    />
    Home <Link to="/pens">Go To Pens</Link>
  </div>
);

export default Home;
