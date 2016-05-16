class User < ActiveRecord::Base
  has_many :teachings, class_name: 'Classroom', foreign_key: :instructor_id
  has_many :viewings, class_name: 'Classroom', foreign_key: :apprentice_id
  has_many :specializations, foreign_key: :cook_id
  has_many :specialties, through: :specializations
  # def self.from_omniauth(auth)
  #   @user = User.first_or_initialize_by(user_params)
  #   @user.provider = auth.provider
  #   @user.uid = auth.uid
  #   @user.full_name = auth.info.name
  #   @user.oauth_token = auth.credentials.token
  #   @user.oauth_expires_at = Time.at(auth.credentials.expires_at)
  #   @user.save!
  # end

  def instructorScore
    scores = self.teachings.pluck(:instructor_goodness)
    average = scores.reduce(:+)/self.teachings.count

  end

  def apprenticeScore
    scores = self.viewings.pluck(:apprentice_goodness)
    average = (scores.reduce(:+))/(self.viewings.count)
  end

  def verifiedAwesome
    categories = self.teachings.pluck(:cuisine)
    categories.uniq!
    verified =[]
    categories.each do |cat|
      holder = self.teachings.where(cuisine: cat)
      holder = holder.where.not(instructor_goodness: nil)
      quantity = holder.count
      if quantity > 0
        score = holder.pluck(:instructor_goodness).reduce(:+)/quantity
      end
      if quantity > 4 && score >= 4
        verified << cat
      end
    end
    return verified
  end

  def missingRatings
    rooms =[]
    revs_for_instructors = this.viewings.where(instructor_goodness: nil)
    revs_for_viewers = this.teachings.where(apprentice_goodness: nil)
    revs_for_instructors.each do |rev|
      if rev.done?
        rooms << rev.id
      end
    end
    revs_for_viewers.each do |rev|
      if rev.done?
        rooms << rev.id
      end
    end
    return rooms
  end

  def self.from_omniauth(auth)
    p auth.info

    where(provider: auth.provider, uid: auth.uid).first_or_create.tap do |user|
      user.provider = auth.provider
      user.uid      = auth.uid
      user.email    =  auth.info.email
      # user.first_name = auth.info.first_name
      user.full_name = auth.info.name
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save
    end
  end
end
