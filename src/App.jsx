import AppLetras from "./components/AppLetras";
import { LetrasProvaider } from "./context/LetrasProvaider";

function App() {

  return (
    <LetrasProvaider>
      <AppLetras/>
    </LetrasProvaider>
  )
}

export default App
