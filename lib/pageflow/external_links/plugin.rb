module Pageflow
  module ExternalLinks
    class Plugin < Pageflow::Plugin
      def configure(config)
        config.help_entries.register('pageflow.external_links.help_entries.sites', priority: 49)
      end
    end
  end
end
