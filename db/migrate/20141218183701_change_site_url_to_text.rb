class ChangeSiteUrlToText < ActiveRecord::Migration
  def change
    change_column(:pageflow_external_links_sites, :url, :text)
  end
end
