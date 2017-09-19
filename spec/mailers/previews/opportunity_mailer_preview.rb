# Preview all emails at http://localhost:3000/rails/mailers/opportunity_mailer
class OpportunityMailerPreview < ActionMailer::Preview
  def notify_admin_on_customer_submit_preview
    OpportunityMailer.notify_admin_on_customer_submit(
      project_name: 'ABC Company',
      customer_name: 'John Doe',
      email: 'john@example.com',
      phone_number: '123 456 7890'
    )
  end
end
