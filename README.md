# Pageflow External Links

[![Gem Version](https://badge.fury.io/rb/pageflow-external-links.svg)](http://badge.fury.io/rb/pageflow-external-links)
[![Build Status](https://travis-ci.org/codevise/pageflow-external-links.svg?branch=master)](https://travis-ci.org/codevise/pageflow-external-links)

Page type to display links to external pages.

* [Theme Settings](http://codevise.github.io/pageflow-external-links/theme/master/)

## Installation

Add this line to your application's `Gemfile`:

    gem 'pageflow-external-links'

Register the page type inside the configure block in `config/initializers/pageflow.rb`

    Pageflow.configure do |config|
      config.plugin(Pageflow::ExternalLinks.plugin)
    end

Include javascripts and stylesheets:

    # app/assets/javascripts/pageflow/application.js
    //= require pageflow/external_links

    # app/assets/javascripts/pageflow/editor.js
    //= require pageflow/external_links/editor

    # app/assets/stylesheets/pageflow/application.scss
    @import "pageflow/external_links";

    # app/assets/stylesheets/pageflow/editor.scss
    @import "pageflow/external_links/editor";

If you are using Sass < 3.4, import the legacy theme:

    # app/assets/stylesheets/pageflow/themes/default.scss
    @import "pageflow/external_links/themes/legacy";

With Sass 3.4 or newer, you can use the default theme:

    # app/assets/stylesheets/pageflow/themes/default.scss
    @import "pageflow/external_links/themes/default";

Mount the routes in `config/routes.rb`:

    authenticated do
      mount Pageflow::ExternalLinks::Engine, at: '/external_links'
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
[pageflow-external-links](http://www.localeapp.com/projects/public?search=tf/pageflow-external-links)
locale project.
