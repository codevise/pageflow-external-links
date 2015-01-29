module PageflowExternalLinks
  class InstallGenerator < Pageflow::PageTypeInstallGenerator
    def engine
      Pageflow::ExternalLinks::Engine
    end
  end
end
