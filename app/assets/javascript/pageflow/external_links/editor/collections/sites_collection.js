pageflow.externalLinks.SitesCollection = Backbone.Collection.extend({
  model: pageflow.externalLinks.Site,

  url: function() {
    return '/external_links/entries/' + pageflow.entry.get('id') + '/sites';
  },

  getByPermaId: function(permaId) {
    return this.findWhere({perma_id: permaId});
  },

  ensureFetched: function(callback) {
    var collection = this;

    this.fetchedPromise = this.fetchedPromise || new $.Deferred(function(deferred) {
      collection.once('sync', deferred.resolve);
      collection.fetch();
    }).promise();

    return this.fetchedPromise;
  }
});