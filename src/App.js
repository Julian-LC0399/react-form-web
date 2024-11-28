import "./App.css";
import Navbar from './components/Navbar';
import FormValidation from "./components/FormValidation";
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Router>
      <FormValidation />
        <Navbar />
      </Router>
    </div>
  )
}

export default App;
