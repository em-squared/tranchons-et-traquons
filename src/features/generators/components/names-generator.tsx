"use client";

import { useEffect, useState } from "react";
import {
  humanNames,
  drakkenNames,
  elvenNames,
  dwarvenNames,
  krislingNames,
  wolfenNames,
  bloodkinNames,
  kitlingNames,
} from "../data/names";
import { itemSchema } from "nextra/schemas";
import { Button } from "nextra/components";

const NamesGenerator = () => {
  const [names, setNames] = useState(null);

  const generateNames = () => {
    let namesGenerated = {
      humanNames: [],
      drakkenNames: [],
      elvenNames: [],
      dwarvenNames: [],
      krislingNames: [],
      wolfenNames: [],
      bloodkinNames: [],
      kitlingNames: [],
    };

    for (let index = 0; index < 10; index++) {
      namesGenerated.humanNames.push(
        humanNames[Math.floor(Math.random() * humanNames.length)]
      );
      namesGenerated.drakkenNames.push(
        drakkenNames[Math.floor(Math.random() * drakkenNames.length)]
      );
      namesGenerated.elvenNames.push(
        humanNames[Math.floor(Math.random() * elvenNames.length)]
      );
      namesGenerated.dwarvenNames.push(
        dwarvenNames[Math.floor(Math.random() * dwarvenNames.length)]
      );
      namesGenerated.krislingNames.push(
        krislingNames[Math.floor(Math.random() * krislingNames.length)]
      );
      namesGenerated.wolfenNames.push(
        wolfenNames[Math.floor(Math.random() * wolfenNames.length)]
      );
      namesGenerated.bloodkinNames.push(
        bloodkinNames[Math.floor(Math.random() * bloodkinNames.length)]
      );
      namesGenerated.kitlingNames.push(
        kitlingNames[Math.floor(Math.random() * kitlingNames.length)]
      );
    }

    setNames(namesGenerated);
  };

  useEffect(generateNames, []);

  const namesList = (list) =>
    list.map((item, idx) => <div key={idx}>{item}</div>);

  return (
    <div className="mt-4">
      {names && (
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="font-semibold">Humains/Halfelins</div>
            {namesList(names.humanNames)}
          </div>
          <div>
            <div className="font-semibold">Drakken</div>
            {namesList(names.drakkenNames)}
          </div>
          <div>
            <div className="font-semibold">Elfes</div>
            {namesList(names.elvenNames)}
          </div>
          <div>
            <div className="font-semibold">Nains/Ours</div>
            {namesList(names.dwarvenNames)}
          </div>
          <div>
            <div className="font-semibold">Krisling/Marionnette</div>
            {namesList(names.krislingNames)}
          </div>
          <div>
            <div className="font-semibold">Taurin/Wolfen</div>
            {namesList(names.wolfenNames)}
          </div>
          <div>
            <div className="font-semibold">Sangrelin</div>
            {namesList(names.bloodkinNames)}
          </div>
          <div>
            <div className="font-semibold">Kitling</div>
            {namesList(names.kitlingNames)}
          </div>
        </div>
      )}
      <Button
        className="uppercase font-semibold text-sm mt-8 px-4"
        variant="outline"
        onClick={generateNames}
      >
        Régénérer
      </Button>
    </div>
  );
};

export { NamesGenerator };
