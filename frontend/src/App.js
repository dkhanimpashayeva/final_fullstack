
import './App.css';

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes/route';
const router=createBrowserRouter(ROUTES)
const App = () => {
  return (
    <div>

{/* //search data

const [search, setSearch] = useState("");

{
    data && data.filter((product) => {
        return search.trim().toLowerCase() === ""
            ? product
            : product.name.toLowerCase().includes(search);
    })
}

<input type="search" onChange={(e) => setSearch(e.target.value)}/> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
