import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation,  } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

const navigate=useNavigation();

  return (
    <div>



      <Header></Header>
     
      <div>
  {
    navigate.state==='loading'?<h1 className='animate-spin flex justify-center items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-4xl text-red-600  font-bold">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
  </svg>
  </h1>:''
  }
</div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;