module PageflowExternalLinks
  class InstallGenerator < Rails::Generators::Base
    desc 'Install the Pageflow plugin and the necessary migrations.'

    def register_plugin
      inject_into_file('config/initializers/pageflow.rb',
                       after: "Pageflow.configure do |config|\n") do

        "  config.plugin(Pageflow::#{engine_name_suffix.camelize}.plugin)\n"
      end
    end

    def mount_engine
      route("mount #{engine.name}, at: '/#{engine_name_suffix}'\n")
    end

    def install_migrations
      rake "pageflow_#{engine_name_suffix}:install:migrations"
      rake 'pageflow_external_links:install:migrations'
    end

    private

    def engine_name_suffix
      engine.engine_name.gsub(/^pageflow_/, '')
    end

    def engine
      Pageflow::ExternalLinks::Engine
    end
  end
end
