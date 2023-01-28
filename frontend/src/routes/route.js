import Add from "../pages/Add/Add";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Mainroot from "../pages/Mainroot";
import Pages from "../pages/Pages";
import Services from "../pages/Services";

export const ROUTES=[
{
    path:'/',
    element:<Mainroot/>,
    children:[
        {
            path:'',
            element:<Home/>
        },
        {
            path:'add',
            element:<Add/>
        }
        ,
        {
            path:'blog',
            element:<Blog/>
        },
        {
            path:'pages',
            element:<Pages/>
        },
        {
            path:'contact',
            element:<Contact/>
        },
        {
            path:'services',
            element:<Services/>
        },
    ]
}



]