pageflow.externalLinks.SidebarRouter = Backbone.Marionette.AppRouter.extend({
  appRoutes: {
    'external_links/sites': 'sites',
    'external_links/sites?page=:page_id': 'sites',
    'external_links/sites/:id': 'site',
    'external_links/sites/:id/?page=:page_id&return_to=:return_to': 'site',
  }
});