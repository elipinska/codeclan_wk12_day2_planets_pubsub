const PubSub = require('../helpers/pub_sub.js');

const ClickView = function(list) {
  this.list = list;
};

ClickView.prototype.bindEvents = function() {


 this.list.forEach((listItem) => {
   listItem.addEventListener('click', (evt) => {
     const clickedPlanetName = evt.target.id;
     PubSub.publish('ClickView:click', clickedPlanetName);
   });
 });


};

module.exports = ClickView;
