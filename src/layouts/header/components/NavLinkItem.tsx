import {NavLink} from 'react-router-dom'
import {INavLinkItems} from "../../../types/Interfaces.tsx";
import '../Header.css'

function NavLinkItem({link, navbarItem}: INavLinkItems) {
  return (
    <NavLink to={`/${link}`} className='link'>
      {({isActive}) => (
        <div className={`header-navbar-item-background ${isActive ? 'active' : ''}`}>
          <p className='header-navbar-item'>{navbarItem}</p>
        </div>
      )}
    </NavLink>
  );
}

export default NavLinkItem