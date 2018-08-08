const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const Country = function () {
  this.countryObject = null;
};

Country.prototype.getData = function () {
  const request = new Request("https://restcountries.eu/rest/v2/all");
  request.get((data) => {
    this.countryObject = data;
    PubSub.publish('Country:countries-ready', this.countryObject);
  })
};

module.exports = Country;
