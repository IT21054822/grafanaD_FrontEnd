
import './Signin.css';
import userIcon from '../../assets/person.png';
import passwordIcon from '../../assets/password.png';
import logo from '../../assets/download.png'
import { Link } from 'react-router-dom';
import bg2 from '../../assets/bgggg.jpg'

function Signup() {
  return (
    <div className='container1'>
      <div className="left-container" style={{backgroundImage:`url(${bg2})`}}>
        <img src={logo} alt="" className='logo' />
        <h1>Let's get Started!</h1>
        <button className="button1"><Link className='towhite' to='/'>Sign Up</Link></button>
      </div>
      <div className="right-container">
        <div className="header">
          <div className="text">Sign In</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={userIcon} alt="User Icon" />
            <input type="text" placeholder="Username" />
          </div>
        
          <div className="input">
            <img src={passwordIcon} alt="Password Icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgot-password">
              forgot password? <span>Click here!</span>
            </div>
        <div className="submit-container">
          <button className='button'><Link className='towhite' to='/Home'>Sign In</Link></button>
        </div>
        
      </div>
    </div>
  );
}

export default Signup;
