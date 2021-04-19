import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
const Navbar = () => {
    
    // window.addEventListener("scroll",function(){
    //    let header=document.querySelector("nav")
    //     header.classList.toggle("sticky",window.scrollY > 0)
    // })
   const [loggedInUser,setLoggedIn]=useContext(UserContext)
   
    
    return (
        
<nav class="navbar navbar-expand-lg navbar-light sticky">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <span className='mr-4'><FontAwesomeIcon icon={faCameraRetro} /></span>
        <span className='customize'>Unrealistic Photography</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navbar-customize navItem">
         <li>
             <Link to='/home'>Home</Link>
         </li>
         <li>
             <Link>About</Link>
         </li>
         <li>
             <Link to='/dashboard'>Dashboard</Link>
         </li>
         <li>
             <Link>Contact</Link>
         </li>
         <li>
             <Link to='/dashboard'>{loggedInUser.email ? <Link to='/home' className='position' onClick={()=>setLoggedIn('')}>Sing Out</Link> : 'Sing In'}</Link>
         </li>
      </ul>
    </div>
  </div>
</nav>
       
    );
};

export default Navbar;