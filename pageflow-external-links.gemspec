# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'pageflow/external_links/version'

Gem::Specification.new do |spec|
  spec.name          = 'pageflow-external-links'
  spec.version       = Pageflow::ExternalLinks::VERSION
  spec.authors       = ['Codevise Solutions Ltd']
  spec.email         = ['info@codevise.de']
  spec.summary       = 'Pageflow Page Type for links to external sites'
  spec.homepage      = 'https://github.com/codevise/pageflow-external-links'
  spec.license       = 'MIT'

  spec.files         = `git ls-files`.split($/)
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  spec.required_ruby_version = '~> 2.1'

  spec.add_runtime_dependency 'pageflow', ['>= 14', '< 16']
  spec.add_runtime_dependency 'pageflow-public-i18n', '~> 1.0'

  spec.add_development_dependency 'bundler', ['>= 1.0', '< 3']
  spec.add_development_dependency 'pageflow-support', ['>= 14', '< 16']
  spec.add_development_dependency 'rake', '~> 12.0'
  spec.add_development_dependency 'rspec-rails', '~> 3.0'

  # Semantic versioning rake tasks
  spec.add_development_dependency 'semmy', '~> 1.0'
end
