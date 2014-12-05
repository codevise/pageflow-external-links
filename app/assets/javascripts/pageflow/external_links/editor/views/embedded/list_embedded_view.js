pageflow.externalLinks.ListEmbeddedView = Backbone.Marionette.View.extend({
  render: function() {
    this.subview(new pageflow.CollectionView({
      el: this.$el.find('div'),
      collection: this.model.externalSiteReferences(),
      itemViewConstructor: pageflow.externalLinks.ListItemEmbeddedView
    }));

    this.listenTo(this.model.externalSiteReferences(), 'add remove', function() {
      this.refreshScroller();
    });

    this.refreshScroller();

    return this;
  },

  refreshScroller: function() {
    this.$el.data('scroller').refresh();
    this.$el.data('scroller').checkDisable();
  }
});