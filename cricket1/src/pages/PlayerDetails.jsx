import { useParams } from "react-router-dom";
import players from "../data/players";

function PlayerDetails() {
  const { id } = useParams();

  const player = players.find(p => p.id === Number(id));

  if (!player) {
    return <div className="text-white">Player not found</div>;
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col items-center mt-3">

        <img
          src={player.photo}
          alt={player.name}
          className="w-40 h-40 object-cover rounded-full shadow-md mt-3"
        />

        <h2 className="mt-3 text-xl font-bold text-black">
          {player.name}
        </h2>

        <p className="capitalize text-green-400">
          {player.role}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {Object.entries(player.stats).map(([format, data]) => (
            <div key={format} className="bg-gray-800 p-4 rounded-lg text-white">
              <h3 className="uppercase font-semibold mb-2">{format}</h3>
              <p>Runs: {data.runs}</p>
              <p>Matches: {data.matches}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PlayerDetails;
