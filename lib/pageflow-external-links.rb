require 'pageflow/external_links/engine'

module Pageflow
  module ExternalLinks
    def self.page_type
      ExternalLinks::PageType.new
    end
  end
end
