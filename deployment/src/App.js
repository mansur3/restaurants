
import './App.css';
import {Switch, Route} from "react-router-dom";
import {Product} from "./Components/Main/Product";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
