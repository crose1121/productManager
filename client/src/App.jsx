import NewProductForm from './components/NewProductForm';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import React, {useState} from 'react';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';


function App() {

  let [newProductAdded, setNewProductAdded] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>

          <Route exact path="/">
            <h3>Product Manager!</h3>
            <hr />
            <Link to="/products/new">Create New Product</Link>
            <hr />
            <AllProducts newProductAdded={newProductAdded}/>
          </Route>

          <Route exact path="/products/new">
            <NewProductForm newProductAdded={newProductAdded} setNewProductAdded={setNewProductAdded}/>
          </Route>

          <Route exact path="/products/:id">
            <OneProduct/>
          </Route>

          <Route exact path="/products/edit/:id">
            <EditProductForm/>
          </Route>

          <Route exact path="/products/delete/:id">
            <EditProductForm/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
