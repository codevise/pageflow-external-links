module Pageflow
  module ExternalLinks
    class Site < ActiveRecord::Base
      include RevisionComponent

      def thumbnail_file
        ImageFile.find_by_id(thumbnail)
      end
    end
  end
end
