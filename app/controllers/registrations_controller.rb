class RegistrationsController < Devise::RegistrationsController

  def after_sign_up_path_for(resource)
    new_role_url
  end

end
