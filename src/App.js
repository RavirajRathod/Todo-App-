import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Homepage from './components/Todocomponents/Homepage';
import Aboutpage from './components/Todocomponents/Aboutpage';
// import Alltodo from './components/Todocomponents/Alltodo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { modeContext } from './context/context';
import { lazy, Suspense, useState } from 'react';
import PrivateRouter from './components/PrivateRouter';
import { RootPage } from './components/RootPage';

const Alltodos = lazy(() => import('./components/Todocomponents/Alltodo'))

const router = createBrowserRouter([

  {
    path: "/",
    element: <PrivateRouter><RootPage /></PrivateRouter>,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/about',
        element: <Aboutpage />
      },
      {
        path: '/alltodos',
        element: <Suspense fallback={<div className='loading'>Data is loading, please wait..</div>}><Alltodos /></Suspense>
      },
    ]
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },


])

function App() {
  const [mode, setMode] = useState('dark')
  return (
    <modeContext.Provider value={{ mode, setMode }}>

      <RouterProvider router={router} />

    </modeContext.Provider>
  );
}

export default App;
