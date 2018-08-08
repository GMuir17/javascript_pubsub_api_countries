const Country = require("./models/country.js");
const SelectVeiw = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const country = new Country();
  country.bindEvents();

  const selectElement = document.querySelector('#countries')
  const selectVeiw = new SelectVeiw(selectElement);
  selectVeiw.bindEvents();


});
