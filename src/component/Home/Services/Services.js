import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'
const Services = (props) => {
    const{name,price,imageURL,_id}=props.servicesWorkItem
  const history=useHistory();
  const HandleDataSend=(_id)=>{
      const url=`services/${_id}`
      history.push(url)
  }

    return (
      
              <div className='col-lg-4 mt-4 '>
            <div className="card-section" onClick={()=>HandleDataSend(_id)}>
            <div className="services-container text-center">
               <img src={imageURL} alt=""/>
            </div>
            <div className="caption-post-section text-center">
                 <p> ${price}</p>
                <h4>{name}</h4>
                <h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laboriosam at a iure odio sapiente! Unde numquam enim ullam fuga odio laboriosam est, nobis corporis labore, velit quas modi deleniti!</h6>
            </div>
            </div>
        </div>
       
    );
};

export default Services;