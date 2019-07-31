module Pageflow
  module ExternalLinks
    module SitesHelper
      include RevisionFileHelper

      def external_links_site_css_class(site)
        ['link-item', site.title.blank? && site.description.blank? ? 'no_text' : ''].compact.join(' ')
      end


      def external_links_site_thumbnail_css_class(site)
        classes = ['link-thumbnail']

        if file = find_file_in_entry(ImageFile, site.thumbnail)
          classes << file_thumbnail_css_class(file, :link_thumbnail_large)
        end

        classes.join(' ')
      end
    end
  end
end
