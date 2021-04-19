import React from 'react';
import './TestomonialSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestomonialSection = (props) => {
    const {name,companyName,imageURL}=props.reviewItem
    return (
        <div className='col-lg-4 mt-4'>
            <div className="card-container">
                <div className="user-img">
                    <div className="reviewer-img">
                    <img src={imageURL} alt=""/>
                    </div>
                    <div className="professional">
                        <h5>{name}</h5>
                <span>{companyName}</span>
                </div>
                    
                </div>
                
                <div className="card-post">
                  <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laboriosam at a iure odio sapiente! Unde numquam enim ullam fuga odio laboriosam est, nobis corporis labore, velit quas modi deleniti!,</p>
                </div>
                <div className="card-five-star">
                  <span><FontAwesomeIcon icon={faStar} /></span>
                  <span><FontAwesomeIcon icon={faStar} /></span>
                  <span><FontAwesomeIcon icon={faStar} /></span>
                  <span><FontAwesomeIcon icon={faStar} /></span>
                  <span><FontAwesomeIcon icon={faStar} /></span>
                
                </div>
            </div>
        </div>
    );
};

export default TestomonialSection;