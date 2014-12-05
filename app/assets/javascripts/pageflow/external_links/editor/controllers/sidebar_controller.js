pageflow.externalLinks.SidebarController = Backbone.Marionette.Controller.extend({
  initialize: function(options) {
    this.region = options.region;
  },

  sites: function(pageId) {
    var page = pageflow.pages.get(pageId);
    var referer = page ? '/pages/' + page.id + '/links ' : '/';

    this.region.show(new pageflow.BackButtonDecoratorView({
      referer: referer,
      view: new pageflow.externalLinks.SitesView({
        selectionHandler: page && new pageflow.externalLinks.SiteSelectionHandler({
          page: page
        }),
        page: page,
        referer: referer
      })
    }));
  },

  site: function(id, pageId, returnTo) {
    var page = pageflow.pages.get(pageId);
    var region = this.region;

    pageflow.externalLinks.sites.ensureFetched().then(function() {
      region.show(new pageflow.externalLinks.EditSiteView({
        model: pageflow.externalLinks.sites.get(id),
        page: page,
        returnTo: returnTo
      }));
    });
  }
});