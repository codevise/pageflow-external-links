# Pageflow External Links

[![Gem Version](https://badge.fury.io/rb/pageflow-external-links.svg)](http://badge.fury.io/rb/pageflow-external-links)

Page type to display links to external pages.

## Installation

Add this line to your application's `Gemfile`:

    gem 'pageflow-external-links'

Register the page type inside the configure block in `config/initializers/pageflow.rb`

    Pageflow.configure do |config|
      config.register_page_type(Pageflow::ExternalLinks::PageType.new)
    end

Include javascripts and stylesheets:

    # app/assets/javascripts/pageflow/application.js
    //= require pageflow/external_links

    # app/assets/javascripts/pageflow/editor.js
    //= require pageflow/external_links/editor

    # app/assets/stylesheets/pageflow/application.css.scss
    @import "pageflow/external_links";

    # app/assets/stylesheets/pageflow/editor.css.scss
    @import "pageflow/external_links/editor";

Mount the routes in `config/routes.rb`:

    authenticated do
      mount Pageflow::ExternalLinks::Engine, :at => '/external_links'
    end

Install dependencies:

    bundle install

Copy migrations of pageflow-external-links into your project:

    bundle exec rake pageflow_external_links:install:migrations

Migrate the database:

    bundle exec rake db:migrate

Restart the application server.

## Troubleshooting

If you run into problems while installing the page type, please also refer to the
[Troubleshooting](https://github.com/codevise/pageflow/wiki/Troubleshooting) wiki 
page in the [Pageflow  repository](https://github.com/codevise/pageflow). If that 
doesn't help, consider 
[filing an issue](https://github.com/codevise/pageflow-external-links/issues).

## Contributing Locales

Edit the translations directly on the
[pageflow-external-links](http://www.localeapp.com/projects/public?search=pageflow-external-links)
locale project.
