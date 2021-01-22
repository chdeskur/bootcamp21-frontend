import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
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
            <Switch>
              <Route path="/SignUp"><SignUp /></Route>
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