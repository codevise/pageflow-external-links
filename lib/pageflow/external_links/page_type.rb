module Pageflow
  module ExternalLinks
    class PageType < Pageflow::PageType
      name 'external_links'

      def revision_components
        [ExternalLinks::Site]
      end

      def view_helpers
        [ExternalLinks::SitesHelper]
      end
    end
  end
end
