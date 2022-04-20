import { Link } from "react-router-dom";
import HomeLink from "../../../assets/home-link.png";
import { useState, useEffect } from "react";
import axios from "axios";
import {Card} from "../Card/Card"

export function AllBeers() {

    const [beers, setBeers] = useState([]);

    useEffect(() =>{
        async function fetchBeers(){
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(response.data)
        }
        fetchBeers()
    }, [])

    return (
        <>
            <div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container">
                        <Link to="/"> <img src={HomeLink} alt="imagem para voltar para a home " /> </Link>
                    </div>
                </nav>
            </div>

            {beers.map((currentBeer) => {
                return (<Card beers={currentBeer} />);
            })}
        </>     
        
        
        

        

     );
}

