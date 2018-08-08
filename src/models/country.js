const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const Country = function () {
  this.countryObjects = null;
};

Country.prototype.bindEvents = function () {
    this.getData();

    PubSub.subscribe("SelectView:change", (evt) => {
      const selectedIndex = evt.detail;
      this.publishCountryInfo(selectedIndex);
    })
};


Country.prototype.getData = function () {
  const request = new Request("https://restcountries.eu/rest/v2/all");
  request.get((data) => {
    this.countryObjects = data;
    PubSub.publish('Country:countries-ready', this.countryObjects);
  });
};

Country.prototype.publishCountryInfo = function (index) {
  const selectedCountry = this.countryObjects[index];
  PubSub.publish("Country:selected-country", selectedCountry);
};

module.exports = Country;
