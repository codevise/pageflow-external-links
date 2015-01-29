require 'pageflow/external_links/engine'

module Pageflow
  module ExternalLinks
    def self.page_type
      ExternalLinks::PageType.new
    end

    def self.plugin
      ExternalLinks::Plugin.new
    end
  end
end
