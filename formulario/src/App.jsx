import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
/* import 'bootstrap/dist/js/bootstrap.bundle.min'; */
import {FormContainer} from "./components/wrappers";
import {Title} from "./components/ui";
function App() {

  return (
    <>
      <Title type="h1" name="Formulario" className='text-light'/>
      <FormContainer className="bg-dark viewport" />
    </>
  )
}

export default App

