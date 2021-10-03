import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useContext } from 'react';
import Login from './components/Login';
import {Context as AuthContext} from './context/AuthContext'

function App() {
  const {state} = useContext(AuthContext)
  return (
    <div className="app">
      {state.user === null ? (
        <Login />
      ): (
        <div className="app__body">
        <Router>
        <Sidebar/>
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
