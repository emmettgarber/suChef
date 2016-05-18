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

  def kitchen_hashes
    teachings_to_rate = teachings.where(apprentice_goodness: nil)
    viewings_to_rate = viewings.where(instructor_goodness: nil)
    complete_viewings = (teachings_to_rate + viewings_to_rate).sort_by(&:starttime).map do |kitchen|
      kitchen.as_json.merge(user_type: kitchen.instructor_id == self.id ? "Teacher" : "Student")
    end
    return complete_viewings
	end

  def totalAverage
    count = self.teachings.where.not("instructor_goodness" => nil).count
    count1 = self.viewings.where.not("apprentice_goodness" => nil).count
    scores = self.teachings.where.not("instructor_goodness" => nil).pluck(:instructor_goodness)
    scores1 = self.viewings.where.not("apprentice_goodness" => nil).pluck(:apprentice_goodness)
    if scores.count > 0 && scores1.count > 0
      finalscore = (scores.reduce(:+) + scores1.reduce(:+))/(count + count1)
    else
      finalscore = 0
    end
  end

  def instructorScore
    if self.teachings.count > 0
      scores = self.teachings.pluck(:instructor_goodness)
      scores.select! {|rating| rating != nil }
      if scores.length > 0
        average = scores.reduce(:+)/scores.count
      else
        average = 0
      end
    else
      average = 0
    end
  end

  def apprenticeScore
    if self.viewings.count > 0
      scores = self.viewings.pluck(:apprentice_goodness)
      scores.select! {|rating| rating != nil }
      if scores.length > 0
        average = scores.reduce(:+)/scores.count
      else
        average = 0
      end
    else
      average = 0
    end
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
