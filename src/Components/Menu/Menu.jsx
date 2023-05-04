import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MenuCard from './MenuCard';


const Menu = () => {
const datas=useLoaderData();
const [more,setMore]=useState(false)
console.log(more);


  return (
   <div className=" mx-auto  lg:mx-10 ">

     <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 '>
    {
   more===true ?    datas.meals.map(data=> <MenuCard
    key={data.idMeal}
    data={data}
  
    ></MenuCard> ): datas.meals.slice(0,10).map(data=> <MenuCard
      key={data.idMeal}
      data={data}
    
      ></MenuCard> )
    }
    </div>
   <div className='text-center my-3 '>
   <button onClick={()=>setMore(!more)} className={`  ${!more ? 'px-4 py-3 text-black  font-semibold  bg-yellow-400  rounded-xl ':'hidden'}  `  }  >Aro chai</button>
   </div>
   </div>
  )
};

export default Menu;