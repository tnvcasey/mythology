class CreateGods < ActiveRecord::Migration[7.0]
  def change
    create_table :gods do |t|
      t.string :name
      t.string :romanname
      t.string :power
      t.string :image

      t.timestamps
    end
  end
end
