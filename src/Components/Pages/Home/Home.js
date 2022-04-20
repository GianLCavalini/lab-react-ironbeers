import AllBeers from "../../../assets/beers.png";
import RandonBeers from "../../../assets/random-beer.png";
import NewBeer from "../../../assets/new-beer.png"
import { Link } from "react-router-dom";


export function Home() {
    return ( 

        <div className="container">

        <Link to="/allBeers" ><img src={AllBeers} alt="tipos diferentes de cervejas" /> </Link>
        <h1 className="h1">All Beers</h1>
        <p>Vistite nosso catalogo de cervejas e divirta-se!</p>
            
        <Link to="/randomBeers"> <img src={RandonBeers} alt="mangueira de uma cervejaria" /> </Link>
        <h1 className="h1" > Random Beers</h1>
        <p>Experimente uma cerveja aleatória hoje!</p>
            
        <Link to="/newBeer" ><img src={NewBeer} alt="Garrafa de cerveja e um copo cheio" /> </Link>
        <h1 className="h1" >New Beer</h1>
        <p>Opaaaaa...breja nova? Deixe suas infos aqui e logo a gente entra em contato</p>
            

        </div>

     );
}

