PetBnB.Views.ListingShowView = Backbone.View.extend({
  template: JST['listings/show'],

  className: 'listing-show',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      listing: this.model
    });
    this.$el.html(content);

    PetBnB.setDatepickers();

    return this;
  }
});
