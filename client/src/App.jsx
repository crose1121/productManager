import './App.css';
import NewProductForm from './components/NewProductForm';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3>Product Manager!</h3>
        <Switch>
          <Route exact path="/">
            <NewProductForm/>
          </Route>
        </Switch>
        <hr />
      </div>
    </BrowserRouter>
  )
}

export default App;
