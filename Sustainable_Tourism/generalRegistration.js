class GeneralRegistration {
    #id;
    name;
    contact;
    address;
    city;
    state;
    
    constructor( name,contact,address,city,state) {
      this.name = name,
      this.contact = contact,
      this.address = address,
      this.city = city,
      this.state = state
    }
  }


  module.exports = GeneralRegistration ;
  