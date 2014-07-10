pageflow.externalLinks.pageConfigurationMixin = {
  externalSiteReferences: function() {
    var configuration = this;

    this._externalSiteReferences = this._externalSiteReferences || create();
    return this._externalSiteReferences;

    function create() {
      var collection = new pageflow.externalLinks.SiteReferencesCollection();

      pageflow.externalLinks.sites.ensureFetched().then(function() {
        collection.add(siteReferenceAttributes());

        configuration.listenTo(collection, 'add remove sort', function() {
          configuration.set('linked_external_site_perma_ids', _.map(collection.pluck('site'), function(site) {
            return site.get('perma_id');
          }));
        });
      });

      return collection;
    }

    function siteReferenceAttributes() {
      return _.compact(_.map(referencedSitePermaIds(), function(permaId) {
        var site = pageflow.externalLinks.sites.getByPermaId(permaId);

        return site && {
          site: site
        };
      }));
    }

    function referencedSitePermaIds() {
      return configuration.get('linked_external_site_perma_ids') || [];
    }
  }
};