import './Header.css'
import UserIcon from 'assets/images/userIcon.jpg'
import NavLinkItem from "./components/NavLinkItem.tsx";

function Header() {
  return (
    <header className='header'>
      <div className='header-title'>
        <h1 className="header-title-text">STORIFY</h1>
      </div>
      <div className='header-navbar'>
        <div className='header-navbar-items'>
          <NavLinkItem link={'home'} navbarItem={'Home'} />
          <NavLinkItem link={'my-stories'} navbarItem={'My Stories'} />
          <NavLinkItem link={'liked-stories'} navbarItem={'Liked Stories'} />
          <NavLinkItem link={'add-new-story'} navbarItem={'Add New Story'} />
        </div>
        <div className='header-navbar-user-icon'>
          <img src={UserIcon} alt="user icon" className="header-navbar-user-icon-img"/>
        </div>
      </div>
    </header>
  );
}

export default Header