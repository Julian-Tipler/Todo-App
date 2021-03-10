class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.references :list, foreign_key: true
      t.text :title
      t.text :description
      t.boolean :status

      t.timestamps
    end
  end
end
