module Pageflow
  module ExternalLinks
    class Site < ActiveRecord::Base
      include RevisionComponent
    end
  end
end
