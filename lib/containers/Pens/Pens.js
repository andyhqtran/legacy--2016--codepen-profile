/**
 * External dependencies
 */
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

/**
 * <Pens />
 */
const Pens = () => (
  <div>
    <Helmet
      title="Pens"
    />
    Pens <Link to="/">Go To Home</Link>
  </div>
);

export default Pens;
