const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const CountryInfoView = function (container) {
  this.container = container;
}

CountryInfoView.prototype.bindEvents = function () {
  PubSub.subscribe("Country:selected-country", (evt) => {
      const country = evt.detail;
      this.render(country);
  })
};

CountryInfoView.prototype.render = function (country) {
  this.container.innerHTML = '';
  const countryName = country.name;
  this.renderName(countryName);

  const countryFlag = country.flag;
  this.renderFlag(countryFlag);

  const countryRegion = country.region;
  this.renderRegion(countryRegion);
};

CountryInfoView.prototype.renderName = function (countryName) {
  const countryNameElement = document.createElement("h2");
  countryNameElement.textContent = countryName;
  this.container.appendChild(countryNameElement);
};

CountryInfoView.prototype.renderFlag = function (countryFlag) {
  const countryFlagElement = document.createElement("img");
  // countryFlagElement.classList.add("medium-image");
  countryFlagElement.src = countryFlag;
  this.container.appendChild(countryFlagElement);
};

CountryInfoView.prototype.renderRegion = function (countryRegion) {
  const regionTitle = document.createElement("h3");
  regionTitle.textContent = "Region:";
  this.container.appendChild(regionTitle);

  const countryRegionElement = document.createElement("p");
  countryRegionElement.textContent = countryRegion;
  this.container.appendChild(countryRegionElement);
};

module.exports = CountryInfoView;
