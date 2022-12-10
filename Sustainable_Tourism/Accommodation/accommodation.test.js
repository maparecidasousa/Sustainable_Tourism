const { Accommodation, AccommodationList } = require("./accommodation.js");

describe("Accommodation class test", () => {
  const accommodationList = new AccommodationList();

  test("Register accommodation that meets sustainability criteria", () => {
    const accommodation = new Accommodation(
      "Hotel Kairos",
      "83 98801-0316",
      "R. Dr. Vasconcelos, 78",
      "Campina Grande",
      "PB",
      "",
      "",
      ["Opção de reutilizar toalhas", "Informações sobre a cultura da região "]
    );

    expect(accommodationList.register(accommodation)).toBe(
      "Registered accommodation"
    );
  });

  test("Register accommodations that do not meet sustainability criteria", () => {
    const accommodation = new Accommodation(
      "Hotel Kairos",
      "83 98801-0316",
      "R. Dr. Vasconcelos, 78",
      "Campina Grande",
      "PB",
      "",
      "",
      ""
    );

    expect(accommodationList.register(accommodation)).toBe(
      "unregistered accommodation"
    );
  });

  test("Show list of sustainable accommodations", () => {
    expect(accommodationList.getAllList().length).toBeGreaterThan(0);
  });

  test("Show cities with registered sustainable accommodations", () => {
    const result = [{ city: "João Pessoa" }, { city: "Campina Grande" }];
    expect(accommodationList.getCity()).toEqual(result);
  });
});
