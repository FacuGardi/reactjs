import Navbar from "./Navbar/Navbar";
import { Dolar } from "./Dolar/Dolar"
const App = () => {
  console.log(document.getElementById("boton1"))
  return (
    <div>
      <Navbar/>
      <Dolar/>
    </div>
  );
}

export default App;