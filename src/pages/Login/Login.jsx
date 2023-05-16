import React from 'react';
import loginImage from "../../assets/images/login/login.svg";
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin=(event)=>{
        event.preventDefault();

    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className=" flex items-center">
                    <div className="w-6/12 mr-10">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="shadow-sm bg-base-100 w-6/12 rounded-lg">
                        <form>
                            <div className="card-body">
                            <h3 className='text-3xl font-bold text-secondary'>LogIn</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>Login</button>
                                </div>
                                <p>New to card doctors? <Link to="/singup" className='text-secondary text-2xl'>Sing Up</Link> </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;