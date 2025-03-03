import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post("https://bookstoreapp-backend-zvfh.onrender.com/user/login", userInfo)
        .then((res) => {
            console.log("res.data ", res.data)
            if(res.data) {
                toast.success('Loggedin Successfully');
                document.getElementById("my_modal_3").close()
                setTimeout(() => {
                    window.location.reload()
                    localStorage.setItem("Users",JSON.stringify(res.data.user))
                },3000)
            }
        })
        .catch((error) => {
            if(error.response) {
                console.log("error",error)
            toast.error("Error: "+error.response.data.message);
            setTimeout(() => {},3000)
            }
        })
        // reset()
      }
    return (
        <div >
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-[#25252C]">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>
                    
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type='email' placeholder='Enter yout email' {...register("email", {required: true})} className='w-80 px-3 py-1 border rounded-md outline-none text-black'/>
                        <br />
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input type='text' placeholder='Enter yout password' {...register("password", {required: true})} className='w-80 px-3 py-1 border rounded-md outline-none text-black'/>
                        <br />
                        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>

                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        <p>
                            Not registered?{" "}
                            <Link
                                to="/signup"
                                className="underline text-blue-500 cursor-pointer"
                            >
                                Signup
                            </Link>{" "}
                        </p>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}
