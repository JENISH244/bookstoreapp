import React from 'react'
import { useForm } from 'react-hook-form';

export default function Contactustool() {
  const {
          register,
          handleSubmit,
          watch,
          reset,
          formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        reset()
      }
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='pt-[100px] mb-16 items-center flex justify-center text-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='p-5'>
        <h3 className="font-bold text-2xl text-start ">Contact us</h3>
        
        <div className='text-start mt-4 space-y-1'>
          <span>Name</span>
          <br/>
          <input type='text' placeholder='Enter your name'  {...register("name", { required: true })} className='w-[400px] px-3 py-1 border rounded-md outline-none' />
        </div>

        <div className='text-start mt-4 space-y-1'>
          <span>Email</span>
          <br/>
          <input type='email' placeholder='Enter your email'  {...register("email", { required: true })} className='w-[400px] px-3 py-1 border rounded-md outline-none' />
        </div>

        <div className='text-start mt-4 space-y-1'>
          <span>Message</span>
          <br/>
          <textarea type='text' rows="4" placeholder='Type your message'  {...register("message", { required: true })} className='w-[400px] px-3 py-1 border rounded-md outline-none' />
        </div>
        <div className='text-start'>
        <button className='border border-1 mt-4 bg-blue-500 text-white rounded-md px-2 py-1 border-black'>Submit</button>
        </div>

        </form>
      </div>
    </div>
  )
}
