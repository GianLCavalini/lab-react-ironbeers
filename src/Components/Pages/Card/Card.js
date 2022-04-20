
export function Card(props) {
    return (  
        <div class="card mb-3" style={{maxWidth: "540px;"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={props.beers.image_url}    class="img-fluid rounded-start" alt={props.beers.name}  width="100" height="100" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.beers.name}</h5>
        <p class="card-text">{props.beers.tagline}</p>
        <p class="card-text"><small class="text-muted">{props.beers.contributed_by}</small></p>
      </div>
    </div>
  </div>
</div>
    );
}

