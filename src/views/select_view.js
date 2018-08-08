const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const SelectVeiw = function (element){
  this.element = element;

}

SelectVeiw.prototype.bindEvents = function () {
  PubSub.subscribe('Country:countries-ready', (event) => {
    const countriesArray = event.detail;
    console.log(countriesArray);

  })
};

module.exports = SelectVeiw;
