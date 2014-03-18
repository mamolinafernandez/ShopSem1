class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.references :product, index: true
      t.references :order, index: true
      t.integer :quantity
      t.decimal :price, precision: 6, scale: 2

      t.timestamps
    end
  end
end
