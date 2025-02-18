"use client";

import { Button } from "nextra/components";
import placesTable from "../data/places";
import { useEffect, useState } from "react";

const PlacesGenerator = () => {
  const [places, setPlaces] = useState([]);
  const generatePlaces = () => {
    let placesGenerated = [];
    for (let index = 0; index < 10; index++) {
      const prefix =
        placesTable.prefix[
          Math.floor(Math.random() * placesTable.prefix.length)
        ];
      const suffix =
        placesTable.suffix[
          Math.floor(Math.random() * placesTable.suffix.length)
        ];
      placesGenerated.push({ prefix, suffix });
    }
    setPlaces(placesGenerated);
  };

  useEffect(generatePlaces, []);

  return (
    <div className="mt-4">
      {places &&
        places.map((place, idx) => (
          <div key={idx}>
            {place.prefix} {place.suffix}
          </div>
        ))}
      <Button
        className="uppercase font-semibold text-sm mt-8 px-4"
        variant="outline"
        onClick={generatePlaces}
      >
        Régénérer
      </Button>
    </div>
  );
};

export { PlacesGenerator };
