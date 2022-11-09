import foods from "./foods.json"
import './App.css';
import {useState} from "react"

function App() {

  const [allFoods, setAllFoods]= useState(foods)

  return (<div className="App">

    
  </div>);
}
export default App;