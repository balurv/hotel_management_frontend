import { LOGO_URL } from '../utils/constants';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [logToggleText, setLogToggleText] = useState('Login');

    const onlineStatus = useOnlineStatus();

    const handleLogToggleTextBtn = () =>{
      if(logToggleText === 'Login'? setLogToggleText('Logout'): setLogToggleText('Login'));
    }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="loading"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status: {onlineStatus ? 'false':'true'}
            </li>
            <li>
              <Link to= '/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/contact'>
              Contact Us
              </Link>
            </li>
              
            <li>Cart</li>
            <li>Profile</li>
            <button 
              className = 'logToggleTextBtn'
              onClick={handleLogToggleTextBtn}
            >{logToggleText} 
            </button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;