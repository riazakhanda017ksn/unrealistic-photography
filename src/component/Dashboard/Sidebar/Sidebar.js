import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookDead, faCameraRetro, faComment, faEdit, faShoppingCart, faSignOutAlt, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
import { faFirstOrder, faServicestack } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';
const Sidebar = () => {

    const [loggedInUser,setLoggedInUSer]=useContext(UserContext)
    const[isAdmin,setIsAdmin]=useState(false)
    useEffect(()=>{
        fetch('https://glacial-tundra-14316.herokuapp.com/isAdmin',{
            method:"POST",
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[])
    return (
        <div className="side-bar mt-5">
            <span className='mr-4 camera mt-5'><FontAwesomeIcon icon={faCameraRetro} /></span>
        <span className='customize mt-5 position-relative'>Unrealistic Photography</span>
         <div className="side-bar-list mt-5">
             <ul>
                {isAdmin && <div>
                <li>  <span className='mr-3'><FontAwesomeIcon icon= {faShoppingCart} /> </span> <Link to='/BookingList'>Booking List</Link></li>
                 <li>  <span className='mr-3'><FontAwesomeIcon icon= {faUsers}/>  </span>   <Link to='/manageOrder'  >Manage Order</Link></li>
                 <li>  <span className='mr-3'><FontAwesomeIcon icon= {faServicestack}/>  </span>   <Link to='/addService'>Add Service</Link></li>
                 <li>   <span className='mr-3'> <FontAwesomeIcon icon={faEdit}/>    </span>   <Link to='/manageService'>Manage Service</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUser}/>    </span>     <Link to='/admin'>Admin</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUser}/>    </span>     <Link to='/addBlog'>Add Blog</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUserPlus}/>    </span>     <Link to='/makeAdmin'>Add Admin</Link></li>
                </div>}
                 
                 <li>  <span className='mr-3'> <FontAwesomeIcon icon={faComment} /></span>  <Link  to='/reviews'>Review</Link></li>
                 <li>  <span className='mr-3'> <FontAwesomeIcon icon={faBookDead} /></span>  <Link to='/userOrder'>My Booking List</Link></li>
                 

             </ul>
         </div>
         <div className="side-bar-list mt-5">
             <ul>
                 <li onClick={()=>setLoggedInUSer('')}>  <span className='mr-3'><FontAwesomeIcon icon= {faSignOutAlt} /> </span> <Link to='/home'>Log Out</Link></li>

             </ul>
         </div>
        </div>
    );
};

export default Sidebar;