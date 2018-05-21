import React from 'react';
import '../Navigation.css';

const Hamburger = ({
  click,
  buttonStyle,
}) => (
  <div className={buttonStyle}>
    <input type="button" id="hamburger" onClick={click} />
    <label className="menuicon" htmlFor="hamburger">
      <span ></span>
    </label>
  </div>
);
export default Hamburger;

