source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }
ruby "3.2.2"

# gem 'dotenv-rails'
gem 'rails', '~> 7.0', '>= 7.0.4.3'
gem 'activejob'
gem 'sendgrid-ruby'
gem 'actionmailer'
# gem 'dotenv', '~> 2.8', '>= 2.8.1'

gem 'dotenv-rails', groups: [:development, :test]
# Use postgresql as the database for Active Record
gem 'pg', '~> 1.5', '>= 1.5.3'
# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '~> 6.2', '>= 6.2.2'# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "importmap-rails"
# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"
# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"
# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"
# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
gem 'bcrypt'
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false
group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug"
end
gem 'jwt'
group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"
end
group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end