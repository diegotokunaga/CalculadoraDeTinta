import React, { useState } from "react";
import "../App.css";

function WallInput(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [windows, setWindows] = useState(0);
  const [doors, setDoors] = useState(0);

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
    props.onWallChange(props.index, {
      width: event.target.value,
      height,
      windows,
      doors,
    });
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
    props.onWallChange(props.index, {
      width,
      height: event.target.value,
      windows,
      doors,
    });
  };

  const handleWindowsChange = (event) => {
    setWindows(event.target.value);
    props.onWallChange(props.index, {
      width,
      height,
      windows: event.target.value,
      doors,
    });
  };

  const handleDoorsChange = (event) => {
    setDoors(event.target.value);
    props.onWallChange(props.index, {
      width,
      height,
      windows,
      doors: event.target.value,
    });
  };

  return (
    <div className="main__container">
      <h3>Parede {props.index + 1}</h3>
      <div className="wall__style">
        <div className="eachWall__style">
        <label htmlFor={`width${props.index}`}>Largura(m²): </label>
        <input
          type="number"
          id={`width${props.index}`}
          min="1"
          max="50"
          step="0.1"
          value={width}
          onChange={handleWidthChange}
        />
        <br />
        <label htmlFor={`height${props.index}`}>Altura(m²): </label>
        <input
          type="number"
          id={`height${props.index}`}
          min="1"
          max="50"
          step="0.1"
          value={height}
          onChange={handleHeightChange}
        />
        <br />
        <label htmlFor={`windows${props.index}`}>Quantidade de Janelas: </label>
        <input
          type="number"
          id={`windows${props.index}`}
          min="0"
          max="10"
          value={windows}
          onChange={handleWindowsChange}
        />
        <br />
        <label htmlFor={`doors${props.index}`}>Quantidade de Portas: </label>
        <input
          type="number"
          id={`doors${props.index}`}
          min="0"
          max="10"
          value={doors}
          onChange={handleDoorsChange}
        />
        </div>
      </div>
    </div>
  );
}

export default WallInput;
