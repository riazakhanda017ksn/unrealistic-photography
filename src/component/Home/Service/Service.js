import React, { useEffect, useState } from 'react';
import './Services.css'
import Services from '../Services/Services';
const Service = () => {



          const[ServicesItem,setServicesItem]=useState([])

          useEffect(()=>{
            fetch('https://glacial-tundra-14316.herokuapp.com/addService')
            .then(res=>res.json())
            .then(data=>setServicesItem(data))
          },[0])

    
  
    return (
        <section className='background'>
           <div className="container">
           
         
                    <div className="slider-part">
                        <div className="the-service-hading text-center py-5 ">
                        
                        <h1>Here Our Awesome <span>Services</span></h1>

                        </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="visibility active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators"  className='visibility'   data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="row">
      {
            ServicesItem.map(servicesWork=><Services servicesWorkItem={servicesWork}></Services>)
        }
      </div>
    </div>
    <div class="carousel-item">
    <div className="row">
      {
            ServicesItem.map(servicesWork=><Services servicesWorkItem={servicesWork}></Services>)
        }
      </div>
    </div>
    <div class="carousel-item">
    <div className="row">
      {
            ServicesItem.map(servicesWork=><Services servicesWorkItem={servicesWork}></Services>)
        }
      </div>
    </div>
  </div>
  <button class="carousel-control-prev visibility" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon visibility" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next visibility" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon visibility" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       
       <div className="explore-more text-center">
           <button>Explore More</button>
       </div>
                   </div>
 
               </div>
         
        </section>
    );
};

export default Service;