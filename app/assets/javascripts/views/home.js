PetBnB.Views.HomeView = Backbone.View.extend({
  template: _.template(''),

  events: {
    'change #checkin': 'checkDates',
    'change #checkout': 'checkDates',
    'click .btn.search': 'search',
    'click .btn.listings': 'moreListings'
  },

  initialize: function () {
    this.$el = $('body');

    this.setupAutocomplete();
  },

  setupAutocomplete: function () {
    var input = $('#homepage-searchbox')[0];
    this._searchBox = new google.maps.places.SearchBox(input);
    google.maps.event.addListener(this._searchBox, 'places_changed',
                                 this.search.bind(this));
  },

  // event handlers
  checkDates: function () {
    PetBnB.checkDates();
  },

  search: function (event) {
    event && event.preventDefault();

    if (this._searchBox.getPlaces()) {
      PetBnB.goToResults({
        searchBox: this._searchBox
      });
    }
  },

  moreListings: function () {
    Backbone.history.navigate('results', { trigger: true });
  }
});
