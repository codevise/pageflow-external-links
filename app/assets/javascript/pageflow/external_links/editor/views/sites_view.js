pageflow.externalLinks.SitesView = Backbone.Marionette.ItemView.extend({
  className: 'manage_external_sites',
  template: 'pageflow/external_links/editor/templates/sites',

  events: {
    'click .add': function() {
      var site = pageflow.externalLinks.sites.create({title: ''});
      var options = this.options;

      site.once('sync', function() {
        var query = options.page ? '/?page=' + options.page.id + '&return_to=sites' : '';
        pageflow.editor.navigate('external_links/sites/' + site.id + query, {trigger: true});
      });
    }
  },

  onRender: function() {
    pageflow.externalLinks.sites.ensureFetched();

    this.$el.append(this.subview(new pageflow.CollectionView({
      tagName: 'ul',
      className: 'sites',
      collection: pageflow.externalLinks.sites,
      itemViewConstructor: pageflow.externalLinks.SiteItemView,
      itemViewOptions: {
        selectionHandler: this.options.selectionHandler,
        referer: this.options.referer,
        page: this.options.page
      },
      blankSlateViewConstructor: Backbone.Marionette.ItemView.extend({
        template: 'pageflow/external_links/editor/templates/sites_blank_slate'
      })
    })).el);
  }
});
