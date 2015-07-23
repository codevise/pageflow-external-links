# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "pageflow-external-links"
  spec.version       = "0.3.0.alpha"
  spec.authors       = ["Tim Fischbach"]
  spec.email         = ["tfischbach@codevise.de"]
  spec.summary       = "Pageflow Page Type for links to external sites"
  spec.homepage      = "https://github.com/codevise/pageflow-external-links"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency 'pageflow', '>= 0.9.pre'

  # Using translations from rails locales in javascript code.
  spec.add_runtime_dependency 'i18n-js'

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
  spec.add_development_dependency "rspec-rails", "~> 2.0"
  spec.add_development_dependency 'factory_girl_rails'
  spec.add_development_dependency "sqlite3"
end
