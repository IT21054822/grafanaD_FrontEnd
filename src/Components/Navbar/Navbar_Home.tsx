import './Navbar.css'
import logo_c from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="Navbar">
        <img src="" alt="" className='logo3' />
        <ul>
            <li><Link to='/Home' className='towhite'>Home</Link></li>
            <li><Link to='/Dashboard' className='towhite'>Dashboard</Link></li>
            <li><Link to='/signin' className='towhite'>Logout</Link></li>
        </ul>
        <img src={logo_c} alt="" className="logo_c" />
        
    </div>
  )
}

export default Navbar
