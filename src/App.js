import './App.css';
import Main from "./components/Main";
import {CartCtxProvider} from "./CartContext";

function App() {
  return (
   <CartCtxProvider>
    <Main/>   
    </CartCtxProvider> 
  );
}

export default App;
