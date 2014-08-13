# Pageflow External Links

Page type to display links to external pages.

## Installation

Add this line to your application's `Gemfile`:

    gem 'pageflow-external-links'

Register the page type inside the configure block in `config/initializers/pageflow.rb`

    Pageflow.configure do |config|
      config.register_page_type(Pageflow::ExternalLinks::PageType.new)
    end

Include javascripts and stylesheets:

    # app/assets/javascripts/application.js
    //= require "pageflow/external_links"

    # app/assets/javascripts/pageflow/editor.js
    //= require pageflow/external_links/editor

    # app/assets/stylesheets/application.scss.css
    @import "pageflow/external_links";

Mount the routes in `config/routes.rb`:

    authenticated do
      mount Pageflow::ExternalLinks::Engine, :at => '/external_links'
    end

Install dependencies:

    bundle install

Copy migrations of pageflow-external-links into your project:

    bundle exec rake pageflow-external-links_engine:install:migrations

Migrate the database:

    bundle exec rake db:migrate

Restart the application server.
