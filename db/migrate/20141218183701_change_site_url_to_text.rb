class ChangeSiteUrlToText < ActiveRecord::Migration[4.2]
  def change
    change_column(:pageflow_external_links_sites, :url, :text)
  end
end
