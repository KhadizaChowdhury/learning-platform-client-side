import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Login from './components/ReactBLogIn/Login';
import Register from './components/ReactBRegister/Register';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import Home from './components/Home/Home';
import NotFound from './components/404 _page/NotFound';
import Category from './components/Category/Category';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('https://server-site-flame.vercel.app/all-courses')
        },
        {
          path: "/courses",
          element: <Home></Home>,
          loader: () => fetch('https://server-site-flame.vercel.app/all-courses')
        },
        {
          path:"/faq",
          element: <FAQ></FAQ>
        },
        {
          path:"/blog",
          element: <Blog></Blog>
        },
        {
          path:'/checkout/:courseId',
          element: <ProtectedRoutes>
          <CheckOut></CheckOut>
        </ProtectedRoutes>,
          loader: ({ params }) => fetch(`https://server-site-flame.vercel.app/checkout/${params.courseId}`)
        },
        {
          path: "/register",
          element: <Register></Register>
        }
        ,
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: '/category/:cId',
          element: <Category></Category>,
          loader: ({ params }) => fetch(`https://server-site-flame.vercel.app/category/${params.cId}`)
        },
        {
          path: '/course/:id',
          element:
          // <ProtectedRoutes>
            <Courses></Courses>,
          // </ProtectedRoutes>,
          loader: ({ params }) => fetch(`https://server-site-flame.vercel.app/course/${params.id}`)

        }
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ]);
  return (
    <div className="App" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
