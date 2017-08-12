class PagesController < ApplicationController

  def index
    @portrait_url = S3_BUCKET.object('portrait.jpeg').presigned_url(:get)
    @projects = Project.order(name: :asc)
  end

  def about
  end

  def projects
  end

end
