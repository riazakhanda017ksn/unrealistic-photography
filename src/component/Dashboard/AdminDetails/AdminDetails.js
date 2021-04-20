import React, { useState } from 'react';

const AdminDetails = (props) => {
    const {name,email,_id}=props.AdminDetailsShow

    const deleteEvent =id=>{
        fetch(`https://glacial-tundra-14316.herokuapp.com/deleteAdmin/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(result=>{
             if(result){
             alert('data has been deleted')
             }
             
        })
        
      }
    
    return (
        <tr>
 
        <td>{name}</td>
        <td>{email}</td>
        

    
        <td>
            <button onClick={()=>deleteEvent(_id)} className='btn btn-danger'>Remove Admin </button>
        </td>
     
      </tr>
    );
};

export default AdminDetails;