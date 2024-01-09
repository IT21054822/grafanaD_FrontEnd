import LoginNavbar from './Navbar'
import HomeNavbar from './Navbar_Home'
import { useLocation } from 'react-router-dom'

const Nav_Bar: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  

    const renderNavbar = (): React.ReactNode => {
      if (currentPath === '/signin') {
        return <LoginNavbar />;
      } else if(currentPath === '/Dashboard'){
        return <HomeNavbar />;
      }
      else if(currentPath === '/'){
        return <LoginNavbar />;
      }
      else if( currentPath=== '/Home'){
        return <HomeNavbar/>
      }
    };
  
    return <div>{renderNavbar()}</div>;
  };

export default Nav_Bar
