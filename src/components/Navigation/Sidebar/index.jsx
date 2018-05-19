import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.css';

const Sidebar = ({
  checked,
  click,
}) => (
  <Fragment>
    <div className="menu">
      <ul className="menulist">
        <li className="menuitem"><Link to="/">User</Link></li>
        <li className="menuitem"><Link to="/">Profle</Link></li>
        <li className="menuitem"><Link to="/">Some</Link></li>
        <li className="menuitem"><Link to="/">Another some</Link></li>
      </ul>
    </div>
  </Fragment>
);
export default Sidebar;
