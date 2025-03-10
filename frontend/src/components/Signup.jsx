import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Signup() {
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.form?.pathname || "/"
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        }
        await axios
            .post("https://bookstoreapp-backend-azv9.onrender.com/user/signup", userInfo)
            .then((res) => {
                console.log("res.data ", res.data)
                if (res.data) {
                    toast.success('Signup Successfully');
                    navigate(from,{replace:true})
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error)
                    toast.error("Error : " + error.response.data.message);
                }
            })
        // reset()

    }
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark")
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light")
            document.body.classList.remove("dark");

        }
    }, [theme])
    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div className="w-[500px]">
                    <div className="modal-box border-[2px] shadow-md p-5 rounded-md dark:bg-[#25252C]">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</Link>
                            <h3 className="font-bold text-lg ">Signup</h3>
                            <div className='mt-4 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type='text' placeholder='Enter your Name' {...register("fullname", { required: true })} className='w-80 px-3 py-1 border rounded-md outline-none text-black' />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type='email' placeholder='Enter your email' {...register("email", { required: true })} className='w-80 px-3 py-1 border rounded-md outline-none  text-black' />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type='password' placeholder='Enter yout password' {...register("password", { required: true })} className='w-80 px-3 py-1 border rounded-md outline-none text-black' />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>

                            <div className='flex justify-around mt-4'>
                                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                                <div className="text-xl">
                                    Have account?{" "}
                                    <button
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >
                                        Login
                                    </button>{" "}
                                    <Login />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
