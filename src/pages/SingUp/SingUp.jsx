import { useContext } from 'react';
import loginImage from "../../assets/images/login/login.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const SingUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSingUp = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const cpassword = form.cpassword.value;
        console.log(cpassword, password)
        if (password !== cpassword) {
            alert("Password is not match!!")
        }
        createUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className=" flex items-center">
                <div className="w-6/12 mr-10">
                    <img src={loginImage} alt="" />
                </div>
                <div className="shadow-sm bg-base-100 w-6/12 rounded-lg">
                    <form onSubmit={handleSingUp}>
                        <div className="card-body">
                            <h3 className='text-3xl font-bold text-secondary'>Sing Up</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='cpassword' placeholder="Confirm Password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>Sing Up</button>
                            </div>
                            <p>Already have an account? <Link to="/login" className='text-secondary text-2xl'>LogIn</Link> </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;