import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetail = () => {
const data=useLoaderData()
console.log(data);

  return (
    <div className='flex  flex-col justify-center items-center p-2'>
      <div>
<h1 className='text-3xl font-semibold my-5 text-cyan-900 text-center' >|| Detail ||</h1>
<div >
<img  className='rounded-2xl h-80 border-2 my-4 hover:scale-110 transform transition-transform duration-1000 hover:shadow-2xl hover:shadow-red-500 ' src={data.meals[0].strMealThumb} alt="" />
<h1 className='text-2xl font-semibold my-5 text-rose-900 text-center'>{data.meals[0].strMeal}</h1>
<h1 className='text-xl font-semibold my-5 text-amber-400 text-center'>{data.meals[0].strArea}</h1>


</div>

      </div>
      <p className='text-xl border-2 border-red-400 p-2 rounded-2xl font-semibold my-5 text-slate-400 text-center'>{data.meals[0].strInstructions}</p>
    </div>
  );
};

export default FoodDetail;