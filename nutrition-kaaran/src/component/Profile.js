import React from 'react'
import { useAuth } from './Auth'
import userimg from "../component/img/user-img.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Profile = () => {
    const auth=useAuth()
    const handlelogout=()=>{
        auth.logout()
    }
  return (
    <div>

      <br></br>
      <img src={userimg} alt="Pumpkin" style={{ width: '300px', height: '300px' , borderRadius:'50%'}} /><br></br>

      Welcome to our website {auth.user}<br></br><br></br>
      <button className='prob' onClick={handlelogout}>logout</button>
      <br></br><br></br>
      <br></br><br></br>
      <footer>
        <h1 id="fbf">Contact us</h1>
        <div className="footer">
        <div className="foot1"> <FontAwesomeIcon icon={faFacebook} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faInstagram} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faTwitterSquare} /> </div>
<div className="foot1"> <FontAwesomeIcon icon={faYoutube} /> </div>
        </div>
        <h3 id="fbf">All copyright are reserved@2024</h3>
      </footer>
    </div>
  )
}
