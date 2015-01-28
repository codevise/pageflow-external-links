pageflow.externalLinks.SiteItemView = Backbone.Marionette.ItemView.extend({
  tagName: 'li',
  template: 'pageflow/external_links/editor/templates/site_item',

  mixins: [pageflow.loadable],

  ui: {
    title: '.title',
    selectButton: '.select',
    thumbnail: '.thumbnail'
  },

  events: {
    'click': function() {
      if (!this.model.isNew()) {
        var query = this.options.page ? '/?page=' + this.options.page.id + '&return_to=sites' : '';
        pageflow.editor.navigate('/external_links/sites/' + this.model.get('id') + query, {trigger: true});
      }
      return false;
    },

    'click .select': function() {
      if (this.options.selectionHandler) {
        this.options.selectionHandler.call(this.model);
        pageflow.editor.navigate(this.options.referer, {trigger: true});
      }
      return false;
    }
  },

  onRender: function() {
    this.update();

    this.subview(new pageflow.FileThumbnailView({
      el: this.ui.thumbnail,
      model: this.model.getReference('thumbnail', pageflow.imageFiles)
    }));
  },

  update: function() {
    this.ui.title.text(this.model.get('title') || I18n.t('pageflow.external_links.editor.views.site_item_view.unknown'));
    this.ui.selectButton.toggle(!!this.options.selectionHandler);
  }
});
