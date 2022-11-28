
import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../../layout/DashboardLayout/DashboardLayOut";
import Main from "../../layout/Main/Main";
import AddBooks from "../../pages/AddBooks/AddBooks";
import Allitems from "../../pages/AllItems/Allitems";
import Blog from "../../pages/Blog/Blog";
import BookBooked from "../../pages/BookBoked/BookBooked";
import BooksCategory from "../../pages/BooksCategory/BooksCategory";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import MyOrder from "../../pages/MyOrder/MyOrder";
import MyProduct from "../../pages/MyProduct/MyProduct";
import SignUp from "../../pages/SignUp/SignUp";
import Unapproved from "../../pages/Unapproved/Unapproved";
import Users from "../../pages/Users/Users";
import AdminRoute from "../AminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute.js/SellerRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/addbooks',
                element:<AddBooks></AddBooks>
            },
            {
                path:'/addbook/:id',
                element:<PrivateRoute><BooksCategory></BooksCategory></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/addbook?category_name=${params.id}`)
            
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            // {
            //     path:'/bookmodal',
            //     element:<BookBooked></BookBooked>,
            //     // loader: ({params})=>fetch(`http://localhost:5000/addbook/${params.id}`)
            // }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayOut></DashboardLayOut></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard/seller',
                element:<SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path:'/dashboard/users',
                element:<AdminRoute><Users></Users></AdminRoute>
            },
            {
                path:'/dashboard/allItems',
                element:<AdminRoute><Allitems></Allitems></AdminRoute>
            },
            {
                path:'/dashboard/myOrder',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/dashboard/unapproved',
                element:<AdminRoute><Unapproved></Unapproved></AdminRoute>
            }
        ]
    }
])