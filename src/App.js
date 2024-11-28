import "./App.css";
import "./components/Menú.css"
import FormValidation from "./components/FormValidation";
import MenúNavegación from "./components/MenúNavegación";

function App() {
  return (
    <div className="container">
      <FormValidation />
      <MenúNavegación/>
    </div>
  )
}

export default App;
