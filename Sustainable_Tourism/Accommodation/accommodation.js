const listAccommodations = require("./listAccommodations.json");
const GeneralRegistration = require("../generalRegistration.js")
const { v4: uniqueId } = require("uuid");

class Accommodation extends GeneralRegistration  {
  #id;
  affiliationONG;
  sustainabilityCertificate;
  sustainableActions; 

  constructor( name,contact,address,city,state,affiliationONG,sustainabilityCertificate,sustainableActions) {
    super(name, contact, address, city, state)
    this.affiliationONG = affiliationONG,
    this.sustainabilityCertificate = sustainabilityCertificate,
    this.sustainableActions = sustainableActions;
  }
}

class AccommodationList {
  registeredAccommodations = listAccommodations;

  register(sustainableAccommodation) {
    const {
      affiliationONG,
      sustainabilityCertificate,
      sustainableActions,
    } = sustainableAccommodation;


    if (
      affiliationONG ||
      sustainabilityCertificate ||
      sustainableActions
    ) {
      const id = uniqueId();
      this.registeredAccommodations.push({ id, ...sustainableAccommodation });
      console.log(
        `Registration completed successfully! To edit your registration, enter your identification number: ${id}.`
      );
      return "Registered accommodation"
    } else {
      console.log("Your hosting does not fit the sustainable accommodation profile.");
      return "unregistered accommodation"
    }
  }

  getAllList() {
    return this.registeredAccommodations;
  }

  getCity() {
   return this.registeredAccommodations.reduce((arr, elem) => {
      const cityExists = arr.some((item) => item.city === elem.city);

      if (!cityExists) arr.push({ city: elem.city });

      return arr;
    }, []);


  }
}

module.exports = { Accommodation, AccommodationList };
