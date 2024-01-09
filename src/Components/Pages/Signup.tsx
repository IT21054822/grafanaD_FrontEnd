
import './Signup.css';
import userIcon from '../../assets/person.png';
import emailIcon from '../../assets/email.png';
import passwordIcon from '../../assets/password.png';
import logo from '../../assets/download.png'
import { Link } from 'react-router-dom';
import bg2 from '../../assets/bgggg.jpg'


function Signup() {
  return (
    <div className='container1'>
      <div className="left-container" style={{backgroundImage:`url(${bg2})`}}> 
       <img src={logo} alt="" className='logo' />
        
        <h1>Welcome to our platform!</h1>
        
        
        <button className="button1"><Link style={{textDecoration:'none'}}  to='/signin'>Sign In</Link></button>
      </div>
      <div className="right-container">
        <div className="header">
          <div className="text">Create Account</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={userIcon} alt="User Icon" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input">
            <img src={emailIcon} alt="Email Icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="Password Icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="submit-container">
          <button className='button'><Link to='/Dashboard' className='towhite'>Sign Up</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
