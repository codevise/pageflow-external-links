pageflow.externalLinks.SiteSelectionHandler = function(options) {
  this.call = function(site) {
    options.page.configuration.externalSiteReferences().add({
      site: site
    });
  };
};