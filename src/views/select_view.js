const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const SelectVeiw = function (element){
  this.element = element;

}

SelectVeiw.prototype.bindEvents = function () {
  PubSub.subscribe('Country:countries-ready', (event) => {
    const countriesArray = event.detail;
    this.populateDropDown(countriesArray);
  })
};

SelectVeiw.prototype.populateDropDown = function (array) {
  array.forEach((country, index) => {
    const option = document.createElement("option");
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};
module.exports = SelectVeiw;
