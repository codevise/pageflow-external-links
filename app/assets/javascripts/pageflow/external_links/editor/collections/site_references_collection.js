pageflow.externalLinks.SiteReferencesCollection = Backbone.Collection.extend({
  model: pageflow.externalLinks.SiteReference,

  comparator: function(chapter) {
    return chapter.get('position');
  },

  saveOrder: function() {
    // no op
  }
});