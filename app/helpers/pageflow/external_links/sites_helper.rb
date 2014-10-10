module Pageflow
  module ExternalLinks
    module SitesHelper
      def external_links_site_css_class(site)
        ['link-item', site.title.blank? && site.description.blank? ? 'no_text' : ''].compact.join(' ')
      end


      def external_links_site_thumbnail_css_class(site)
        classes = ['link-thumbnail']

        if file = site.thumbnail_file
          classes << file_thumbnail_css_class(file, :link_thumbnail_large)
        end

        classes.join(' ')
      end
    end
  end
end
