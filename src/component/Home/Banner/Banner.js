import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="container">
                  <div className="row">
                  <div className="col-lg-6"></div>
                      <div className="col-lg-6">
                          <div className="the-heading-part py-4 d-flex align-content-end flex-wrap">
                              <h1>
                                  The Unrealistic Photography
                              </h1>
                             <p>
                             Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking  at then,<br/>  you’re never     going to get others to feel anything when  <br/>  they  look at your pictures.
                             </p><br/>
                             <button className="edit">Show Our Gallery</button>
                          </div>
                      </div>
                      
                  </div>
              </div>
    );
};

export default Banner;