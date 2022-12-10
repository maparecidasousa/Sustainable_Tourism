const readline = require("readline-sync");

class TouristOptions {
  options(text) {
    return parseInt(readline.question(text));
  }

  chooseDestination(cities) {
    console.table(cities);
    return this.options(`
  Welcome!
  What is your destiny?
  
  Enter the number referring to your destination: 
  
  `);
  }

  homePage(city, accommodations, artisans) {
    const choose = this.options(`
  -------------------------------------------------------------
  
  What do you want to look for in this destination?
     
  1 - Search accommodation
  2 - Search artisans

  Enter 1 or 2 to choose an option:
  
  `);

    if (choose === 1) {
      const result = this.filterCity(city.city, accommodations);
      console.table(result, ["name", "address"]);
      const choose2 = this.options(`
  Select accommodation
      
  Enter the accommodation number

  `);
      console.table([result[choose2]], ["name", "sustainableActions"]);
    }
    if (choose === 2) {
      const result = this.filterCity(city.city, artisans);
      console.table(result, ["product"]);
      const choose2 = this.options(`
  Select artisan
      
  Enter the artisan number

  `);
      console.table([result[choose2]], ["name", "product"]);
    }
  }

  filterCity(city, list) {
    return list.filter((obj) => {
      return obj.city === city;
    });
  }
}

module.exports = TouristOptions;
