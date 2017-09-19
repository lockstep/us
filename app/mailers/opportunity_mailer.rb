# frozen_string_literal: true

class OpportunityMailer < ApplicationMailer
  def notify_admin_on_customer_submit(args)
    @project_name = args[:project_name]
    @customer_name = args[:customer_name]
    @email = args[:email]
    @phone_number = args[:phone_number]
    @description = args[:description]

    mail from: 'no-reply@locksteplabs.com',
         to: ['info@locksteplabs.com'],
         subject: 'Lockstep Inquiry'
  end
end
