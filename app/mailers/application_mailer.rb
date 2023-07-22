require 'action_mailer'

class ApplicationMailer < ActionMailer::Base

  default from: 'Shoppers Haven'

  layout 'mailer'
end