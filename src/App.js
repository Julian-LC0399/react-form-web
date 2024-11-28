import "./App.css";
import Navbar from './components/Navbar';
import FormValidation from "./components/FormValidation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
  return (
    <div className="container">
      <Router>
      <FormValidation />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
