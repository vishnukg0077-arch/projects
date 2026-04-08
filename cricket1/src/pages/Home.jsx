import Nav from '../Nav';
import PlayerCard from '../PlayerCard'
import players from '../data/players';
import { useState } from 'react';
function Home() {
    const [sortBy, setSortBy] = useState("all");
    const [search, setSearch] = useState("");

    const filteredPlayers = players.filter(obj => {

        const matchRole =
            sortBy === "all" || obj.role === sortBy;

        const searchBy =
            obj.name.toLowerCase().includes(
                search.trim().toLowerCase()
            );

        return matchRole && searchBy;
    });


    return (
        <>
            <Nav sortBy={sortBy} setSortBy={setSortBy} search={search} setSearch={setSearch} />
            <div className="p-6 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
                {filteredPlayers.map(player => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </>
    );
}

export default Home;