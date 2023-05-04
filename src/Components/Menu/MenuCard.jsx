import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({data}) => {

  return (
   <div>
     <div className=''>
      <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={data.strMealThumb} alt="food" /></figure>
  <div className="card-body h-52">
    <h2 className="font-semibold text-pink-600 text-xl text-center">{data.strMeal}</h2>
 
    <div className=" flex justify-between mt-8">
  
   
    <span className='text-xl font-bold '>
     $ {((data.idMeal)/650).toFixed(2)} 
    </span>
    <Link to={`/menu/${data.idMeal}`}  > 
    <button className="btn  btn-warning text-slate-600 font-bold"> Details </button>
      </Link>

    </div>
  </div>
</div>
    </div>
   </div>
  );
};

export default MenuCard;