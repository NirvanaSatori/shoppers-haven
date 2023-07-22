require 'sendgrid-ruby'
include SendGrid
class FeedbackMailer < ApplicationMailer
 def send_feedback_email(email)

   from = SendGrid::Email.new(email: 'Morris Waithaka')
   
   to = SendGrid::Email.new(email: email)

   subject = 'Shoppers Haven!'

   content = SendGrid::Content.new(type: 'text/plain', value: 'We have received your feedback. We will get in touch with you soon!')
   mail = SendGrid::Mail.new(from, subject, to, content)

   sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
   response = sg.client.mail._('send').post(request_body: mail.to_json)

   puts response.status_code
   puts response.body
   puts response.headers
 end
end

