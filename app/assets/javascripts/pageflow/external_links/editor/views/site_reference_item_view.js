pageflow.externalLinks.SiteReferenceItemView = Backbone.Marionette.ItemView.extend({
  template: 'pageflow/external_links/editor/templates/site_reference_item',

  tagName: 'li',
  className: 'external_links_site_reference',

  ui: {
    thumbnail: '.thumbnail',
    title: '.title'
  },

  events: {
    'click .remove': function() {
      this.model.destroy();
      return false;
    },

    'click .edit': function() {
      pageflow.editor.navigate('/external_links/sites/' + this.model.get('site').id + '/?page=' + this.options.page.id + '&return_to=page', {trigger: true});
      return false;
    }
  },

  onRender: function() {
    this.subview(new pageflow.FileThumbnailView({
      el: this.ui.thumbnail,
      model: this.model.get('site').thumbnailFile()
    }));

    this.ui.title.text(this.model.get('site').get('title') || I18n.t('pageflow.external_links.editor.views.site_item_reference_view.unknown'));
  },
});