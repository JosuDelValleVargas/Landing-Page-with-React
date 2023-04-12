import React from "react"

const Card = () => {
    return(<div className="card" style={{width: "18rem"}}>
    <img src="https://laclosette.com/wp-content/uploads/2017/10/500x300-300x180.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>)
}

//style={{marginRight: spacing + 'em'}} when using JSX.

export default Card