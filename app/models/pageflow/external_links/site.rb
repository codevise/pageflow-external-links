module Pageflow
  module ExternalLinks
    class Site < ActiveRecord::Base
      belongs_to :revision

      before_save :ensure_perma_id

      def copy_to(revision)
        site = dup
        site.revision = revision
        site.save!
      end

      def ensure_perma_id
        self.perma_id ||= (Site.maximum(:perma_id) || 0) + 1
      end

      def self.all_for_revision(revision)
        where(revision_id: revision.id)
      end

      def self.from_perma_ids(revision, perma_ids)
        return [] if revision.blank? || perma_ids.blank?

        perma_ids.map do |perma_id|
          find_by_revision_id_and_perma_id(revision.id, perma_id)
        end.compact
      end
    end
  end
end
