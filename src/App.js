import React, {useState} from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Profile from './containers/Profile'
import NavBar from './components/Navbar'
import Matches from './containers/Home'
import Spotify from './containers/Spotify'



const App = () => {
  const [log, setLog] = useState(localStorage.getItem('token') ? true : false)
  return (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavBar log={log} setLog={setLog} />
        <div className="App">
            <Switch>
              {log ? <>
              <Route path="/Profile"><Profile /></Route>
              <Route exact path="/"><Matches /></Route>
              </> : <Route path="/"><Spotify setLog={setLog} /></Route>}
            </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)}

export default App

//<Route path="/" component={Login} />