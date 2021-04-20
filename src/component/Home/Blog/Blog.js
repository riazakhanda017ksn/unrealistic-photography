import React, { useEffect, useState } from 'react';
import img1 from '../../../images/ge6.jpg'
import img2 from '../../../images/ge1.jpg'
import img3 from '../../../images/ge2.jpg'
import img4 from '../../../images/cw27.jpg'
import img5 from '../../../images/ge7.jpg'
import img6 from '../../../images/queen.jpg'
import BlogsItem from '../BlogsItem/BlogsItem';
import './Blog.css'

const Blog = () => {

    const[images,setImages]=useState([])
     useEffect(()=>{
        fetch('https://glacial-tundra-14316.herokuapp.com/AddBlogs')
        .then(res=>res.json())
        .then(data=>setImages(data))
     },[0])




    // const images=[
    //     {
    //         img:img1
    //     },
    //     {
    //         img:img2
    //     },
    //     {
    //         img:img3
    //     },
    //     {
    //         img:img4
    //     },
    //     {
    //         img:img5
    //     },
    //     {
    //         img:img6
    //     }
    // ]
    return (
      <section className='background-for-blog-section'>
          <div className="the-service-hading text-center py-5">
              <h1>Here Our Awesome <span>Blog</span></h1>
          </div>
            <div className='container text-center'>
            <div className="row">
                {
                    images.map(image=><BlogsItem imagesItems={image}></BlogsItem>)
                }
            </div>
        </div>
      </section>
    );
};

export default Blog;