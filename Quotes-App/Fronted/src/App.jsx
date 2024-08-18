import React, { Fragment } from 'react'
import MainNavigation from './components/mainNavigation/MainNavigation'
import { Route, Routes } from 'react-router-dom'

import AllQuotes from './components/pages/AllQuotes'

import NewQoute from './components/pages/NewQuotes'

import { } from 'react-router-dom'
function App() {
  return (
    <Fragment>
      <MainNavigation />
<Routes>
  <Route path='/' element='{AllQuotes}'/>
  <Route path='/New' element='{NewQuotes}' /> 
</Routes>
    </Fragment>
  )
}

export default App