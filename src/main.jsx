import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Contact from './Components/Conatct/Contact';
import FoodDetail from './Components/FoodDetail/FoodDetail';
const router = createBrowserRouter( [
  { 
    name: "Home",
    path: "/",
    element:<Home></Home> ,
    children:[
      {
        name: "Menu",
        path: "menu",
        element:<Menu></Menu>,
        loader:()=> fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      },
      {
        name: "Detail",
        path: "menu/:id",
        element:<FoodDetail></FoodDetail>,
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id} `)

      },
      {
        name: "About Us",
        path: "about",
        element: <About></About>
      },
      {
        name: "Contact Us",
        path: "contact",
        element: <Contact></Contact>
      }
    ]
  }

]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
