const ClickView = require('./views/click_view.js');
const Planets = require('./models/planets.js');
const PlanetDetailsView = require('./views/planet_details_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const listItems = document.querySelectorAll('li');
  const planetList = new ClickView(listItems);
  planetList.bindEvents();

  const planetDetailsSection = document.querySelector('section.planet-details');
  const planetDetailsDisplay = new PlanetDetailsView(planetDetailsSection);
  planetDetailsDisplay.bindEvents();

  const planetsDataSource = new Planets();
  planetsDataSource.bindEvents();

});
