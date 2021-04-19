import React from 'react';
import './HomePageLogIn.css'
const HomePageLogIn = () => {
    return (
        <section className='logIn-section'>
<div className="container">
    <div className="row">
        <div className="text-center contact-caption">
            <h1>Let Us Handle Your Project 
            Professionally</h1>
            </div>
           <div className="col-lg-2"></div>
           <div className="col-lg-9 text-center mt-5">
               <div className="contact-form mt-5">
                   <form action="">
                       <div className="div-input-flex">
                           <input type="text" name="" id="" placeholder='First Name'/> <br/>
                           <input type="text" placeholder='Last Name' name="" id=""/>
                       </div>
                       <div className="div-input-flex">
                           <input type="Email" name="" id="" placeholder='Your Email'/><br/>
                           <input type="number" placeholder='Phone Number' name="" id=""/><br/>
                            <div className="text-area">
                            <textarea name="" id="" cols="10" rows="2" placeholder='Message'></textarea> <br/>
                           <div className="button text-left">
                           <button>Send Message</button>
                            </div>
                           </div>
                       </div>

                   </form>
               
           </div>
          
        </div>
        <div className="col-lg-2"></div>
    </div>
</div>
        </section>
    );
};

export default HomePageLogIn;