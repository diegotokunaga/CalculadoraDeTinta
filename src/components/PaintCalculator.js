import React, { useState } from "react";
import WallInput from "./WallInput";

function PaintCalculator() {
  const [walls, setWalls] = useState([
    { width: 0, height: 0, windows: 0, doors: 0 },
    { width: 0, height: 0, windows: 0, doors: 0 },
    { width: 0, height: 0, windows: 0, doors: 0 },
    { width: 0, height: 0, windows: 0, doors: 0 },
  ]);

  const handleWallChange = (index, values) => {
    setWalls([...walls.slice(0, index), values, ...walls.slice(index + 1)]);
  };

  const calculatePaint = () => {
    let totalArea = 0;
    let windowArea = 0;
    let doorArea = 0;

    walls.forEach((wall) => {
      let area = wall.width * wall.height;
      let windowTotal = wall.windows * 2.4;
      let doorTotal = wall.doors * 1.52;

      totalArea += area;
      windowArea += windowTotal;
      doorArea += doorTotal;
    });

    let wallArea = totalArea - windowArea - doorArea;
    let paintNeeded = Math.ceil(wallArea / 5);

    if (paintNeeded <= 0) {
      return "Nenhuma tinta é necessária.";
    }

    if (paintNeeded <= 0.5) {
      return "Compre uma lata de 0,5 litros de tinta.";
    }

    if (paintNeeded <= 2.5) {
      return "Compre uma lata de 2,5 litros de tinta.";
    }

    if (paintNeeded <= 3.6) {
      return "Compre uma lata de 3,6 litros de tinta.";
    }

    let largestSize = Math.ceil(paintNeeded / 18);
    return `Compre ${largestSize} latas de 18 litros de tinta.`;
  };

  return (
    <div>
      <h1>Calculadora de tinta - Digital Republic / Code Challenge</h1>
      {walls.map((wall, index) => (
        <WallInput key={index} index={index} onWallChange={handleWallChange} />
      ))}
      <button onClick={() => alert(calculatePaint())}>Calcular</button>
    </div>
  );
}

export default PaintCalculator;
