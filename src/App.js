import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import SignUp from './containers/SignUp'
import Profile from './containers/Profile'
import NavBar from './components/Navbar'
import Home from './containers/Spotify'



const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavBar />
        <div className="App">
          <BrowserRouter basename="">
            <Navbar />
            <Switch>
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Profile" component={Profile} />
              <Route path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App

//<Route path="/" component={Login} />