ENV['RAILS_ENV'] ||= 'test'
ENV['PAGEFLOW_PLUGIN_ENGINE'] = 'pageflow_external_links'

require 'pageflow/support'
Pageflow::Dummy.setup

require 'rspec/rails'

engine_root = File.join(File.dirname(__FILE__), '..')
Dir[File.join(engine_root, 'spec/support/**/*.rb')].each { |file| require(file) }

RSpec.configure do |config|
  config.use_transactional_fixtures = true
end
