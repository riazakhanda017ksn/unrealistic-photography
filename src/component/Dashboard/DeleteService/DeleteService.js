import React from 'react';
import './DeleteService.css'
const DeleteService = (props) => {
    const{name,price,_id}=props.servicesDeleteItem
    
    
    const deleteEvent =id=>{
      fetch(`http://localhost:5055/deleteService/${id}`,{
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
    
            
        <tr >
        <td>{name}</td>
        <td>${price}</td>
        <td>
            <button onClick={()=>deleteEvent(_id)} className='btn btn-danger'> Delete</button>
        </td>
       
      </tr>
    
    );
};

export default DeleteService;