PetBnB.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'results': 'results',
    'listings/new': 'newListing',
    'listings/:id': 'listingShow',
    'profile': 'profile',
    'users/:id': 'userShow'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this._coords = {};
  },

  home: function () {
    var homeView = new PetBnB.Views.HomeView();
  },

  results: function () {
    var resultsView = new PetBnB.Views.ResultsView({
      coords: this._coords
    });
    this._swapView(resultsView);
  },

  listingShow: function (id) {
    var listing = PetBnB.listings.getOrFetch(id);
    var listingShowView = new PetBnB.Views.ListingShowView({
      model: listing
    });
    this._swapView(listingShowView);
  },

  newListing: function () {
    var listing = new PetBnB.Models.Listing();
    var newListingView = new PetBnB.Views.NewListingView({
      model: listing
    });
    this._swapView(newListingView);
  },

  profile: function () {
    var user = PetBnB.currentUser;
    var profileView = new PetBnB.Views.ProfileView({
      model: user
    });
    this._swapView(profileView);
  },

  userShow: function (id) {
    var user = new PetBnB.Models.User({ id: id });
    user.fetch();
    var userShowView = new PetBnB.Views.UserShowView({
      model: user
    });
    this._swapView(userShowView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.$el);
    this._currentView = view;
    view.render();
  }
});
