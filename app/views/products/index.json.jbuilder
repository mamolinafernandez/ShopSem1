json.array!(@products) do |product|
  json.extract! product, :id, :name, :description, :registered_at, :manufacturer, :quantity
  json.url product_url(product, format: :json)
end
