const PubSub = require('../helpers/pub_sub.js');

const PlanetDetailsView = function(container){
  this.container = container;
};

PlanetDetailsView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:clicked-planet-ready', (evt) => {
    const planet = evt.detail;
    this.render(planet);
  })
};

PlanetDetailsView.prototype.render = function(planet){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${planet.name}, has an orbit of ${planet.orbit} and the day is ${planet.day} earth days. It has a surface area of ${planet.surfaceArea}, and a volume of ${planet.volume}. The gravity is ${planet.gravity} of earth's gravity. It has ${planet.moons}.`;
  const planetImage = document.createElement('img');
  planetImage.src = `${planet.image}`;
  this.container.innerHTML = '';
  this.container.appendChild(planetImage);
  this.container.appendChild(infoParagraph);
};

module.exports = PlanetDetailsView;
