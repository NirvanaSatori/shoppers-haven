require 'action_mailer'

class ApplicationMailer < ActionMailer::Base

  default from: 'morris.waithaka42@gmail.com'

  layout 'mailer'
end