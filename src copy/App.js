import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import ResetPassword from "./Pages/ResetPassword";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      errorElement:<ErrorPage/>,
      children:[
        {index:true,element:<Home/>},
        {path:'signup',element:<Register/>},
        {path:'signin',element:<Login/>},
        {path:'forgotpassword',element:<ResetPassword/>},
        
      ]
    }
  ])
  return (
<>
<ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
        />
<RouterProvider router={router}/>

</>
  );
}

export default App;
