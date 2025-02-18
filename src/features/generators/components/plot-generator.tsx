"use client";

import { useEffect, useState } from "react";
import {
  start,
  threat,
  opposition,
  action,
  complication,
} from "../data/scenarios";
import { Button } from "nextra/components";

const PlotGenerator = () => {
  const [plot, setPlot] = useState(null);

  const generatePlot = () => {
    const plotStart = start[Math.floor(Math.random() * start.length)];

    const plotThreat = threat[Math.floor(Math.random() * threat.length)];

    const plotOppositionWho =
      opposition.who[Math.floor(Math.random() * opposition.who.length)];
    const plotOppositionWhat =
      opposition.what[Math.floor(Math.random() * opposition.what.length)];

    const plotAction1 = action[Math.floor(Math.random() * action.length)];
    let plotAction2 = action[Math.floor(Math.random() * action.length)];

    while (plotAction2 === plotAction1)
      plotAction2 = action[Math.floor(Math.random() * action.length)];

    const plotComplication =
      complication[Math.floor(Math.random() * complication.length)];

    setPlot({
      start: plotStart,
      threat: plotThreat,
      oppositionWho: plotOppositionWho,
      oppositionWhat: plotOppositionWhat,
      action1: plotAction1,
      action2: plotAction2,
      complication: plotComplication,
    });
  };

  useEffect(generatePlot, []);

  return (
    plot && (
      <div className="mt-4">
        <div>
          Au début du scénario, les aventuriers se trouvent{" "}
          <span className="font-semibold">{plot.start}</span>.
        </div>
        <div>
          Et les emmerdes se matérialisent sous forme{" "}
          <span className="font-semibold">{plot.threat}</span>.
        </div>
        <div>
          Le problème est causé par des{" "}
          <span className="font-semibold">
            {plot.oppositionWho} {plot.oppositionWhat}
          </span>
          .
        </div>
        <div>
          Pour résoudre ce problème, les aventuriers devront{" "}
          <span className="font-semibold">{plot.action1}</span> et{" "}
          <span className="font-semibold">{plot.action2}</span>.
        </div>
        <div>
          Et comme si ça ne suffisait pas,{" "}
          <span className="font-semibold">{plot.complication}</span>.
        </div>
        <Button
          className="uppercase font-semibold text-sm mt-8 px-4"
          variant="outline"
          onClick={generatePlot}
        >
          Régénérer
        </Button>
      </div>
    )
  );
};

export { PlotGenerator };
