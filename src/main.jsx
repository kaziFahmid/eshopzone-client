import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Login from './components/Registrations/Login/Login';
import Signup from './components/Registrations/Signup/Signup';
import axios from 'axios';
import AuthProvider from './components/AuthProvider/AuthProvider';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import Functions from './components/Functions/Functions';
import Products from './components/Products/Products';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ContactUs from './components/ContactUs/ContactUs';

axios.defaults.baseURL=`https://eshopzone-server.vercel.app/`
axios.interceptors.request.use((req)=>{return req})
axios.interceptors.response.use((res)=>{return res.data})

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/contactus',
        element:<ContactUs/>
      },
        {
          path:'/products',
          element:<Products/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Signup/>
        },
        {
          path:'/revieworder',
          element:<ReviewOrder/>
        },
        {
          path:'/placeorder',
          element:<PlaceOrder/>
        }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
<Functions>
<RouterProvider router={router} />
</Functions>

    </AuthProvider>

  </QueryClientProvider>

  </React.StrictMode>,
)
