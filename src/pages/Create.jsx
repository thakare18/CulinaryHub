import React from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';


const Create = () => {
    const {register,handleSubmit} = useForm();

     const SubmitHandler = (data) => {
        data.id= nanoid();
    console.log(data);
  };


  return (
    
   <form onSubmit={handleSubmit(SubmitHandler)}>
    <input className=' block border-b outline-0 p-2'
     {...register("Image")}
     type="url"
        placeholder='Image URL'
     />

<small className='text-red-400'>This is how the error is shown</small>
    <input className=' block border-b outline-0 p-2'
     {...register("title")}
     type="text" placeholder='Recipe Title'/> 

     <small className='text-red-400'>This is how the error is shown</small>
    <input className=' block border-b outline-0 p-2'
     {...register("chief")}
     type="text" placeholder='Recipe Title'/> 
     
     

     
    <input className=' block border-b outline-0 p-2'
     {...register("title")}
     type="text" placeholder='//Start from here         '
     
     /> 
     

    <textarea className=' block border-b outline-0 p-2'
        {...register("ingredients")}
        placeholder='//Write ingredients separated by commas'
    ></textarea>
    

     <textarea className=' block border-b outline-0 p-2'
        {...register("instructions")}
        placeholder='//Write instructions separated by commas'
    ></textarea>

     <select className=' block border-b outline-0 p-2 bg-gray-800'
        {...register("categories")}
        placeholder='//Write instructions separated by commas'
    >
        <option value="cat-1">Select 1</option>
        <option value="cat-2">Select 2</option>
        <option value="cat-3">Select 3</option>
    </select>
    <button className='block mt-5 bg-gray-900 px-4 py-2 rounded'>Save Recipe</button>
   </form>
  );
};

export default Create
