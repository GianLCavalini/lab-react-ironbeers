import { Link } from "react-router-dom";
import HomeLink from "../../../assets/home-link.png"


export function AllBeers() {
    return ( 
        <>

    <nav class="navbar navbar-light bg-light">
        <div class="container">
            <Link to="/"> <img src={HomeLink} alt="imagem para voltar para a home " /> </Link>
         </div>
    </nav>
        <div>   

        all beers here!
        </div>
        </>

     );
}

