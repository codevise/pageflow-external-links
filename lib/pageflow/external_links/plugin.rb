module Pageflow
  module ExternalLinks
    class Plugin < Pageflow::Plugin
      def configure(config)
        config.page_types.register(ExternalLinks.page_type)
        config.help_entries.register('pageflow.external_links.help_entries.sites', priority: 49)
      end
    end
  end
end
