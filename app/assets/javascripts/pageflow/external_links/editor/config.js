pageflow.editor.registerPageConfigurationMixin(pageflow.externalLinks.pageConfigurationMixin);

pageflow.editor.registerSideBarRouting({
  router: pageflow.externalLinks.SidebarRouter,
  controller: pageflow.externalLinks.SidebarController
});

pageflow.editor.registerFileSelectionHandler('externalLinks.site', pageflow.externalLinks.SiteFileSelectionHandler);

pageflow.editor.registerMainMenuItem({
  translationKey: 'pageflow.external_links.manage_sites',
  path: '/external_links/sites'
});

pageflow.editor.addInitializer(function() {
  pageflow.externalLinks.sites = new pageflow.externalLinks.SitesCollection();
  pageflow.externalLinks.sites.ensureFetched();
});
