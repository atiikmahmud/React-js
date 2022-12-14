import { useEffect, useRef, useState } from "react";

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

  function NewCar2(){
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year,  setMOdel] = useState("1964");
    const [color, setColor] = useState("red");

    return(
      <>
        <h1>My {brand}</h1>
        <p>It is a {color} {model} from {year}</p>
      </>
    )
  } 

  function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []);

    return <h1>I've rendered {count} times!</h1>;
  }

  function Form(){
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
      count.current = count.current + 1;
    });

    return (
      <>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <p>Render Count: {count.current}</p>
      </>
    );
  }

  return (
      <>
        {/* Home Page Content Section Start */}
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h3>React useState</h3>
            </div>
            <div className="card-body">
              <NewCar2 />
              <NewCar />
              <Car />
              <FavoriteColor />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
  
              <p style={{ color: "white", backgroundColor: "black", padding: "20px", borderRadius: "10px", border: "2px red solid"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
  
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-header">
              <h3>React useEffect, ... useRef</h3>
            </div>
            <div className="card-body">
                ***Timer
                <Timer />
                <hr/>
                ***useRef <br/>
                <Form />
                
                <hr/>


            </div>

          </div>
        </div>
        {/* Home Page Content Section End */}
      </>
    );
  };
  
  export default Hooks;