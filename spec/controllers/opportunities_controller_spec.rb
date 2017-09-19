# frozen_string_literal: true

require 'rails_helper'

describe OpportunitiesController do
  describe '#create' do
    it 'sends an email' do
      expect {
        post :create, params: { project_name: 'ABC Company' }
      }.to change { ActionMailer::Base.deliveries.count }.by(1)
    end
  end
end
