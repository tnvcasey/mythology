import React from "react";
import GodCard from "./GodCard";

function GodsPage({ filteredGods, handleDelete }) {
    return(
        <div>
            <h1 className="headerGods">* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</h1>
            <ul className="cards">
                {filteredGods.map((god) => (
                    <GodCard key={god.id} god={god} handleDelete={handleDelete} />
                ))}
            </ul>
        </div>
    )
}

export default GodsPage;