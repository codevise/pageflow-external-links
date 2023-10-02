require 'pageflow-public-i18n'

module Pageflow
  module ExternalLinks
    class Engine < Rails::Engine
      isolate_namespace Pageflow::ExternalLinks

      config.i18n.load_path += Dir[config.root.join('config', 'locales', '**', '*.yml').to_s]

      if Rails.respond_to?(:autoloaders)
        lib = root.join('lib')

        config.autoload_paths << lib
        config.eager_load_paths << lib

        initializer 'pageflow_external_links.autoloading' do
          Rails.autoloaders.main.ignore(
            lib.join('generators'),
            lib.join('pageflow-external-links.rb'),
            lib.join('pageflow/external_links/version.rb')
          )
        end
      else
        config.autoload_paths << File.join(config.root, 'lib')
      end

      config.generators do |g|
        g.test_framework :rspec,:fixture => false
        g.fixture_replacement :factory_girl, :dir => 'spec/factories'
        g.assets false
        g.helper false
      end
    end
  end
end
