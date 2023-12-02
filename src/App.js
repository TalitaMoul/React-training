
import './App.css';
import Profile from "./Components/Profile" 
import Backpack from "./Components/Backpack";
import BackpackItems from './Components/BackpackItems';




function App() {
  return (
    <div className="App">
      <Profile character_name="Ranmawari"/>
      <Backpack strength_box="17" 
      weightless_box="34.1"
      little_heavy_box="68.2"
      very_heavy_box ="102.3"
      total_weight_box="32.2"
      gold_box="300"/>
      <BackpackItems number_of_items="2"
      item_name="Lorem Ipsum"
      weight="20"
      total_weight="40"
      normal_magical_consumable="M"/>
    </div>
  );
}

export default App;
