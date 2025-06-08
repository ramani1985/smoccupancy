// OccupancyQueryForm.js
import React, { useState } from "react";
import { queryDesks } from "../services/api";

function OccupancyQueryForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await queryDesks(query);
    setResults(res.desks);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask e.g. 'Find me an available standing desk...'"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {results.map((desk) => (
          <li key={desk.id}>
            {desk.id} - {desk.location_description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default OccupancyQueryForm;