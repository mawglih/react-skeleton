import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../Navigation.css';


const Sidebar = ({
  children,
  name,
  hide,
}) => {
    return(
      <Fragment>
        {children}
        <div className={name} >
          <ul className="menulist">
            <li className="menuitem" onClick={hide}><Link to="/">User</Link></li>
            <li className="menuitem" onClick={hide}><Link to="/">Profle</Link></li>
            <li className="menuitem" onClick={hide}><Link to="/">Some</Link></li>
            <li className="menuitem" onClick={hide}><Link to="/">Another some</Link></li>
          </ul>
        </div>
      </Fragment>  
    );
  }
export default Sidebar;
