module DefaultPageContent
  extend ActiveSupport::Concern

  included do
    before_action :set_page_defaults
  end

  def set_page_defaults
    @page_title = 'Ivan Garcia | Full Stack Portfolio Website and Blog'
    @seo_keywords = "Ivan Garcia's Portfolio"
  end
end