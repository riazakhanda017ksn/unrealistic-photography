import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import Navbar from '../../Share/Navbar/Navbar';
import './MakeAdmin.css'
const MakeAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
             email: data.email
            
        }
      

        fetch('https://glacial-tundra-14316.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('res data', res);
            })
    };
    return (
        <div>
            <div className='makeAdminBanner'>
            <Navbar></Navbar>
            <div className="container mt-5">
                    <h1 className='text-center adService'>Add A New <span className='py-5 text-danger text-center'>Admin</span></h1>
                    <div className="row">
                        <div className="col-lg-3">
                            <Link to='/dashboard'><button className="submit"> Back To Dashboard </button></Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-div">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type='text' placeholder='Name' name='name'  {...register("name")} />
                                    <input type='email' placeholder='Your Email' name='email'  {...register("email")} />
                            
                                    <button type="submit"> Add Admin </button>
                                </form>
                            </div>

                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;