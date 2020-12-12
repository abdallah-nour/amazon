import Nav1 from '../TopNav1';
import Nav2 from '../TopNav2';
function Header({setDarkScreen}) {
    return (
    <div id='header'>
      <Nav1 setDarkScreen={setDarkScreen} />
      <Nav2 />
    </div>
  )
}

export default Header
