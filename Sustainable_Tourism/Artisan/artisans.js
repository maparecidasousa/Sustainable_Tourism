const listArtisans = require("./listArtisans.json");
const GeneralRegistration = require("../generalRegistration.js")
const { v4: uniqueId } = require("uuid");

class Artisans extends GeneralRegistration {
  #id;
  product;
  openingHours;
  damageNature;

  constructor(name,product,contact,address,city,state,openingHours,damageNature
  ) {
    super(name,contact, address,city, state)
      this.product = product,
      this.openingHours = openingHours,
      this.damageNature = damageNature;
  }
}

class ArtisansList {
  registeredArtisans = listArtisans;
  constructor() {}

  register(artisan) {
    const { damageNature } = artisan;
    if (damageNature === false) {
      const id = uniqueId();
      this.registeredArtisans.push({ id, ...artisan });
      console.log(
        `Registration completed successfully! To edit your registration, enter your identification number:${id}.`
      );
      return "Registration done successfully"

    } else {
      console.log(
        "You do not fit the profile, because the production of your product has caused some kind of damage to nature"
      );
      return "Registration not completed"

    }
  }

  getListArtisans() {
    return this.registeredArtisans;
  }

  getCity() {
    return this.registeredArtisans.reduce((arr, elem) => {
       const artisanExists = arr.some((item) => item.city === elem.city);
 
       if (!artisanExists) arr.push({ city: elem.city });
 
       return arr;
     }, []);}
 
}

module.exports = { Artisans, ArtisansList };
