pageflow.externalLinks.SiteReference = Backbone.Model.extend({
  modelName: 'siteReference',

  initialize: function() {
    this.listenTo(this.get('site'), 'destroy', this.destroy);
  }
});