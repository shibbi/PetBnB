PetBnB.Collections.Listings = Backbone.Collection.extend({
  url: 'api/search',

  model: PetBnB.Models.Listing,

  getOrFetch: function (id) {
    var listing = this.get(id);
    if (!listing) {
      listing = new PetBnB.Models.Listing({ id: id });
      listing.fetch({
        success: function () {
          this.add(listing);
        }.bind(this)
      });
    } else {
      listing.fetch();
    }

    return listing;
  }
});
