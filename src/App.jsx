import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './Home/HomePage'
import ShoppingPage from './Shopping/ShoppingPage'
import ContactsPage from './Contacts/ContactsPage'
import BlogPage from './Blog/BlogPage'
import { Toaster } from 'sonner'
import ShoppingCardPage from './Shopping/ShoppingId/ShoppingCardPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/shopping'>
            <Route index element = {<ShoppingPage/>} />
            <Route path = ":id" element = {<ShoppingCardPage/>} />
          </Route>
          <Route path='/contacts' element = {<ContactsPage/>} />
          <Route path='/blog' element = {<BlogPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App