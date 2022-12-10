const Tourist = require("./tourist.js");
const list = require("../Accommodation/listAccommodations.json");

describe("Tourist class test", () => {
  const tourist = new Tourist();
  test("Filter city with registered accommodations", () => {
    const result = tourist.filterCity("Campina Grande", list);
    expect(result.length).toBeGreaterThan(0);
  });

  test("Filter cities without registered accommodations", () => {
    const result = tourist.filterCity("Patos", list);
    expect(result.length).toBe(0);
  });
});
