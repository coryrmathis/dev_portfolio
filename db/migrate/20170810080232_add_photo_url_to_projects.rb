class AddPhotoUrlToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :photo_url, :string
  end
end
