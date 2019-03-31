module SetCopyright
  extend ActiveSupport::Concern

  included do
    before_action :set_copyright
  end

  def set_copyright
    @copyright = "<div>&copy; #{Time.now.year} | <b>Ivan Garcia</b> All rights reserved</div>".html_safe
  end
end