window.PetBnB = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from PetBnB!');
    // this.router = new PetBnB.Routers.DemoRouter({
    //   $rootEl: $('#content')
    // });
    this.router = new PetBnB.Routers.Router({
      $rootEl: $('#content')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  PetBnB.initialize();
});
