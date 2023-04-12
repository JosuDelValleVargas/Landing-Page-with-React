import React from "react"

const Card = () => {
    return(<div className="card" style={{width: "18rem"}}>
    <img src="https://laclosette.com/wp-content/uploads/2017/10/500x300-300x180.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">Card title</h5>
      <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione, adipisci rerum minima aliquid, recusandae dolores odit consequatur, fugiat velit nisi quas soluta praesentium. Maxime praesentium odio laboriosam asperiores! Sunt.</p>
    </div>
      <div className="border-top py-3 d-flex justify-content-center bg-light ">
      <a href="#" className=" btn btn-primary ">Find Out More</a>
      </div>
    
  </div>)
}

//style={{marginRight: spacing + 'em'}} when using JSX.

export default Card