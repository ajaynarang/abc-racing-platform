import React from "react";
import type { Fixture } from "../types";

interface FixturesListProps {
  fixtures: Fixture[];
}

const FixturesList = React.memo(function FixturesList({
  fixtures,
}: FixturesListProps) {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {(fixtures || []).map((fixture) => (
        <div key={fixture.id}>
          <div className="bg-white shadow-md  rounded-2xl p-4 w-80 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">
              {fixture.raceName}
            </h2>
            <p className="text-gray-500 text-sm">{fixture.date}</p>
            <p className="text-gray-700 font-sm">{fixture.circuit}</p>
            <p className="text-gray-700 text-sm">{fixture.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default FixturesList;
