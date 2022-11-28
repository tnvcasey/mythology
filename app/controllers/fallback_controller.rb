class FallbackController < ActionController::Base
    def index
        render: 'public/index.html'
    end
end