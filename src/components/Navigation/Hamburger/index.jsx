import React, { Fragment } from 'react';
import '../Navigation.css';

const Hamburger = ({
  click,
  checked,
}) => (
  <Fragment>
    <input type="checkbox" id="hamburger" />
    <label className="menuicon" htmlFor="hamburger">
      <span></span>
    </label>
  </Fragment>
);
export default Hamburger;