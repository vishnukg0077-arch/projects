import { useNavigate } from "react-router-dom";

function PlayerCard({ player }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/player/${player.id}`)}
      className="cursor-pointer w-full bg-gray-800
       text-white rounded-xl p-4 hover:scale-105 transition"
    >
      <img src={player.photo} className="h-40 w-full object-cover rounded-lg" />
      <h2 className="mt-2 text-lg font-semibold">{player.name}</h2>
      <p className="capitalize text-gray-400">{player.role}</p>
    </div>
  );
}

export default PlayerCard;
