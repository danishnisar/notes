import {NavLink} from '@remix-run/react'

function MainNavigations(){
    return (
        <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/index">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/note">My Notes</NavLink>
        </li>
      </ul>
    </nav>
    );
}

export default MainNavigations;