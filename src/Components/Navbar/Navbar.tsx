import './Navbar.css'
import logo_c from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="Navbar">
        <img src="" alt="" className='logo3' />
        <ul>
            <li><Link to='/signin' className='towhite'>Login</Link></li>
            <li><Link to='/' className='towhite'>Register</Link></li>
        </ul>
        <img src={logo_c} alt="" className="logo_c" />
        
    </div>
  )
}

export default Navbar
