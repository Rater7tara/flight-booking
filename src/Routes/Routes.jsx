import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../Layout/ErrorPage";
import BookHotelForm from "../Pages/BookHotelForm/BookHotelForm";
import Home from "../Pages/Home/Home";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            // {
            //     path:'/booking',
            //     element:<BookHotelForm></BookHotelForm>
            // }
        ]
    }
])