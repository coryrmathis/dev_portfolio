class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :url
      t.text :description
      t.string :dates
      t.timestamps
    end
  end
end
