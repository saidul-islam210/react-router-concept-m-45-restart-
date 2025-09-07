import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root.jsx'
import Home from './components/Home.jsx'
import Mobiles from './components/Mobiles.jsx'
import Laptops from './components/Laptops.jsx'
import About from './components/About.jsx'
import Users from './components/Users.jsx'
import Posts from './components/Posts.jsx'
import Users2 from './components/Users2.jsx'


const postPromice = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      { path: 'about', Component: About },
      {
        path: 'users',
        Component: Users,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'users/:usersId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        Component: Users2
      },
      {
        path: 'post',
        element: <Suspense fallback={<span><h1>Loading....</h1></span>}>
          <Posts postPromice={postPromice}></Posts>
        </Suspense>,
        //  element: <Posts></Posts>
      }
    ]
  },
  // {
  //   path: 'home',
  //   element: <div>Home</div>
  // },
  // {
  //   path: 'about',
  //   element: <div>About me</div>
  // },
  // {
  //   path: 'blogs',
  //   element : <div>All Blog are Here</div>
  // },
  // {
  //   path:'app',
  //   Component: App
  // }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
