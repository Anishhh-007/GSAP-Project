import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './root/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Support from './components/Support'

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contactus' element={<Contact />} />
      <Route path='support' element={<Support />} />

    </Route>
  ))

  return (
   <>
   <RouterProvider router={router} />

   </>
  )
}

export default App
