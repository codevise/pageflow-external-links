module Pageflow
  module ExternalLinks
    class PageType < Pageflow::PageType
      name 'external_links'

      def revision_components
        [Site]
      end
    end
  end
end
