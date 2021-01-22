import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Navbar from './containers/Navbar'
//import Login from './containers/Login'
//import SpotifyInfo from './containers/Spotify'



const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App

//<Route path="/" component={Login} />