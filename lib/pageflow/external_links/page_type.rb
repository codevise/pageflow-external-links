module Pageflow
  module ExternalLinks
    class PageType < Pageflow::PageType
      name 'external_links'

      def revision_components
        [Site]
      end

      def view_helpers
        [SitesHelper]
      end
    end
  end
end
