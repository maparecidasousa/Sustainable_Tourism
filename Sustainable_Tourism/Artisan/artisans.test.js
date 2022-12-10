const { Artisans, ArtisansList } = require("./artisans.js");

describe("Artisan class test", () => {
  const artisansList = new ArtisansList();

  test("Register artisan who meet the sustainability criteria", () => {
    const artisan = new Artisans(
      "Carol Sandra",
      "Bolsas artesanais",
      "83 98804-0316",
      "R. Dr. Pedro Firmino, 22",
      "Campina Grande",
      "PB",
      "08:00 as 17:00",
      false
    );

    expect(artisansList.register(artisan)).toBe(
      "Registration done successfully"
    );
  });

  test("Register artisans who do not meet the sustainability criteria", () => {
    const artisan = new Artisans(
      "Hotel Kairos",
      "83 98801-0316",
      "R. Dr. Vasconcelos, 78",
      "Campina Grande",
      "PB",
      "",
      "",
      ""
    );

    expect(artisansList.register(artisan)).toBe("Registration not completed");
  });

  test("Show list of artisans", () => {
    expect(artisansList.getListArtisans().length).toBeGreaterThan(0);
  });

  test("Show cities with registered artisans", () => {
    const result = [{ city: "João Pessoa" }, { city: "Campina Grande" }];
    expect(artisansList.getCity()).toEqual(result);
  });
});
