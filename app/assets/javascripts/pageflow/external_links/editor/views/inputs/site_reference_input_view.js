pageflow.externalLinks.SiteReferenceInputView = pageflow.ReferenceInputView.extend({
  choose: function() {
    return pageflow.externalLinks.selectSite();
  },

  getTarget: function(permaId) {
    return pageflow.externalLinks.sites.getByPermaId(permaId);
  }
});
