import React, { useContext } from 'react';
import loginImage from "../../assets/images/login/login.svg";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)

            .then(result => {

                const user = result.user;
                const logUser = {
                    email:user.email
                };
                console.log(logUser)
                fetch("http://localhost:5000/jwt", {

                    method: "POST",
                    headers: {
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(logUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("car-access-token",JSON.stringify(data.token));
                         navigate(from, { replace: true });
                    })


               
            }).catch(error => {
                console.log(error)
            })


    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className=" flex items-center">
                    <div className="w-6/12 mr-10">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="shadow-sm bg-base-100 w-6/12 rounded-lg">
                        <form onSubmit={handleLogin}>
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