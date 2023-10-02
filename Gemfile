source 'https://rubygems.org'

# Specify your gem's dependencies in chart.gemspec
gemspec

if ENV['PAGEFLOW_DEPENDENCIES'] == 'experimental'
  git 'https://github.com/codevise/pageflow', branch: 'edge', glob: '**/*.gemspec' do
    gem 'pageflow'
    gem 'pageflow-support'
  end
else
  # Give a hint to Bundler to prevent endless loop
  gem 'rails', '~> 5.2.0'
end
