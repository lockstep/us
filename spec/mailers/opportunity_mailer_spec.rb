# frozen_string_literal: true

require 'rails_helper'

describe OpportunityMailer do
  describe '#notify_admin_on_customer_submit' do
    before do
      @mail = OpportunityMailer.notify_admin_on_customer_submit(
        project_name: 'ABC Company',
        customer_name: 'John Doe',
        email: 'john@example.com',
        phone_number: '123 456 7890'
      )
    end

    it 'renders the subject' do
      expect(@mail.subject).to match('Lockstep Inquiry')
    end

    it 'renders the receiver email' do
      expect(@mail.to).to include('info@locksteplabs.com')
    end

    it 'renders the sender email' do
      expect(@mail.from).to include('no-reply@locksteplabs.com')
    end

    it 'renders content correctly' do
      encoded_body = @mail.body.encoded
      expect(encoded_body).to match('Company/Project: ABC Company')
      expect(encoded_body).to match('Customer Name: John Doe')
      expect(encoded_body).to match('Email: john@example.com')
      expect(encoded_body).to match('Phone: 123 456 7890')
      expect(encoded_body).to match('Description: -')
    end
  end
end
