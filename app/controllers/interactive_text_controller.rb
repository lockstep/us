# frozen_string_literal: true

class InteractiveTextController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    render json: { text: I18n.t("interactive_text.#{params[:text_index]}") }
  end
end
