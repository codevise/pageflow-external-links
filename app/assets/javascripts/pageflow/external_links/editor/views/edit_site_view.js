pageflow.externalLinks.EditSiteView = Backbone.Marionette.Layout.extend({
  template: 'pageflow/external_links/editor/templates/edit_site',
  className: 'edit_external_site',

  mixins: [pageflow.failureIndicatingView],

  regions: {
    formContainer: '.form_container'
  },

  ui: {
    backButton: 'a.back'
  },

  events: {
    'click a.back': 'goBack',
    'click a.destroy': 'destroy',
  },

  onRender: function() {
    var options = this.options;
    var configurationEditor = new pageflow.ConfigurationEditorView({
      model: this.model
    });

    configurationEditor.tab('general', function() {
      this.input('url', pageflow.TextInputView, {
        required: true
      });
      this.input('open_in_new_tab', pageflow.CheckBoxInputView);
      this.input('thumbnail', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        fileSelectionHandler: 'externalLinks.site',
        fileSelectionHandlerOptions: {
          pageId: options.page && options.page.id,
          returnTo: options.returnTo
        },
        imagePositioning: false
      });
      this.input('title', pageflow.TextInputView, {
        required: true
      });
      this.input('description', pageflow.TextAreaInputView, {size: 'short'});
    });

    if (this.options.returnTo === 'page' && this.options.page) {
      this.ui.backButton.text(I18n.t('pageflow.external_links.editor.views.edit_site.back'));
    }

    this.formContainer.show(configurationEditor);
  },

  destroy: function() {
    if (confirm(I18n.t('pageflow.external_links.editor.views.edit_site.confirm_destroy'))) {
      this.model.destroy();
      this.goBack();
    }
  },

  goBack: function() {
    if (this.options.returnTo === 'page' && this.options.page) {
      pageflow.editor.navigate('/pages/' + this.options.page.id + '/links', {trigger: true});
    }
    else {
      var query = this.options.page ? '?page=' + this.options.page.id : '';
      pageflow.editor.navigate('/external_links/sites' + query, {trigger: true});
    }
  }
});