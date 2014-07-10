module Pageflow
  module ExternalLinks
    class SitesController < ActionController::Base
      respond_to :json

      def index
        @entry = Entry.find(params[:entry_id])

        respond_with(Site.all_for_revision(@entry.draft))
      end

      def create
        @entry = Entry.find(params[:entry_id])
        site = Site.all_for_revision(@entry.draft).create!(site_params)

        respond_with(site)
      end

      def update
        site = Site.find(params[:id])
        site.update(site_params)

        respond_with(site)
      end

      def destroy
        site = Site.find(params[:id])
        site.destroy

        respond_with(site)
      end

      protected

      def site_params
        params.require(:site).permit(:url, :thumbnail, :title, :description, :open_in_new_tab)
      end
    end
  end
end
