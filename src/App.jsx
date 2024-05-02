import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Home/HomePage'
import ShoppingPage from './Shopping/ShoppingPage'
import ContactsPage from './Contacts/ContactsPage'
import BlogPage from './Blog/BlogPage'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/shopping' element = {<ShoppingPage/>} />
          <Route path='/contacts' element = {<ContactsPage/>} />
          <Route path='/blog' element = {<BlogPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App