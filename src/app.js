const Country = require("./models/country.js");

document.addEventListener('DOMContentLoaded', () => {

  const country = new Country();
  country.getData();


});
