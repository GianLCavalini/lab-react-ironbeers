import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllBeers } from "./Components/Pages/All-Beers/AllBeers";
import { Home } from "./Components/Pages/Home/Home";
import { NewBeer } from "./Components/Pages/New-Beer/NewBeer";
import {RandomBeers} from "./Components/Pages/Random-beers/RandomBeers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/allBeers" element={<AllBeers/>} />
          <Route path="/randomBeers" element={<RandomBeers/>} />
          <Route path="/newBeer" element={<NewBeer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
