import React from 'react';
import './DeleteService.css'
const DeleteService = (props) => {
    const{name,price,_id}=props.servicesDeleteItem
    
    
    const deleteEvent =id=>{
      fetch(`https://glacial-tundra-14316.herokuapp.com/deleteService/${id}`,{
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