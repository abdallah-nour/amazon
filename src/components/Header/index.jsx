import Nav1 from '../TopNav1';
import Nav2 from '../TopNav2';

function Header({ setSideMenuVisibility }) {
  return (
    <header id='header'>
      <Nav1 />
      <Nav2 setSideMenuVisibility={setSideMenuVisibility} />
    </header>
  )
}

export default Header;
