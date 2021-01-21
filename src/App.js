import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import SignUp from './containers/SignUp'
import Profile from './containers/Profile'
import NavBar from './components/Navbar'
//import Login from './containers/Login'



const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavBar />
        <div className="App">
        <Switch>
        <Route path="/Profile" component={Profile} />
        <Route path="/SignUp" component={SignUp} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App

//<Route path="/" component={Login} />