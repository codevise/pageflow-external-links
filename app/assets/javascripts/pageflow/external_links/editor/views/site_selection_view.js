pageflow.externalLinks.SiteSelectionView = Backbone.Marionette.ItemView.extend({
  className: 'external_site_selection dialog editor',
  template: 'pageflow/external_links/editor/templates/site_selection',

  mixins: [pageflow.dialogView],

  ui: {
    items: 'ul'
  },

  onRender: function() {
    var view = this;

    pageflow.externalLinks.sites.ensureFetched();

    this.subview(new pageflow.CollectionView({
      el: this.ui.items,
      collection: pageflow.externalLinks.sites,
      itemViewConstructor: pageflow.externalLinks.SiteItemView,
      itemViewOptions: {
        selectionHandler: function() {
          view.options.onSelect(this);
          view.close();
        }
      },
      blankSlateViewConstructor: Backbone.Marionette.ItemView.extend({
        template: 'pageflow/external_links/editor/templates/sites_blank_slate'
      })
    }));
  }
});

pageflow.externalLinks.SiteSelectionView.selectSite = function() {
  return $.Deferred(function(deferred) {
    var view = new pageflow.externalLinks.SiteSelectionView({
      onSelect: deferred.resolve
    });

    view.on('close', function() {
      deferred.reject();
    });

    pageflow.app.dialogRegion.show(view.render());
  }).promise();
};
