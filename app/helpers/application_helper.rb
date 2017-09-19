# frozen_string_literal: true

module ApplicationHelper
  # Translate Rails standard flash keys for Bootstrap
  def flash_alert_class(name)
    case name
    when 'notice' then 'success'
    when 'alert'  then 'danger'
    else name
    end
  end

  def body_class(action_name)
    case action_name
    when 'work' then 'work-index'
    when 'services' then 'services-index'
    when 'hire_us' then 'hire-us'
    else "logo-on-dark-background #{action_name.dasherize}"
    end
  end
end
