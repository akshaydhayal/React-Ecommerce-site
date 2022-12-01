// import logo from './logo.svg';
import './App.scss';
import {createBrowserRouter,RouterProvider,Route,Outlet} from "react-router-dom";

import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Layout=()=>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />                      {/*basically outlet represent all the pages */}
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/products/:id",
        element:<Products/>,
      },
      {
        path:"/product/:id",
        element:<Product/>,
      }
    ]
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
