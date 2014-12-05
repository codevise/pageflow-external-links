pageflow.externalLinks.SiteFileSelectionHandler = function(options) {
  this.call = function(file) {
    pageflow.externalLinks.sites.ensureFetched().then(function() {
      var site = pageflow.externalLinks.sites.get(options.id);
      site.setReference(options.attributeName, file);
    });
  };

  this.getReferer = function() {
    var query = (options.pageId && options.returnTo) ? '/?page=' + options.pageId + '&return_to=' + options.returnTo : '';
    return '/external_links/sites/' + options.id + query;
  };
};