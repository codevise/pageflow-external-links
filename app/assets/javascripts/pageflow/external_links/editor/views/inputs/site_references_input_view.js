pageflow.externalLinks.SiteReferencesInputView = Backbone.Marionette.ItemView.extend({
  mixins: [pageflow.inputView],

  template: 'pageflow/external_links/editor/templates/inputs/site_reference',
  className: 'external_links_site_references_input',

  ui: {
    sites: 'ul.sites'
  },

  events: {
    'click .add_reference': function() {
      pageflow.editor.navigate(
        '/external_links/sites?page=' + this.model.page.id,
        {trigger: true}
      );
      return false;
    }
  },

  onRender: function() {
    this.subview(new pageflow.SortableCollectionView({
      el: this.ui.sites,
      collection: this.model.externalSiteReferences(),
      itemViewConstructor: pageflow.externalLinks.SiteReferenceItemView,
      itemViewOptions: {
        page: this.model.page
      }
    }));
  }
});