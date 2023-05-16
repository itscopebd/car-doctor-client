import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Book = () => {
    const { user } = useContext(AuthContext);
    const singleUserLoad = useLoaderData();

    console.log(singleUserLoad)
    const { _id, price, title,img } = singleUserLoad;

    const handleBookServices = (event) => {
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const email= user?.email;
        const date=form.date.value;
        

        const order={
            customerName:name,
            email,
            date,
            img,
            price:price,
            service_id:_id,
            services:title
        }

        fetch("http://localhost:5000/bookings",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                Swal.fire({
                    title: 'Order',
                    text: "Are You Order!",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Order it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Order!',
                        'Successfulyy.',
                        'success'
                      )
                    }
                  })
            }
        }) 
    }

    return (
        <>
            <div className="bg-base-200">
                <div className="my-10">
                    <h4 className='text-3xl text-secondary text-center py-3 rounded-lg'>Book Service: {title}</h4>
                    <form onSubmit={handleBookServices}>
                        <div className="w-full shadow-sm bg-base-100">
                            <div className='grid md:grid-cols-2 gap-5'>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' defaultValue={user?.name} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" defaultValue={user?.email} readOnly name='email' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name='date' className="input input-bordered" />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due Amount</span>
                                    </label>
                                    <input type="text" defaultValue={"$" + price} name='amount' className="input input-bordered" />

                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Order Confirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </>
    );
};

export default Book;