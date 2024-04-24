import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "../../busybuy1/src/Components/Navbar";
import Login from "../../busybuy1/src/Pages/Login";
import Register from "../../busybuy1/src/Pages/Register";
import ErrorPage from "../../busybuy1/src/Pages/ErrorPage";
import Home from "../../busybuy1/src/Pages/Home";
import ResetPassword from "../../busybuy1/src/Pages/ResetPassword";
import Cart from "./Pages/Cart";
import PrivateRoute from "./Components/PrivateRoute";
import Order from "./Pages/Order";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, CSSProperties, useEffect } from "react";
import { useAuth } from "./Context/AuthContext";
import Spinner from "./Components/Spinner";

// const override= {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

function App() {
  const {loading,setLoading}=useAuth();
useEffect(()=>{
  // setLoading(true);
  setTimeout(()=>setLoading(false),4000);
},[loading]);
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,

      errorElement:<><Navbar/><ErrorPage/></>,
      children:[
        {path:"/",element:<Home/>},
        {path:'signup',element:<Register/>},
        {path:'signin',element:<Login/>},
        {path:'forgotpassword',element:<ResetPassword/>},
        {path:"users/:userId",
      children:[
        {path:"cart",element:<PrivateRoute><Cart/></PrivateRoute>},
        {path:"orders",element:<PrivateRoute><Order/></PrivateRoute>}
      ]}
      ]
    },

  
  ])
  debugger;
  return (

<>

<ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
        />
{loading?
<Spinner/>:<RouterProvider router={router}/>
    }
</>
  );
}

export default App;
