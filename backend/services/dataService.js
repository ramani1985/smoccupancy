// dataService.js
const mockData = require("../mock/data.json");

function getAvailableDesks({ floor, zone, type, time }) {
  return mockData.desks.filter(
    (desk) =>
      desk.floor === floor &&
      desk.zone === zone &&
      desk.type === type &&
      desk.status === "available"
  );
}

module.exports = { getAvailableDesks };
