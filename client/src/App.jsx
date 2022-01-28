import NewProductForm from './components/NewProductForm';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path="/">
            <h3>Product Manager!</h3>
            <NewProductForm/>
            <hr />
            <AllProducts/>
          </Route>
          <Route exact path="/products/:id">
            <OneProduct/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
