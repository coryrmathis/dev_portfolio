class ProjectsController < ApplicationController

  def show
    @project = Project.find(params[:id])

    respond_to do |format|
      format.json{ render json: @project }
    end
  end
end