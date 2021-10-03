import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      {/* <h1>WhatsApp clone</h1> */}
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
    </div>
  );
}

export default App;
