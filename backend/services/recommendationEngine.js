// recommendationEngine.js
const { parseQuery } = require("./openaiService");
const { getAvailableDesks } = require("./dataService");

async function handleOccupancyQuery(nlQuery) {
  const { floor, zone, time, type } = await parseQuery(nlQuery);
  const desks = getAvailableDesks({ floor, zone, type, time });
  return { desks };
}

module.exports = { handleOccupancyQuery };
