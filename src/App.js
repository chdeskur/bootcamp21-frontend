import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Profile from './containers/Profile'
import NavBar from './components/Navbar'
import Home from './containers/Home'



const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavBar />
        <div className="App">
            <Switch>
              <Route path="/Profile"><Profile /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App

//<Route path="/" component={Login} />