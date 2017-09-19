# frozen_string_literal: true

class OpportunitiesController < ApplicationController
  skip_before_action :authenticate_user!

  def create
    OpportunityMailer.notify_admin_on_customer_submit(permitted_params).deliver
    flash[:notice] = 'Thank you for your interest, we will contact you soon.'
    redirect_to contact_path
  end

  private

  def permitted_params
    params.permit(
      :project_name,
      :customer_name,
      :email,
      :phone_number,
      :description
    )
  end
end
