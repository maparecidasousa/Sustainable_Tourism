const  {AccommodationList}  = require("./Accommodation/accommodation.js");
const  {ArtisansList}  = require("./Artisan/artisans.js");
const TouristOptions = require("./Tourist/tourist.js");


const accommodation = new AccommodationList();
const artisan = new ArtisansList();
const tourist = new TouristOptions();

const getAccommodationList = accommodation.getAllList();
const getListArtisansList = artisan.getListArtisans();

const cities = accommodation.getCity();
const chosenCity = tourist.chooseDestination(cities);

tourist.homePage(cities[chosenCity], getAccommodationList, getListArtisansList );

