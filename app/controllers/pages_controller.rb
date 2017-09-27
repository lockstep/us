# frozen_string_literal: true

class PagesController < ApplicationController
  include HighVoltage::StaticPage

  skip_before_action :authenticate_user!

  def landing
    cookies.permanent[:returning_visiter] = true
  end

  def home
  end

  def hire_us
  end

  def work
  end

  def services
  end

  def team
  end
end
