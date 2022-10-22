import "bootstrap/dist/css/bootstrap.min.css";
import Shell from "./components/Shell";
import RecipeList from "./components/RecipeList"
import { useState } from "react";
import { Button } from "react-bootstrap";
function App() {
  const [toggle, setState] = useState(true)
  

  return (
    <div className="App d-grid gap-3">
      <Button onClick={() => setState(!toggle)}>Switch Between UI Types</Button>       
      {toggle ? <RecipeList/> : <Shell/>}      
    </div>
  );
}

export default App;
