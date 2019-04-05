import Route from '@ember/routing/route';

export default Route.extend({

  // We're going to add our Scientists model here:
  model(){
    return ["Marie Forleo", "Tranvis Newman", "Carl Beaker"];
  }
});
