
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard';
import Wrapper from './component/Wrapper';
import UserProfile from './pages/UserProfile';
import EditUser from './pages/EditUser';
import Orders from './pages/Orders';
import Pricing from './component/dashboard/Pricing'
import Login from './pages/Login';
import ResturentManagment from './pages/ResturentManagment';

const router = createBrowserRouter([


  {
    path: "/user",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/user-profile",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <UserProfile />,
      },
    ],
  },
  {
    path : "/Orders",
    element : <Wrapper />,
    children: [
      {
        index: true,
        element: <Orders/>,
      },
    ],

  },
  {
    path : "/payment",
    element : <Wrapper />,
    children: [
      {
        index: true,
        element: <Pricing/>,
      },
    ],

  },
  {
    path : "/resturent-managment",
    element : <Wrapper />,
    children: [
      {
        index: true,
        element: <ResturentManagment/>,
      },
    ],

  },
  {
    path : "/edit-user/:userId",
    element : <Wrapper />,
    children: [
      {
        index: true,
        element: <EditUser/>,
      },
    ],

  },
  {
    path : '/',
    element : <Login/>
  }
])



function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
