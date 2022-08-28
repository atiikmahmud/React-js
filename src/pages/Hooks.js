import { useState } from "react";

const Hooks = () => {
    
  function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
      <>
        <h2>My Favorite color is {color}!</h2>
        <button type="button" className="btn btn-sm btn-primary" style={{ marginRight: "10px" }} onClick={() => setColor("blue")}>Blue</button>
        <button type="button" className="btn btn-sm btn-danger" style={{ marginRight: "10px" }} onClick={() => setColor("red")}>Red</button>
        <button type="button" className="btn btn-sm btn-dark" style={{ marginRight: "10px" }} onClick={() => setColor("black")}>Black</button>
        <button type="button" className="btn btn-sm btn-success" style={{ marginRight: "10px" }} onClick={() => setColor("green")}>Green</button>
      </>
    )
  }

  function Car() {
    const [car, setCar] = useState(
      {
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      }
    );

    return (
      <>
        <h1>My {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year}</p>
      </>
    )
  }

  function NewCar() {
    const [car, setCar] = useState(
      {
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      }
    );

    const updateColor = () => {
      setCar(previuosState => {
        return { ...previuosState, color: "blue" }
      });
    }

    return (
      <>
        <h1>My {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year}</p>
        <button type="button" className="btn btn-sm btn-primary" onClick={updateColor}>Blue</button>
      </>
    )
  }

  return (
      <>
        {/* Home Page Content Section Start */}
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h3>React Hooks</h3>
            </div>
            <div className="card-body">
              <NewCar />
              <Car />
              <FavoriteColor />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  
              <p style={{ color: "white", backgroundColor: "black", padding: "20px", borderRadius: "10px", border: "2px red solid"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
  
            </div>
          </div>
        </div>
        {/* Home Page Content Section End */}
      </>
    );
  };
  
  export default Hooks;