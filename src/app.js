const Country = require("./models/country.js");
const SelectVeiw = require('./views/select_view.js');
const CountryInfoView = require('./views/country_info_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const country = new Country();
  country.bindEvents();

  const selectElement = document.querySelector('#countries')
  const selectVeiw = new SelectVeiw(selectElement);
  selectVeiw.bindEvents();

  const container = document.querySelector("#country")
  const countryInfoView = new CountryInfoView(container);
  countryInfoView.bindEvents();




});
