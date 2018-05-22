const PubSub = require('../helpers/pub_sub.js');
const planets = require('../data/planets.js');

const Planets = function(){
  this.planets = planets;
}


Planets.prototype.bindEvents = function(){
  PubSub.subscribe('ClickView:click', (evt) => {
    const clickedPlanetName = evt.detail;
    this.publishPlanetDetail(clickedPlanetName);

  });
};

Planets.prototype.publishPlanetDetail = function(planetName){

  const planetObject = this.planets.find((planetObject) => {
    return planetObject.name === planetName;
  });
  PubSub.publish('Planets:clicked-planet-ready', planetObject);
};

module.exports = Planets;
