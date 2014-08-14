module Pageflow
  module ExternalLinks
    module SitesHelper
      def external_links_site_css_class(site)
        ['link-item', site.title.blank? && site.description.blank? ? 'no_text' : ''].compact.join(' ')
      end
    end
  end
end
