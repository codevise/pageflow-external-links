require 'spec_helper'
require 'pageflow/lint'

Pageflow::Lint.page_type(Pageflow::ExternalLinks.page_type)

module Pageflow
  module ExternalLinks
    describe 'built in video page type', type: :helper do
      include RenderPageTestHelper

      it 'renders links to referenced sites' do
        revision = FactoryBot.create(:revision, :published)
        Site.create!(revision: revision,
                     perma_id: 10,
                     url: 'https://example.com',
                     title: 'Example')

        page = FactoryBot.create(:page,
                                 template: 'external_links',
                                 revision: revision,
                                 configuration: {
                                   linked_external_site_perma_ids: [10]
                                 })

        html = render_page(page)

        expect(html).to have_selector('.link-title', text: 'Example')
      end

      it 'can handle sites with missing url' do
        revision = FactoryBot.create(:revision, :published)
        Site.create!(revision: revision,
                     perma_id: 10,
                     url: nil,
                     title: 'Example')

        page = FactoryBot.create(:page,
                                 template: 'external_links',
                                 revision: revision,
                                 configuration: {
                                   linked_external_site_perma_ids: [10]
                                 })

        html = render_page(page)

        expect(html).to have_selector('.link-title', text: 'Example')
      end
    end
  end
end
